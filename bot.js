require('dotenv').config();
const Mastodon = require('mastodon-api');
const fs = require('fs');
const markov = require('./markov.js');

console.log("Mastodon Bot starting...");

const M = new Mastodon({
  client_key: process.env.CLIENT_KEY,
  client_secret: process.env.CLIENT_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
})

// USER EVENTS
const listener = M.stream('streaming/user');
listener.on('error', err => console.log(err));

listener.on('message', msg => { 
  // fs.writeFileSync(`data${new Date().getTime()}.json`, JSON.stringify(msg, null, 2));
  // console.log(msg);

  if (msg.event === 'notification') {
    if (msg.data.type === 'follow') {
      const acct = msg.data.account.acct;
      onFollow(acct);
    } else if (msg.data.type === 'mention') {

    }
  }
});


// FUNCTIONS
function onFollow(acct, id) {
  let quote = markov;
  toot(`@${acct} - ${quote}`);
}

// POST MESSAGE
function toot(content) {
  const params = {
    status: content,
  }

  M.post('statuses', params, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      //fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
      //console.log(data);
      console.log(`ID: ${data.id} and timestamp: ${data.created_at}`);
      console.log(data.content);
    }
  });
}