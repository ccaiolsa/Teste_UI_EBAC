/// <reference types="cypress" />
describe('Testar as funcionalidade login do EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('usuário/senha incorretos', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="username"]').type('usuario@email.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senha123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail usuario@email.com está incorreta. Perdeu a senha?')

    });

    it('acessa usuário cadastrado', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="username"]').type('usuario1@email.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senha123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, usuario1 (não é usuario1? Sair)')
    });
});