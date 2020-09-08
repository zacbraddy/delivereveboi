<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .theme-light {
    --color-text-primary: #035f87;
    --color-text-secondary: #850d03;
    --color-bg-primary: #dadada;
    --color-bg-secondary: #fafafa;

    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }

  .theme-dark {
    --color-text-primary: #03cdff;
    --color-text-secondary: #ff03d1;
    --color-bg-primary: #333;
    --color-bg-secondary: #ddd;

    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
</style>
