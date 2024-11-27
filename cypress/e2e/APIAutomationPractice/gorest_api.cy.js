describe('GoRest API Automation', () => {
    let userId;

    it('Should create a new user via POST', () => {
        cy.apiRequest('POST', 'https://gorest.co.in/public/v2/users', {
            name: 'John Doe',
            gender: 'male',
            email: `john.doe.${Date.now()}@example.com`,
            status: 'active',
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body).to.include({
                name: 'John Doe',
                gender: 'male',
                status: 'active',
            });
            userId = response.body.id;
        });
    });

    it('Should retrieve the user details via GET', () => {
        cy.apiRequest('GET', `https://gorest.co.in/public/v2/users/${userId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include({
                name: 'John Doe',
                gender: 'male',
                status: 'active',
            });
        });
    });

    it('Should update the user details via PATCH', () => {
        cy.apiRequest('PATCH', `https://gorest.co.in/public/v2/users/${userId}`, {
            name: 'Jane Doe',
            email: `jane.doe.${Date.now()}@example.com`,
            status: 'active',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include({
                name: 'Jane Doe',
                status: 'active',
            });
        });

        cy.apiRequest('GET', `https://gorest.co.in/public/v2/users/${userId}`).then((response) => {
            expect(response.body).to.include({
                name: 'Jane Doe',
                status: 'active',
            });
        });
    });

    it('Should delete the user via DELETE', () => {
        cy.apiRequest('DELETE', `https://gorest.co.in/public/v2/users/${userId}`).then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.undefined;
        });

        cy.apiRequest('GET', `https://gorest.co.in/public/v2/users/${userId}`).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
