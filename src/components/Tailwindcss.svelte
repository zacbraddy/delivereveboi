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
    --color-bg-danger: #850d03;
    --color-border-primary: #035f87;
    --color-border-secondary: #850d03;

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
    --color-bg-danger: #bf0299;
    --color-border-primary: #03cdff;
    --color-border-secondary: #ff03d1;

    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
</style>
