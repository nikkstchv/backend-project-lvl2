#!/usr/bin/env node

// import { program } from 'commander'; //  как правильно и почему не работает?

const { program } = require('commander');
program
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');
  

program.parse(process.argv);