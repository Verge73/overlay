const options = {
  method: 'POST',
  headers: {
    'xi-api-key': '5416bfbffae6ad12a9e1c4ad6a0b1b51',
    'Content-Type': 'application/json'
  },
  body: '{"text":"aaaaaaaaaaaaa"}'
};

fetch('https://api.elevenlabs.io/v1/text-to-speech/PmxyxhMMr4p99dBVCopY', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
