const options = {
  method: 'POST',
  headers: {
    'xi-api-key': '5416bfbffae6ad12a9e1c4ad6a0b1b51',
    'Content-Type': 'application/json'
  },
  body: '{"text":"and it is exactly why we should think of another solution that doesn\'t involve this middling approach of...","model_id":"eleven_multilingual_v2"}'
};

fetch('https://api.elevenlabs.io/v1/text-to-speech/PmxyxhMMr4p99dBVCopY?optimize_streaming_latency=1&output_format=mp3_44100_128', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
