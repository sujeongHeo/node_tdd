const express= require('express');
const app = express(); 
// 익스프레스 인스턴스 ( 서버에 필요한 미들웨어)
// 서버를 요청 대기 상태로 만들 수 있음 
// 미들웨어 (함수들의 연속) 만들기 
function logger(req, res, next){
    console.log('I am logger');
    next(); // 미들웨어는 next() 를 호출해야 다음 로직 수행 가능 ! 
}

function logger2(req, res, next){
    console.log('I am logger2');
    next();
}
app.use(logger);
app.use(logger2);
 
app.listen(3000, function(){
    console.log('Server is running');
})
