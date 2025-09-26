import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.tsx",
    "../src/pages/**/*.mdx"
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    "name": '@storybook/react-vite',
    "options": {},
    },
  core: {
   "builder": '@storybook/builder-vite',
  }

};
  

export default config;