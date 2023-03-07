/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../src/stories/astro-uxds/welcome/StartHere.mdx',
        '../src/stories/**/*.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-themes',
        '@astrouxds/storybook-addon-docs-stencil',
        '@storybook/addon-mdx-gfm',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-coverage',
            options: {
                istanbul: {
                    include: ['../src/**/stories/**'],
                },
            },
        },
    ],
    staticDirs: ['../dist'],
    framework: {
        name: '@storybook/web-components-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    logLevel: 'debug',
    features: {
        storyStoreV7: false,
    },
    refs: {
        'design-system': {
            title: 'Storybook Design System',
            url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
            expanded: false, // optional, true by default
        },
    },
}
export default config
