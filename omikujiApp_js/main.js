const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const results =['大吉', '中吉', '吉', '小吉'];
  const n = Math.floor(Math.random() * results.length);
  // 文字増やす

  result.textContent = results[n]
  
  // switch(n){
  //   case 0:
  //     result.textContent = '大吉';
  //     break;
  //   case 1:
  //     result.textContent = '中吉';
  //     break;
  //   case 2:
  //     result.textContent = '吉';
  //     break;
  // }
});

// 小吉、大凶などを増やしてみても面白いかも
