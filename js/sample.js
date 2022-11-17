// 任意のhtml要素を探すことができるquerySelector()
const dummyContent = document.querySelector('.dummy');
for (let i = 0; i <1000; i++) {
  dummyContent.textContent += ' テキスト ' + i;
}
//スクロールイベントで非表示なっているボタンを表示させる 
// window.scrollYで縦にスクロールする距離を取得できる
// 今回はブラウザ自体のスクロールなのでブラウザオブジェクトの頂点に存在する
// windowオブジェクトに対してscroolイベントを設定している

window.addEventListener('scroll',function() {
  const button = document.querySelector('.moveToTop');
  const counter = document.querySelector('.counter');    //window + top
  const counter2 = document.querySelector('.counter2');  //top
  const counter3 = document.querySelector('.counter3'); //windowH
  const counter4 = document.querySelector('.counter4'); //scrollHeight/2


  let key = document.documentElement.scrollHeight/2; 
  let top = document.documentElement.scrollTop;//スクロールしている量
	let windowH = document.documentElement.clientHeight;//ウインドウの高さ
  
  counter.textContent = top + windowH
  counter2.textContent = top 
  counter3.textContent = windowH
  counter4.textContent = key
  
  // ページのスクロール量 + 最初に表示されているWindowのページの高さの数値がページ全体のサイズの半分の値を超えたらボタンを表示

  if (key < top + windowH){    
// if (window.scrollY >= (document.body.clientHeight/2)){ ←これもそれっぽい挙動になる
    button.style.display = 'block';  
  }else{
    button.style.display = 'none';
  }
});

const button = document.querySelector('.moveToTop');
button.addEventListener('click',function() {
  window.scrollTo ({
    top: 0,
    left:0,
    behavior: 'smooth' 
  });
});
