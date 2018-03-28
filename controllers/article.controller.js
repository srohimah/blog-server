const Article = require('../models/article.model')
const User = require('../models/user.model')
module.exports={
    // listArticle : (req, res)=>{
    //     User.findById(req.body.id)
    //     .populate('articles')
    //     .exec()
    //     .then(data=>{
    //         res.status(201).json({
    //             message : "show list article",
    //             data
    //         })
    //     }).catch(err=>res.send(status))
    // },
    listArticle : (req, res)=>{
        Article.find().sort([['createdAt', -1]])
        .then(data=>{
            res.status(201).json({
                message : "show list article",
                data
            })
        }).catch(err=>res.send(status))
    },
    findById : (req, res)=>{
        Article.findById(req.params.id)
        .then(data=>{
            res.send(data)
        }).catch(err=>res.send(status))
    },
    addArticle : (req, res)=>{
        Article.create({
            title : req.body.title,
            body : req.body.body,
        }).then(article=>{
            // User.findById(req.body.id).then(dataUser=>{
            //     dataUser.articles.push(article._id)
            //     dataUser.save()
                res.status(200).json({
                    message : "show new article",
                    article
                })
            // })
        }).catch(err=>res.send(err))
    },
    editArticle : (req, res)=>{
        Article.findByIdAndUpdate(req.params.id, req.body).then(article=>{
            res.status(200).json({
                message : "show updated article",
                article
            })
        }).catch(err=>res.send(err))
    },
    deleteArticle : (req, res)=>{
        Article.findByIdAndRemove(req.params.id).then(data=>{
            res.send(data)
        // Article.findByIdAndRemove(req.body.id).then(article=>{
        //     User.findById(req.body.id).then(dataUser=>{
        //         dataUser.articles.remove(req.params.id)
        //         dataUser.save()
        //         res.status(200).json({
        //             message : "show deleted article",
        //             article
        //         })
        //     })
        }).catch(err=>res.send(err))
    }
}