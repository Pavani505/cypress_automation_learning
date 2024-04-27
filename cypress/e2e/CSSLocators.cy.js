describe('CSSLocators'), () => {
    it("css locators", () => {
        cy.visit("https://automationpractice.com/index.php")

        // cy.get("#search_query_top").type("T-Shirts") // id
        // cy.get(".search_query").type("T-Shirts") // class

        cy.get("[name='search_query']").type("T-Shirts")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")

    })
}