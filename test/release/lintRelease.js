'use strict';

const lint = require('mocha-eslint');

const paths = [
    'src/release/plugCubed/**/*.js'
];

const options = {};

lint(paths, options);
