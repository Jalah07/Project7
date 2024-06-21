const { Post } = require('../models');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const post = new Post(req.file ? {
        ...JSON.parse(req.body.post),
        mediaUrl: `${req.protocol}://${req.get('host')}/media/${req.file.filename}`,
    } : { ...req.body });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
}

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findOne({
            where: { id: postId },
        });
        if (!post) {
            throw new Error('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the posts',
            error: error.message,
        });
    }
};
// TODO FIX THE UPDATE POST
exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updateData = req.body;

        const post = await Post.findOne({ where: { id: postId } });


        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }


        await post.update(updateData);


        res.status(200).json({
            success: true,
            data: post,
        });
    } catch (error) {
        console.error('Error updating post:', error);


        res.status(500).json({
            success: false,
            message: 'An error occurred while updating the post',
            error: error.message,
        });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Post.findOne({ where: { id: postId } });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        await post.destroy();

        res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting post:', error);

        res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the post',
            error: error.message,
        });
    }
};

