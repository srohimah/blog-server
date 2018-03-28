const express = require ('express')
const router = express.Router()
const {listArticle, addArticle, editArticle, deleteArticle, findById} = require('../controllers/article.controller')
const {verify} = require('../middleware/auth')

// router.use(verify)
router.get('/', listArticle)
router.get('/:id', findById)
router.post('/', addArticle)
router.put('/:id', editArticle)
router.delete('/:id', deleteArticle)

module.exports = router