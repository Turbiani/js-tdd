/*
/!* global it describe before beforeEach after afterEach context *!/
describe('Main', () => {
  // roda antes do bloco
  before(() => {
    console.log('before');
  });
  // roda depois do bloco
  after(() => {
    console.log('after');
  });
  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    console.log('beforeEach');
  });
  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {
    console.log('afterEach');
  });

  describe('Method A', () => {
    context('Context 1', () => {
      it('test 1', () => {
        console.log('test 1');
      });
    });

    context('Context 2', () => {
      it('test 2', () => {
        console.log('test 2');
      });
    });
  });
});

// CONSOLE

// Main
// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after
*/
