/* global it describe context */
const { expect } = require('chai');
const calc = require('../src/calc');

describe('Calc', () => {
  // Smoke tests
  context('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method dib', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,20)', () => {
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(calc.sub(6,2)).to.be.equal(4);
    });

    it('should return - 4 when sub(6,10)', () => {
      expect(calc.sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when mult(6,2)', () => {
      expect(calc.mult(2,2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when div(8,2)', () => {
      expect(calc.div(8,2)).to.be.equal(4);
    });

    it('should return `não é possível dividir por zero` when div(8,0)', () => {
      expect(calc.div(8,0)).to.be.equal('Não é possível dividir por zero');
    });
  });
});
/*
describe('Main', () => {
 describe('Method A', () => {
   context('Context 1', () => {
     it('should happen anything', () => {
       throw new Error('just on error');
     });
   });

   context.only('Context 2', () => {
     it.skip('should happen blablabla', () => {
       throw new Error('just o n error');
     });

     it('should happen mimimi', () => {
     });
   });

 });

 describe('Method B  ', () => {
 });
});
*/
