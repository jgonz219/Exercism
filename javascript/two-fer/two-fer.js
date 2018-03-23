var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  let text = ''

  if (who) {
    text += `One for ${who}, one for me.`
  }
  else {
    text += 'One for you, one for me.'
  }

  return text
};

module.exports = TwoFer;
