<script>
  import { onMount } from "svelte";
  const DARK_THEME = "theme-dark";
  const LIGHT_THEME = "theme-light";
  let currentTheme = DARK_THEME;

  onMount(() => {
    const theme = localStorage.getItem("theme");

    if (theme === LIGHT_THEME) {
      document.body.classList.remove(DARK_THEME);
      currentTheme = LIGHT_THEME;
    }
  });

  function onClick() {
    if (currentTheme === DARK_THEME) {
      document.body.classList.remove(DARK_THEME);
      document.body.classList.add(LIGHT_THEME);
      currentTheme = LIGHT_THEME;
      localStorage.setItem("theme", LIGHT_THEME);
    } else {
      document.body.classList.remove(LIGHT_THEME);
      document.body.classList.add(DARK_THEME);
      currentTheme = DARK_THEME;
      localStorage.setItem("theme", DARK_THEME);
    }
  }
</script>

<button id="btnDarkMode" on:click={onClick}>
  <i
    class:fa-moon={currentTheme === DARK_THEME}
    class:fa-sun={currentTheme !== DARK_THEME}
    class="far text-primary" />
</button>
