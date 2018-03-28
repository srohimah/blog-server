const app = require('../app')
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp)


describe('API /article', ()=>{
    describe('get /article',()=>{
        it('should show all article list', done=>{
            chai.request(app)
            .get('/article')
            .end((err,res)=>{
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message')
                expect(res.body).to.ownProperty('article')
                expect(res.body.message).to.be.a('string').eql('show list article')                
                done()
            })
        })
    })
    describe('post /article',()=>{
        it('should show post article', done=>{
            chai.request(app)
            .post('/article')
            .send({
                title : "Piala untuk mama",
                body : "ini bukan tentang piala, tapi kebanggaan",
                author : "srohimah"
            })
            .end((err,res)=>{
                expect(res).to.have.status(201)
                expect(res.body).to.ownProperty('message')
                expect(res.body).to.ownProperty('article')
                expect(res.body.message).to.be.a('string').eql('show new article')                
                done()
            })
        })
    })
    describe('update /article',()=>{
        it('should show updated article', done=>{
            chai.request(app)
            .put('/article')
            .send({
                id: "5aaf5f43b58ad17dea179c1d",
                title : "untuk mama",
                body : "Dear mama, i love you so much",
                author : "rohimah"
            })
            .end((err,res)=>{
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message')
                expect(res.body).to.ownProperty('article')
                expect(res.body.message).to.be.a('string').eql('show updated article')                
                done()
            })
        })
    })
    describe('delete /article', ()=>{
        it('should show deleted article', done=>{
            chai.request(app)
            .delete('/article')
            .send({
                id:'5aaf6276058715025f11c36b'
            })
            .end((err, res)=>{
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message')
                expect(res.body).to.ownProperty('article')
                expect(res.body.message).to.be.a('string').eql('show deleted article')
                done()
            })
        })
    })
})
