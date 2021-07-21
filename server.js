const axios = require('axios');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', async (req, res) => {
  try {
    const apiResponse = await axios.get(
      'http://104.239.144.138:3000/api/state2city/TX'
    );
    res.send(apiResponse.data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
