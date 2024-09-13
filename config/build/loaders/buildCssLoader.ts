import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export const buildCssLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          namedExport: false,
          exportLocalsConvention: 'as-is',
          auto: (path: string) => Boolean(path.includes('.module.')),
          localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]', // '[path][name]__[local]__[hash:base64:5]'
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
})
