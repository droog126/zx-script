
$`echo fuck`
var r=$`npm init vite@latest`
$`echo ui2`

async function repeat(func,count,time) {
  for (var i = 0; i < count; i++){
      await new Promise((rsv,rjc) => {
        setTimeout(() => {
          func();
          rsv();
        },time)  
      })
  }
}

function fun() {
  console.log(r);
}
repeat(fun,10,1000);