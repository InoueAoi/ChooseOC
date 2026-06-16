/*Copyright 2019 井上葵*/
'use strict';
const anchor = document.createElement('a'), // anchor要素の生成
      br = document.createElement('br'),    // break要素の生成
      doSelect = document.getElementById('do-select'),  //  ガチャボタンの要素を取得
      protGiude = document.getElementById('prot-guide'),//  プロットについての欄を取得
      selectResult = document.getElementById('select-result'),//  結果を表示する要素を取得
      today = new Date();

doSelect.onclick = selectCharacter;

async function getJSON(URL) {
    let jsonURL = URL;
    var request = new Request(jsonURL);
    var response = await fetch(request);
    var json = await response.json();
    return json;
}

async function selectCharacter() {
  if (selectResult.innerText) {
    return;
  }

  let characters = await getJSON('https://raw.githubusercontent.com/InoueAoi/ChooseOC/refs/heads/main/characters.json'),
  date = Math.floor(today / 1000 / 60 / 60 / 24),
  charaNumber = date % characters.length,
  chara = characters[charaNumber];

  if (chara.url) {
    anchor.href = chara.url;
    anchor.innerText = 'これをクリック';
  } else {
    anchor.innerText = 'こいつのプロットは存在しない。書け。';
  }

  selectResult.innerText = '今日描くべきキャラクターは' + chara.name + 'です。';
  selectResult.appendChild(br);
  selectResult.append(chara.series + 'のキャラクター');
  protGiude.innerText = 'どんなキャラかわからん場合はプロットを見るのだ。';
  protGiude.appendChild(br);
  protGiude.appendChild(anchor);
}
