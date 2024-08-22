import { Configuration } from 'webpack'
import path from 'path'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options
  return {
    mode,
    entry: paths.entry,
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[hash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
  }
}
