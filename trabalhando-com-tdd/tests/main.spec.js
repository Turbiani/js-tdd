/* global it describe before after beforeEach afterEach */
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

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3); // true
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length); // 2
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
