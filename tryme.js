var kuromoji = require("kuromoji");
const punycode = require('punycode');

var regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;
function countSymbolsIgnoringCombiningMarks(string) {
  var stripped = string.replace(regexSymbolWithCombiningMarks, function($0, symbol, combiningMarks) {
	  console.log(`${symbol}, ${combiningMarks}`)
    return symbol;
  });
  
  return stripped;
}


kuromoji.builder({ dicPath: "/home/lib/kuromoji.js/dict/" }).build(function (err, tokenizer) {
  console.log("--- use newly generated dict ---")
  
  var path = tokenizer.tokenize(
    countSymbolsIgnoringCombiningMarks("禰󠄀豆子に襲われかけた炭治郎を救ったのは冨岡義勇と名乗る剣士だった。")
  );
  console.log(path);

  path = tokenizer.tokenize(
    countSymbolsIgnoringCombiningMarks("実家は西住流戦車道の家元で、黒森峰女学園の西住まほは実姉。")
  );
  console.log(path);
});

kuromoji.builder({ dicPath: "/home/lib/kuromoji.js/dict_ori/" }).build(function (err, tokenizer) {
  console.log("--- use original dict ---")

  var path = tokenizer.tokenize(
    countSymbolsIgnoringCombiningMarks("禰󠄀豆子に襲われかけた炭治郎を救ったのは冨岡義勇と名乗る剣士だった。")
  );
  console.log(path);

  path = tokenizer.tokenize(
    countSymbolsIgnoringCombiningMarks("実家は西住流戦車道の家元で、黒森峰女学園の西住まほは実姉。")
  );
  console.log(path);
});

