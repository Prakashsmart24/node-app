const express = require('express');

const router = express.Router();
const Post = require('../backend-models/post-schema-model');

router.post('', (req, res, next) => {
  const postBody = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  console.log(postBody);
  postBody.save().then((createdPostId)=>{
    res.status(201).json({
    message: 'post added successfully',
    postId: createdPostId._id
  });
  });
 
});

router.put('/:id',(req,res,next)=>{
  const postbody = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  })
  Post.updateOne({_id: req.params.id},{$set:{title:req.body.title,content:req.body.content}}).then((result)=> console.log(result));
  res.status(200).json({
    message:'Post edited successfully'
  });
});

router.get('', (req, res, next) => {
  Post.find().then((docs) => {
    res.status(200).json({
      message: 'Get message successfully',
      posts: docs,
    });
  });
});

router.delete('/:id',(req,res,next)=>{
  Post.deleteOne({_id: req.params.id}).then((result)=> console.log(result));
  res.status(200).json({message: 'post deeleted successfully'});
} );

module.exports = router