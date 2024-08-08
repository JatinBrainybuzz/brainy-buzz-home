module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      cwd: '/home/1078832.cloudwaysapps.com/ncmddvhzen/public_html',
    }
  ]
}