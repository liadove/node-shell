const pwd = require('./pwd')
const ls = require('./ls')


process.stdout.write("prompt >")

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      pwd();
      process.stdout.write("\nprompt > ")
      break;
    case 'ls':
      ls();
      break;
      default:
        process.stdout.write(cmd +" not a command")
        process.stdout.write("\nprompt > ")
  }

})

