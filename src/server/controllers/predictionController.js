const { exec } = require('child_process');

function predictModel(req, res) {
  const inputData = req.body;
  const pythonScriptPath = './run_ml_model.py';

  // execute Python script
  exec(`python3 ${pythonScriptPath} ${JSON.stringify(inputData)}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // parse Python script output (prediction) and send it in the response
    const prediction = JSON.parse(stdout);
    res.json({ prediction });
  });
}

module.exports = {
  predictModel,
};