module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ts',
                    '.tsx',
                    '.js',
                    '.jsx',
                    '.json',
                ],
                alias: {
                    app: './src/app',
                    lib: './src/lib',
                    assets: './src/assets',
                    features: './src/features',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
}
