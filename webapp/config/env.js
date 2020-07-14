const argv = require('yargs-parser')(process.argv.slice(4))
console.log(`argv:${argv}`)
const APP_ENV = argv.env || 'dev'
const env = require('./env.json')
const oriEnv = env[APP_ENV]

console.log('@oriEnv:', oriEnv)

Object.assign(oriEnv, {
    APP_ENV: APP_ENV
})
console.log(`当前启动环境：${APP_ENV}`);

module.exports = {
    APP_ENV,
    API_BASEURL: oriEnv["BASEURL"],
    API_PROBASE: oriEnv["PROBASE"]
}