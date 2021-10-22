import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = process.env.NODE_ENV === 'production'

export default {
  input: './src/main.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: !production },
    { file: pkg.module, format: 'esm', sourcemap: !production },
  ],
  external: ['lit-html', 'lit-html/async-directive.js'],
  plugins: [
    resolve(),
    typescript({ sourceMap: !production, inlineSources: !production }),
    production && terser({ mangle: { properties: { regex: /^_/ } } }),
  ],
}
