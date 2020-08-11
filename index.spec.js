const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('GET /users 는', ()=>{

});

describe('GET /users/:id는 ', ()=> {
    describe('성공시', () => {
    it('id 가 1인 유저 객체를 반환한ㄷ', (done) => {
        request(app)
        .get('users/1')
        .end((err, res) => {
            res.body.should.have.property('id', 1);
            done();
        });
    });
});
describe('실패시', ()=>{
    it(`id 가 숫자가 아닐 경우 400으로 응답한다.`, (done)=>{
        request(app)
        .get('/users/one')
        .expect(400)
        .end(done);
    });
    it(`id 로 user 를 찾을 수 없는 경우 404를 응답한다. `, (done)=> {
        request(app).get('/users/999')
        .expect(404)
        .end(done);
    });
})
});

describe('GET /users/:id', () => {
    describe('성공시 ', () =>{
        it('204 를 응답한다. ', (done) => {
            request(app)
            .delete('/users/1')
            .expect(204)
            .end(done);
        })
    });
    describe('실패시 ', () => {
        it('id 각 숫자가 아닐경우 404 로 응답한다.', done => {
            request(app)
            .delete('/users/one')
            .expect(400)
            .end(done)
        });
    });   
});

describe('POST /users', () => {
    describe('성공시', () => {
        let name = 'daniel',
            body;
        before(done=> {
            request(app)
            .post('/users')
            .send({name})
            .expect(201)
            .end((err, res) => {
              body = res.body;
              done();
            });

        });
        it('생성된 유저 객체를 반환한다.', ()=> {
            body.should.have.property('id');
        });
        it ('입력한 name 을 반환한다.', ()=> {
            body.should.have.property('name', name)
        })
    });
    describe('실패시', ()=>{
        it('name 파라미터 누락시 400을 반환한다.', done=>{
            request(app) 
            .post('/users')
            .send({})
            .expect(4000)
            .end(done)
        });
        it("name 이 중복일 경우 409를 반환한다.", done=> {
            request(app)
            .post('/users')
            .send({name: 'daniel'})
            .expect(409)
            .end(done)
        })
    })
})

describe('PUT /users/:id', () =>{
    describe('성공시', ()=>{
      it('변경된  name을 응답한다.', (done)=> {
        const name = 'charliy';
        request(app)
        .put('/users/2')
        .send({name})
        .end((err, res) =>{
            res.body.should.property('name', name);
            done();
      });
    })
    })
})
