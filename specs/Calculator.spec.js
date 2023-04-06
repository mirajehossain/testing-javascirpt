const chai = require('chai');
const {add} = require("../Calculator");
const expect = chai.expect;
describe('Calculator test suits', () => {
    it('should add 1 and 1 is equal to 2', ()=> {
        expect(add(1,1)).to.be.equal(2)
    })
})