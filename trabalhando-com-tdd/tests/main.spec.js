/* global it describe before after beforeEach afterEach */
const { expect } = require('chai');

describe('Main', () => {
  let arr;

  // roda uma vez, antes do bloco
  before(() => {
    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha conexão do banco
    // apagar esse conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {

  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2); // 2
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
