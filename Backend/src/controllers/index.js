const Posts = require('../models/Posts');

const handleCreatePost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    
    const post = await Posts.createPost(titulo, img, descripcion);
    
    res.status(200).json({
        msg: 'Post creado con exito'
    });
}

module.exports = {
    handleCreatePost
}