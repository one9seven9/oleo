<script>
  export let primary = null
  export let secondary = null
  export let disabled = null
  export let error = null
  export let success = null
</script>

<button on:click class:primary class:secondary class:error class:success {disabled}><slot/></button>

<style>
  /* base */
  button {
    border-radius: var(--theme-button-radius);
    color: var(--theme-button-base-color);
    background: var(--theme-button-base-bg);
    transition: 0.1s all ease-in-out;
    cursor: pointer;
    width: inherit;
    @apply py-2 px-10;
  }

  button:hover {
    color: var(--theme-button-base-color-hover);
    background: var(--theme-button-base-bg-hover);
  }

  button:active {
    color: var(--theme-button-base-color-active);
    background: var(--theme-button-base-bg-active);
  }

  button:disabled {
    color: var(--theme-button-base-color-disabled);
    background: var(--theme-button-base-bg-disabled);
    cursor: not-allowed;
    opacity: 0.25;
  }

  /* primary */
  button.primary {
    color: var(--theme-button-primary-color);
    background: var(--theme-button-primary-bg);
  }

  button.primary:hover {
    color: var(--theme-button-primary-color-hover);
    background: var(--theme-button-primary-bg-hover);
  }

  button.primary:active {
    color: var(--theme-button-primary-color-active);
    background: var(--theme-button-primary-bg-active);
  }

  button.primary:disabled {
    color: var(--theme-button-primary-color-disabled);
    background: var(--theme-button-primary-bg-disabled);
    opacity: 0.25;
  }

  /* secondary */
  button.secondary {
    color: var(--theme-button-secondary-color);
    background: var(--theme-button-secondary-bg);
  }

  button.secondary:hover {
    color: var(--theme-button-secondary-color-hover);
    background: var(--theme-button-secondary-bg-hover);
  }

  button.secondary:active {
    color: var(--theme-button-secondary-color-active);
    background: var(--theme-button-secondary-bg-active);
  }

  button.secondary:disabled {
    color: var(--theme-button-secondary-color-disabled);
    background: var(--theme-button-secondary-bg-disabled);
    opacity: 0.25;
  }

  /* success */
  button.success {
    color: var(--theme-button-success-color);
    background: var(--theme-button-success-bg);
  }

  button.success:hover {
    color: var(--theme-button-success-color-hover);
    background: var(--theme-button-success-bg-hover);
  }

  button.success:active {
    color: var(--theme-button-success-color-active);
    background: var(--theme-button-success-bg-active);
  }

  button.success:disabled {
    color: var(--theme-button-success-color-disabled);
    background: var(--theme-button-success-bg-disabled);
    opacity: 0.25;
  }

  /* error */
  button.error {
    color: var(--theme-button-error-color);
    background: var(--theme-button-error-bg);
  }

  button.error:hover {
    color: var(--theme-button-error-color-hover);
    background: var(--theme-button-error-bg-hover);
  }

  button.error:active {
    color: var(--theme-button-error-color-active);
    background: var(--theme-button-error-bg-active);
  }

  button.error:disabled {
    color: var(--theme-button-error-color-disabled);
    background: var(--theme-button-error-bg-disabled);
    opacity: 0.25;
  }
</style>
