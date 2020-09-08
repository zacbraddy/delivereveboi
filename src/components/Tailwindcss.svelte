<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .theme-light {
    --color-text-primary: #035f87;
    --color-text-secondary: #850d03;
    --color-text-inverse: #fafafa;
    --color-bg-primary: #dadada;
    --color-bg-secondary: #fafafa;
    --color-bg-active: #035f87;

    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }

  .theme-dark {
    --color-text-primary: #03cdff;
    --color-text-secondary: #ff03d1;
    --color-text-inverse: #fafafa;
    --color-bg-primary: #333;
    --color-bg-secondary: #ddd;
    --color-bg-active: #0490b3;

    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
</style>
