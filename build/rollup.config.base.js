import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import analyze from 'rollup-plugin-analyzer';

const config = require('../package.json');

export default {
  input: 'src/index.js',
  plugins: [
    vue({
      css: true,
    }),
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
    postcss(),
    analyze(),
  ],
  watch: {
    include: 'src/**',
  },
};
