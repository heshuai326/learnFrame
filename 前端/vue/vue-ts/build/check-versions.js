'use strict'
// 检查版本

const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec(cmd) {
    // 返回通过child_process模块的新建子进程，执行Unix系统命令转成没有空格的字符串
    return require('child_process').execFileSync(cmd).toString().trim()
}

const versionRequiorements = [
    {
        name: 'node',
        currentVsersion: semver.clean(process.version), // 使用semver格式化版本
        versionRequiorements: packageConfig.engines.node
    }
]

// 有npm的配置，则加入数组检查
if (shell.which('npm')) {
    versionRequiorements.push({
        name: 'npm',
        currentVsersion: exec('npm --version'), // 检查版本，把参数返回给exec函数，获取到版本号
        versionRequiorements: packageConfig.engins.npm  
    })
}


module.exports = function() {
    const warnings = []
    for(let i=0; i<versionRequiorements.length; i++) {
        const mod = versionRequiorements[i]
        if(!semver.satisfies(mod.currentVsersion, mod.versionRequiorements)) {
            // 判断版本号不符合指定版本，就执行下面错误提示代码
            warnings.push(mod.currentVsersion+':'+
                chalk.red(mod.currentVsersion) + 'should be' + 
                chalk.green(mod.versionRequiorements)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to  modules:'))
        console.log()

        for(let i=0; i<warnings.length; i++) {
            const warning = warnings[i]
            console.log('  ' + warning)
        }

        console.log()
        process.exit()
    }
    
}
