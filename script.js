/*Copyright 2019 井上葵*/
'use strict';
const anchor = document.createElement('a'), // anchor要素の生成
      br = document.createElement('br'),    // break要素の生成
      //  キャラクターのデータベース
      characters = [
        {
          name: 'アオバ',
          series: 'psycho',
          url: 'https://docs.google.com/document/d/1gmKUzaNZyfPHaR4lg3zUkRgHAmQLqp2s24k4kmoKoxI/edit?tab=t.rcjpnkkunh2f'
        },
        {
          name: 'リエン',
          series: 'psycho',
          url: 'https://docs.google.com/document/d/1gmKUzaNZyfPHaR4lg3zUkRgHAmQLqp2s24k4kmoKoxI/edit?tab=t.mumsjfat0p5b'
        },
        {
          name: 'ヴェン',
          series: 'psycho',
          url: 'https://docs.google.com/document/d/1gmKUzaNZyfPHaR4lg3zUkRgHAmQLqp2s24k4kmoKoxI/edit?tab=t.rfd20i7bh3f0'
        },
        {
          name: 'ハル',
          series: 'psycho',
          url: undefined
        },
        {
          name: 'シィ',
          series: 'psycho',
          url: undefined
        },
        {
          name: '暁',
          series: 'psycho',
          url: undefined
        },
        {
          name: 'フォメット',
          series: 'psycho',
          url: undefined
        },
        {
          name: 'レアリ',
          series: 'psycho',
          url: undefined
        },
        {
          name: 'アオイ',
          series: 'devil’sMarch',
          url: undefined
        },
        {
          name: 'ネル',
          series: 'devil’sMarch',
          url: undefined
        },
        {
          name: 'ケイ',
          series: 'devil’sMarch',
          url: undefined
        },
        {
          name: 'チノ',
          series: 'inhumans',
          url: undefined
        },
        {
          name: 'ユリア',
          series: 'devil’sMarch',
          url: undefined
        },
        {
          name: 'サティ',
          series: 'inhumans',
          url: undefined
        },
        {
          name: '裏サティ',
          series: 'inhumans',
          url: undefined
        }
      ],
      doSelect = document.getElementById('do-select'),  //  ガチャボタンの要素を取得
      protGiude = document.getElementById('prot-guide'),//  プロットについての欄を取得
      selectResult = document.getElementById('select-result'),//  結果を表示する要素を取得
      today = new Date(); //  結果を日替わりにするので、日付を取得

doSelect.onclick = selectCharacter;

function selectCharacter() {
  if (selectResult.innerText) {
    return;
  }

  let date = today.getDate(),
  month = today.getMonth(),
  year = today.getFullYear(),
  charaNumber = (year + month + date) % characters.length,
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
