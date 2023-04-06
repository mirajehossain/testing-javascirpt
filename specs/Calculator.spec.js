const chai = require('chai');
const {add} = require("../Calculator");
const expect = chai.expect;
describe('Calculator test suits', () => {
    it('should add 1 and 1 is equal to 2', ()=> {
        expect(add(1,1)).to.be.equal(2);
    });
    it('should add -2 and 5 is equal to 3', ()=> {
        expect(add(-2,5)).to.be.equal(3);
    });
    it('should add 2 and -5 is equal to -3', ()=> {
        expect(add(2,-5)).to.be.equal(-3);
    });

    it('should add -2 and -5 is equal to -7', ()=> {
        expect(add(-2,-5)).to.be.equal(-7);
    });

    it('should add "-3" and -5 is equal to -8', ()=> {
        expect(add("-3",-5)).to.be.equal(-8);
    });

})