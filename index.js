const players = {
  '7': '西川遥輝',
  '9': '中島卓也',
};

module.exports = uniformNumber => {
  const result = players[uniformNumber] || `背番号 ${uniformNumber} の選手はいません`;
  console.log(result);
  return result;
};
