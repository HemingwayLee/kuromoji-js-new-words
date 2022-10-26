# kuromoji-js-new-words
* Add new words into [kuromoji.js](https://github.com/takuyaa/kuromoji.js/)

## How to run
* Put the words you want to add into `myname.csv`
* Build this docker image because kuromoji.js only works in node v11
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

## Reference
* You can look at [github action](https://github.com/HemingwayLee/kuromoji-js-new-words/blob/main/.github/workflows/runner.yml) for more information

