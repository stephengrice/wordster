const assert = require('assert');
const Sentence = require('../src/sentence');

describe('Sentence', () => {
  var sentence, str;
  before(() => {
    sentence = new Sentence();
    str = sentence.toString();
    console.log('  Generated test sentence: \n  ' + str);
  });
  it('has words', () => {
    assert(sentence.words.length > 0);
  });
  it('includes each of its words in toString', () => {
    for (var i = 0; i < sentence.words.length; i++) {
      assert(str.toLowerCase().includes(sentence.words[i].toString().toLowerCase()));
    }
  });
  it('ends with punctuation', () => {
    let lastChar = str[str.length - 1];
    assert(lastChar == '.' || lastChar == '!' || lastChar == '?');
  });
  it('has spaces between words', () => {
    for (var i = 0; i < sentence.words.length - 1; i++) { // Skip the last word since it's at the very end
        let word = sentence.words[i].toString();
        let idx = str.indexOf(word);
        let spaceChar = str.charAt(idx + word.length);
        assert(spaceChar == ' ', `Character ${spaceChar} in sentence ${str} should be a space but is not.`);
    }
  });
  it('begins with a capital letter', () => {
    assert(str[0] == str[0].toUpperCase());
  });
  it('does not repeat words', () => {
    for (var i = 0; i < sentence.words.length - 1; i++) {
      let thisword = sentence.words[i];
      let nextword = sentence.words[i+1];
      assert.notEqual(thisword.toString(), nextword.toString());
    }
  });
});
