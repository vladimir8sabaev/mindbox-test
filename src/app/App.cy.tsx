import { ToDoButtonsFilter } from '../components/toDoButtonsFilter/toDoButtonsFilter';
import { ToDoItemsList } from '../components/toDoItemsList/toDoItemsList';
import App from './App';

describe(`Test ${App.name}`, () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  describe(`Test NewToDoItem`, () => {
    it('Component has input and button with correct text inside ', () => {
      cy.get(`[data-test=NewToDoItem]`).should('exist');
      cy.get(`[data-test=NewToDoItem]`)
        .children()
        .first()
        .should('have.prop', 'tagName', 'INPUT');
      cy.get(`[data-test=NewToDoItem]`)
        .children()
        .last()
        .should('have.prop', 'tagName', 'BUTTON')
        .should('have.text', 'Add todo');
    });

    it('Click on button with empty input does not add empty todo', () => {
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 2);
      cy.get(`[data-test=NewToDoItem]`).children().last().click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 2);
    });

    it('Click on button with input correctly add new todo', () => {
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 2);
      cy.get(`[data-test=NewToDoItem]`).children().first().type('new');

      cy.get(`[data-test=NewToDoItem]`).children().last().click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 3);

      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .last()
        .should('have.text', 'new');
    });
  });

  describe('Test ToDoButtonsFilter', () => {
    it('There are 3 buttons with correct text inside', () => {
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .should('have.length', 3);
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .first()
        .should('have.text', 'All');
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .eq(1)
        .should('have.text', 'Active');
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .last()
        .should('have.text', 'Completed');
    });

    it('First button clicked and has active class on default', () => {
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .first()
        .invoke('attr', 'class')
        .should('contain', 'active');
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .eq(1)
        .invoke('attr', 'class')
        .should('not.contain', 'active');
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .last()
        .invoke('attr', 'class')
        .should('not.contain', 'active');
    });

    it('Click on buttons works correctly', () => {
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`).children().eq(1).click();
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .eq(1)
        .invoke('attr', 'class')
        .should('contain', 'active');
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 1);
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .should('have.text', 'Test Todo item');

      cy.get(`[data-test=${ToDoButtonsFilter.name}]`).children().last().click();
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`)
        .children()
        .last()
        .invoke('attr', 'class')
        .should('contain', 'active');
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 1);
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .should('have.text', 'Test Todo item 2');
    });
  });

  describe('Test ToDoItem', () => {
    it('ToDoItem has correct elements inside', () => {
      cy.get(`[data-test=${ToDoButtonsFilter.name}]`).children().last().click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .should('have.prop', 'tagName', 'LI');
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .children()
        .first()
        .should('have.prop', 'tagName', 'INPUT')
        .should('have.attr', 'checked', 'checked');

      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .children()
        .last()
        .should('have.prop', 'tagName', 'P')
        .should('have.text', 'Test Todo item 2');
    });

    it('ToDoItem works correctly on click, filtering works correctly', () => {
      cy.get(`[data-test=${ToDoItemsList.name}]`).children().first().click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .first()
        .invoke('attr', 'class')
        .should('contain', 'checked');

      cy.get(`[data-test=${ToDoButtonsFilter.name}]`).children().eq(1).click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 0);

      cy.get(`[data-test=${ToDoButtonsFilter.name}]`).children().last().click();
      cy.get(`[data-test=${ToDoItemsList.name}]`)
        .children()
        .should('have.length', 2);
    });
  });
});
