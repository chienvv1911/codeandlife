const router = require('express').Router()
const Post = require('../models/postModel')

router.post('/', async (req, res) => {
    const { title, createdAt, tags, content } = req.body;
    
    const newPost = new Post({
        title, 
        content,
        createdAt, 
        tags
    })

    try {
        const saveNewPost = await newPost.save();
        res.json(saveNewPost);
    } catch (error) {
        console.error(error);
    }
})

router.get('/', async (req, res) => {
    const allPosts = await Post.find();
    try {
        res.json(allPosts);
    } catch (error) {
        console.error(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const postDetail = await Post.find({id: req.params.id});
        res.json(postDetail);
    } catch (error) {
        console.error(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deletePost = await Post.findById(req.params.id);
        if(deletePost) {
            await deletePost.remove();
        } else {
            res.status(404)
            throw new Error('Product not found')
        }
        res.json(deletePost);
    } catch (error) {
        console.error(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const postUpdate = await Post.findById(req.params.id);
        const { title, content, createdAt, tags } = req.body;
        if(postUpdate) {
            postUpdate.title = title;
            postUpdate.content = content;
            postUpdate.createdAt = createdAt;
            postUpdate.tags = tags;

            const postUpdated = await postUpdate.save();
            res.json(postUpdated);
        } else {
            res.status(404)
            throw new Error('Product not found')
          }
        
    } catch (error) {
        console.error(error);
    }
})
module.exports = router