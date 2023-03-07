#!/usr/bin/env node

const pkg = require('../package.json');
const version = pkg.dependencies['@tonaljs/tonal'].match(/([\d.]+)/)[0];
process.stdout.write(version);
