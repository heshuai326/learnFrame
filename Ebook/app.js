const https = require('https')
const fs = require('fs')
const uitl = require('util')
const path = require('path')

const program = require('commander')

const packageJson = require('./package.json')
const appConfig = require('./config.json')

program
    .version(packageJson.version)
    .option('-c, --config <path>', 'Config file path')
    .option('-p, --port <port>', 'Listening port number')
    .option('-a, --address <ip>', 'Listening host name or ip')
    .option('-b, --blockchain <path>', 'Blockchain db path')
    .option('-x, --peers [peers...]', 'Peers list')
    .option('-l, --log <level>', 'Log level')
    .parse(process.argv);

if (program.port) {
    appConfig.port = program.port
}

// yuo
process.on('uncaughtException', function(err) {
    console.err(err)
    process.emit('cleanup')
})

// 
const d = require('domain').create()
d.on('error', function(err){
    process.exit(-0)
})