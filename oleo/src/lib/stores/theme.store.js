import CONFIG from '../../ui.config'
import { writable, derived, get } from 'svelte/store'

////////////////////////////////////////////////////////////////
// DEFAULT VALUES //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const _theme_user = localStorage.theme_user || false
const _theme_os = localStorage.theme_os || CONFIG.THEME
const _theme_ambient = localStorage.theme_ambient || false

////////////////////////////////////////////////////////////////
// STORES //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
export const theme_user = writable(_theme_user)
export const theme_os = writable(_theme_os)

// SET THEME TO "theme_user" IF IT EXISTS, ELSE SET TO "theme_os"
export const theme = derived(
  [theme_user, theme_os],
  ([$theme_user, $theme_os]) => $theme_user || $theme_os
)

/**
 * Set the HTML CSS class to either 'dark' or 'light'.
 * If an explicit value is set on with the '__theme' argument
 * then that value will be set as the class, otherwise the
 * value will be set from the 'theme' store value.
 * @param {*} [__theme=get(theme)]
 */
const setThemeHtmlClass = (__theme = get(theme)) => {
  const vals = {
    dark: 'light',
    light: 'dark',
  }

  document.documentElement.classList.remove(vals[__theme])
  document.documentElement.classList.add(__theme)
}

////////////////////////////////////////////////////////////////
// THEME_USER //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Set the "theme_user" store value.  If "__theme" is null, reset
 * set the store to false and remove the localStorage key.
 * @param {*} [__theme=null] - should be "light", "dark", or null
 */
export const setTheme = (__theme = null) => {
  if (__theme === null) {
    theme_user.set(false)
    localStorage.removeItem('theme_user')
  } else {
    theme_user.set(__theme)
    localStorage.setItem('theme_user', __theme)
  }

  setThemeHtmlClass()
}

// 'setTheme' HELPER ALIASES
export const setThemeDark = () => setTheme('dark')
export const setThemeLight = () => setTheme('light')
export const resetTheme = () => setTheme()

////////////////////////////////////////////////////////////////
// THEME_OS ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Set the "theme_os" store and localStorage value.
 * @param {string} __theme - should be "light" or "dark"
 */
const setThemeOs = (__theme) => {
  theme_os.set(__theme)
  localStorage.setItem('theme_os', __theme)

  if (get(theme_user)) {
    setThemeHtmlClass()
  }
}

/**
 * Listens to a change in the OS theme from 'light' or 'dark'.
 */
export const osThemeListener = () => {
  // set initial HTML class
  setThemeHtmlClass()

  const themeQuery = window.matchMedia(`(prefers-color-scheme: dark)`)
  const updateOsTheme = (e) => {
    setThemeOs(e.matches ? 'dark' : 'light')

    // update the HTML class if "theme_user" does not exist
    if (!get(theme_user)) {
      setThemeHtmlClass()
    }
  }

  themeQuery.addEventListener('change', updateOsTheme)
}

// TODO: Ambient Sensor
/**
 * Listens to a change in the OS ambient status.
 */
// export const ambientListener = () => {
//   if ('AmbientLightSensor' in window) {
//     const sensor = new AmbientLightSensor()
//     sensor.addEventListener('reading', event => {
//       console.log('Current light level:', sensor.illuminance);
//     });
//     sensor.addEventListener('error', event => {
//       console.log(event.error.name, event.error.message);
//     });
//     sensor.start();
//   }
// }

// export helper object with public methods
export const THEME = {
  set: setTheme,
  light: setThemeLight,
  dark: setThemeDark,
  reset: resetTheme,
  listen: {
    os: osThemeListener,
    // ambient: ambientListener
  }
}
