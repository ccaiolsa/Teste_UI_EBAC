/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('Testar as funcionalidade login do EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    /// Cenários negativos

        it('inserindo usuário incorretos', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="username"]').type('usuario@email.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senha123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail usuario@email.com está incorreta. Perdeu a senha?')

    });

        it('inserindo senha incorretos', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="username"]').type('usuario1@email.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senha1234')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail usuario1@email.com está incorreta. Perdeu a senha?')

    });

    /// cenário positivo
    it('acessa usuário cadastrado', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="username"]').type('usuario1@email.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senha123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, usuario1 (não é usuario1? Sair)')
    });

    ///cadastro de novos usuários
    it.only('cadastrando novos usuários - USANDO DADOS FAKER', () => {
        const random_email = faker.internet.email()
        const random_password = faker.internet.password()
        cy.get('.icon-user-unfollow').click()
        cy.get('[name="email"]').type(random_email)
        cy.get('.register > :nth-child(2) > [name="password"]').type(random_password)
        cy.get('[name="register"]').click()
        cy.get('.page-title').should('exist')

    });
});