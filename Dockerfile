FROM node:11

RUN apt-get update && apt-get install -y vim git-all 

RUN mkdir -p /home/lib/
COPY . /home/lib/
WORKDIR /home/lib/
RUN git clone https://github.com/takuyaa/kuromoji.js.git

WORKDIR /home/lib/kuromoji.js/
RUN rm package-lock.json
RUN npm install .
RUN cp /home/lib/myname.csv /home/lib/kuromoji.js/node_modules/mecab-ipadic-seed/lib/dict/
RUN npm run build-dict

RUN mkdir -p /home/app/
RUN cp /home/lib/tryme.js /home/app/
WORKDIR /home/app/
RUN npm install kuromoji
RUN npm install punycode
RUN node tryme.js


