const utils = require('./utils');
const assert = require('should');

describe('utils.js모듈의 capitalize() 함수는  ', () => {
    it(' 문자열의 첫번째 문자를 대문자로 변환한다.', () => {
        // ...
        const result = utils.capitalize('hello'); 
        result.should.be.equal('Hello');
        // assert.equal(result, 'Heloo');
    })
})