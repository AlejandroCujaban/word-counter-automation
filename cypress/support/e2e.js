// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Mostrar el error en la consola de Cypress
    console.error('Uncaught exception from application:', err.message);
    // Devolver true para que los tests continúen después del error
    return true;
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')