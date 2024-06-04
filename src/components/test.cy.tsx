import { Test } from './test';

it('test test', () => {
  cy.mount(<Test />);
  expect('1').to.be.eq('1');
});
