const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    nx: {
        // Set this to true if you would like to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
    },
    experimental: {
        optimizePackageImports: [
            '@fruit-shop/ui-components',
            '@fruit-shop/hooks',
            '@fruit-shop/domain',
            '@fruit-shop/infrastructure'
        ]
    }
};

const plugins = [
    // Add more Next.js plugins to this list if needed.
    withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
