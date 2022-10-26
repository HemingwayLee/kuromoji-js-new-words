# kuromoji-js-new-words
* Add new words into [kuromoji.js](https://github.com/takuyaa/kuromoji.js/)

## How to run
* Put the words you want to add into `myname.csv`
* Build this docker image because kuromoji.js works in older version of nodejs (e.g., node:11)
```
docker build -t mykuromoji .
```

* Test with `tryme.js` to see if the words added into dictionary or not
```
docker run mykuromoji /bin/bash -c 'node /home/app/tryme.js'
```

* Get dictionary files from docker images
```
docker create -ti --name dummy mykuromoji /bin/bash
docker cp dummy:/home/lib/kuromoji.js/dict/ .
docker rm -f dummy
```

## Result
* tokenization of newly generated dict
```javascript
[ { 
  word_id: 85230,
  word_type: 'KNOWN',
  word_position: 1,
  surface_form: '禰豆子',
  pos: '名詞',
  pos_detail_1: '固有名詞',
  pos_detail_2: '人名',
  pos_detail_3: '名',
  conjugated_type: '*',
  conjugated_form: '*',
  basic_form: '禰豆子',
  reading: 'ネズコ',
  pronunciation: 'ネズコ' }, ...
]
```

* tokenization of original dict
```javascript
[ { word_id: 20,
  word_type: 'UNKNOWN',
  word_position: 1,
  surface_form: '禰',
  pos: '名詞',
  pos_detail_1: '一般',
  pos_detail_2: '*',
  pos_detail_3: '*',
  conjugated_type: '*',
  conjugated_form: '*',
  basic_form: '*' },
{ word_id: 1300720,
  word_type: 'KNOWN',
  word_position: 2,
  surface_form: '豆',
  pos: '名詞',
  pos_detail_1: '一般',
  pos_detail_2: '*',
  pos_detail_3: '*',
  conjugated_type: '*',
  conjugated_form: '*',
  basic_form: '豆',
  reading: 'マメ',
  pronunciation: 'マメ' },
{ word_id: 84490,
  word_type: 'KNOWN',
  word_position: 3,
  surface_form: '子',
  pos: '名詞',
  pos_detail_1: '接尾',
  pos_detail_2: '一般',
  pos_detail_3: '*',
  conjugated_type: '*',
  conjugated_form: '*',
  basic_form: '子',
  reading: 'コ',
  pronunciation: 'コ' }, ...
]
```

## Reference
* You can look at [github action](https://github.com/HemingwayLee/kuromoji-js-new-words/blob/main/.github/workflows/runner.yml) for more information

