'use strict'

describe('Pruebas del login', () => {
    before(() => {
        // Ejecutar script para limpiar DB
        cy.exec('npm run test:clean')
    })

    beforeEach(() =>{
        // Cargar archivo y asignarlo a variable
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1','Bienvenido').should('be.visible')
    })

    it('Debe registrar un usuario', () =>{
        // Cargar variable con promesa
        cy.get('@userData').then((userData) =>{
            cy.createUser(userData)
            cy.screenshot('create-user')
        })
    })

    it('Debe fallar con un usuario que no existe', () =>{
        cy.loginUser('fail-test@test.com', 'test1234')
        cy.get('.error-msg').should('be.visible')
        // tomar screenshot y ocultar campo #eamil1
        cy.screenshot('login-failed', { blackout:['#email1'] })
    })

    it('Debe ingresar con usuario de prueba', () =>{
        cy.get('@userData').then((userData) =>{
            // Cargar comando personalizado
            cy.loginUser(userData.email, userData.password)
            cy.contains('a', 'Dashboard').should('be.visible')
            cy.screenshot('login-user')
        })
    })

    after(() =>{
        cy.log('Test finalizado')
    })
})