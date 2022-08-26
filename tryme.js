var kuromoji = require("kuromoji");

kuromoji.builder({ dicPath: "/home/lib/kuromoji.js/dict/" }).build(function (err, tokenizer) {
    var path = tokenizer.tokenize("禰󠄀豆子に襲われかけた炭治郎を救ったのは冨岡義勇と名乗る剣士だった。");
    console.log(path);

    path = tokenizer.tokenize("実家は西住流戦車道の家元で、黒森峰女学園の西住まほは実姉。");
    console.log(path);
});

