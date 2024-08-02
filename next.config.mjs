/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // JavaScript
        config.module.rules.unshift({
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: '@griffel/webpack-loader',
                },
            ],
        });

        // TypeScript
        config.module.rules.unshift({
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: '@griffel/webpack-loader',
                    options: {
                        babelOptions: {
                            presets: ['next/babel'],
                        },
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
