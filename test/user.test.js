const app = require('../app')
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('API /users', ()=>{
    describe('Signup new User', ()=>{
        it('should show new user',done=>{
            chai.request(app)
            .post('/users/signup')
            .send({
                name : "Siti Rohimah",
                username : "srohimah",
                email : "srohimah29@gmail.com",
                password : "123"
            })
            .end((err, res)=>{
                expect(res).to.have.status(201)
                expect(res.body).to.be.an('object')
                expect(res.body).to.ownProperty('message')
                expect(res.body).to.ownProperty('newUser')
                expect(res.body.message).to.be.a('string').eql('new user created')
                done()
            })
        })
    })
})