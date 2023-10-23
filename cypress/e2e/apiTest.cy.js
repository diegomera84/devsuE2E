
describe('API test for devsu', () => {
    it('add new user', () => {
        cy.request({method: 'POST', url: 'https://api.demoblaze.com/signup', body: {
            "username": "dmera",
            "asswordp": "123456"
            }}).then((response) =>{
            expect(response.status).to.eq(200)
            })
            })
    it('add user that already exists', () => {
        cy.request({method: 'POST', url: 'https://api.demoblaze.com/signup', body: {
            "username": "dmera",
            "asswordp": "123456"
            }}).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.errorMessage).to.eq("Bad parameter, missing username or password")
            })
            })
    it('Correct Login', () => {
        cy.request({method: 'POST', url: 'https://api.demoblaze.com/login', body: {
            "username": "dmera",
            "asswordp": "123456"
            }}).then((response) =>{
            expect(response.status).to.eq(200)
           // expect(response.body).to.have.property("Auth_token")
            })
    })
    it('Incorrect Login', () => {
        cy.request({method: 'POST', url: 'https://api.demoblaze.com/login', body: {
            "username": "dmera",
            "asswordp": "12345678"
            }}).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.errorMessage).to.eq("Bad parameter, missing username")
            })
            })
 })