module.exports = {
  apps: [
    {
      name: 'demoapp1',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
    }
  ]
}
