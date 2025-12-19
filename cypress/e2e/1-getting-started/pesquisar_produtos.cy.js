/// <reference types="cypress"/>

describe('Testar Funcionalidade acessar produtos no EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    /// pesquisar por meio da barra de pesquisa
    it('Pesquisando produtos pela barra de pesquisa', () => {
        var nome_produto = 'Apollo Running Short'
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.search')
            .type(nome_produto)
        cy.get('#ui-id-1 > :nth-child(1)')
            .click()
        cy.get('.product_title').should('contain', nome_produto)

    });

    /// pesquisar acessando o botão COMPRAR
    it('Acessando produto pelo botão COMPRAR', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
        cy.get('.product_title').should('exist')

    });

    /// configurando produto
    it('Comprando produto fora de estoque', () => {

        /// Pesquisando produto
        var nome_produto = 'Apollo Running Short'
        var alerta = 'Fora de estoque'
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.search')
            .type(nome_produto)
        cy.get('#ui-id-1 > :nth-child(1)')
            .click()
        
        /// Configurando pedido
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('[name="quantity"]').clear().type('3')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.stock').should('contain', alerta)

    });

    it('Ajustando especificações dos produtos', () => {

        /// Pesquisando produto
        var nome_produto = 'Ryker LumaTech'
        var alerta = 'foi adicionado no seu carrinho.'
        cy.get('#primary-menu > .menu-item-629 > a').first().click()
        cy.get('.search')
            .type(nome_produto)
        cy.get('#ui-id-1 > :nth-child(1)')
            .click()
        
        /// Configurando pedido
        cy.get(':nth-child(1) > .value > .variable-items-wrapper').eq(0).click()
        cy.get('.reset_variations').should('exist')
        cy.get(':nth-child(2) > .value > .variable-items-wrapper').eq(0).click()
        cy.get('[name="quantity"]').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', alerta)

    });
    /// acessando carrinho
    it.only('Acessando carrinho de compras', () => {
                /// Pesquisando produto
        var nome_produto = 'Ryker LumaTech'
        var alerta = 'Checkout'
        var quantidade = '1'
        
        cy.get('#primary-menu > .menu-item-629 > a').first().click()
        cy.get('.search')
            .type(nome_produto)
        cy.get('#ui-id-1 > :nth-child(1)')
            .click()
        
        /// Configurando pedido
        cy.get(':nth-child(1) > .value > .variable-items-wrapper').eq(0).click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper').eq(0).click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        /// Acessando carrinho de compras
        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart_item > .product-name').contains(nome_produto)
        cy.get('.checkout-button').click()
        cy.get('.page-title').should('contain', alerta)          
        
    });
});