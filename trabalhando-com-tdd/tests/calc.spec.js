/* global it describe */
const { expect } = require('chai');
const calc = require('../src/calc');

describe('Calc', () => {
  // Smoke tests
  describe('Smoke tests', () => {
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
