// 1. used for rendering posts for a user so they can see their own posts and edit them
router.get('/', async (req, res) => {
    //Will get all posts which match req.session.userId) and render all of them onto 'all-posts-private'
});

//2. router.get onto something like /createnew then we render a create-new-post page 

//3. routerr.get which will render an edit page '/edit/:id/ 
// you can use req.params.id to get a particular post for editing 