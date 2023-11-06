describe("no.wikipedia.org", () => {
    it("can search for Noroff", () => {
      cy.visit("https://no.wikipedia.org");
      cy.get("input#searchInput").type("Noroff", { delay: 500 });
      cy.get("#searchform > div > div > div.cdx-text-input.cdx-text-input--has-start-icon.cdx-text-input--status-default.cdx-search-input__text-input > input").type("{enter}");
      cy.get('h1').contains("Noroff")
    })
  })