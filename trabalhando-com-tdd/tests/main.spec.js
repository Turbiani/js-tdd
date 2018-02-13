/* global it describe context */
describe('Main', () => {
  describe('Method A', () => {
    context('Context 1', () => {
      it('should happen anything', () => {
        throw new Error('just on error');
      });
    });

    context.only('Context 2', () => {
      it.skip('should happen blablabla', () => {
        throw new Error('just on error');
      });

      it('should happen mimimi', () => {
      });
    });
  });

  describe('Method B  ', () => {
  });
});
