import path from 'path'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'

const isDebug = ['debug', 'dev', 'development'].includes(process.env.NODE_ENV)

export default {
  input: './src/main.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: !isDebug },
    { file: pkg.module, format: 'esm', sourcemap: !isDebug },
  ],
  external: ['lit-html', 'lit-html/async-directive.js'],
  plugins: [
    resolve(),
    typescript({ sourceMap: !isDebug, inlineSources: !isDebug }),
    visualizer({ filename: `${path.dirname(pkg.module)}/stats.html`, gzipSize: true, sourcemap: true, template: 'sunburst' }),
    !isDebug && terser({ mangle: { properties: { regex: /^_/ } } }),
  ],
}
