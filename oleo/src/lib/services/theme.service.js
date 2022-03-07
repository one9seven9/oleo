// Check is user has manually modified theme
// if not listen for os theme
// if user modifies, remove listener

// else use localStorage
// if reset, listen for os theme

const activateDarkMode = () => {
  // document.documentElement.classList.add('dark')
  // document.documentElement.classList.remove('dark')
}

const userModified = () => globalThis.localStorage.theme

export const osThemeListener = () => {
  if (!globalThis.localStorage.theme) {
    globalThis.matchMedia('(prefers-color-scheme: dark)').addListener(
      (e) => e.matches && activateDarkMode() // listener
    )
  }
}

export const storageListener = () => {
  console.log('listening.....')
  window.addEventListener('storage', (e) => {
    // console.log('storage-------', e)
    // console.log(JSON.parse(localStorage.getItem('theme')))
    alert(`Theme -------- ${localStorage.theme}`)
  })
}

export const toggleThemeStorage = () =>
  (globalThis.localStorage.theme =
    globalThis.localStorage?.theme === 'dark' ? 'light' : 'dark')

export const updateTheme = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    !('theme' in globalThis.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
