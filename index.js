const express= require('express');
const logger3 = require('morgan');
const app = express(); 

function commonmw(req, res, next) {
     console.log('commonmw');
     next(new Error('erro ouccured'));
}


function errormw(err, req, res, next){
    console.log('sdfsdf', err.message);
    // 에러를 처리하거나 
    next (err);
}


app.use(commonmw);
app.use(errormw);
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
// 서드 파티 익스프레스 가져오기  !! morgan , 서버 쪽에 로그 남기는 미들웨어
app.listen(3000, function(){
    console.log('Server is running');
})
