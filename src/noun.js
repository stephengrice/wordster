const fs = require('fs');

const Word = require('./word');

const KNOWN = JSON.parse(fs.readFileSync('data/nouns.json'));

class Noun extends Word {
  static get known() {
    return KNOWN;
  }
  static random() {
    let random = Math.floor(Math.random() * Object.keys(KNOWN).length);
    return new Noun(Object.keys(KNOWN)[random]);
  }
  constructor(base_form) {
    super(base_form);
  }
  toString() {
    return super.toString();
  }
}

module.exports = Noun;
