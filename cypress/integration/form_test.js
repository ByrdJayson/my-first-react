describe('Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const foobarInput = () => cy.get('input[name=foobar]');
    const createBtn = () => cy.get('input[name=create]');
    const tosBox = () => cy.get('input[type=checkbox]');

    it('sanity check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(11);
        expect({}).not.to.equal({});
    })

    it('elements rendering to screen', () => {
        nameInput().should('exist');
        foobarInput().should('not.exist');
        emailInput().should('exist');
        createBtn().should('exist');
        tosBox().should('exist');
        

        cy.contains('Create!').should('exist');
        
    })

})