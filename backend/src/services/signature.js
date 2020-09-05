/*
  Signature:
    - nickname
    - created timestamp
    - random characters
  generator: encrypt(signature)
  reader: decrypt(signature)
*/

const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 512 });

module.exports = {
  generator: (nickname) => {
    return key.encrypt({
      nickname: nickname,
      timestamp: Date.now(),
      random: Math.floor(Math.random() * 1000000),
    }, 'hex');
  },

  reader: (signature) => {
    let buffer = Buffer.from(signature, 'hex');
    signature = buffer.toString('base64');
    return JSON.parse(key.decrypt(signature, 'utf8'));
  },
};