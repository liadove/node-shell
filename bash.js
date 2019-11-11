const pwd = require('./pwd')
const ls = require('./ls')


process.stdin.on('data', (data) => {

  process.stdout.write("prompt >")
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      pwd()
      break;
    case 'ls':
      ls()
      break;
  }
  process.stdout.write("\n prompt > ")
}

