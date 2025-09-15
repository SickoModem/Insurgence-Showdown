module.exports = {
  apps: [{
    name: 'insurgence-showdown',
    script: './pokemon-showdown',
    cwd: '/home/opc/Insurgence-Showdown',
    instances: 1,
    exec_mode: 'fork',  // Add this line
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
