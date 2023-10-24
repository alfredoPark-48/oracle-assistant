const { exec } = require('child_process');
const path = require('path');

// NODE_MAIN environment variable to specify the entry point
process.env.NODE_MAIN = path.resolve(__dirname, 'main.js');

exec('npm pack', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log('Package packed successfully');
});
