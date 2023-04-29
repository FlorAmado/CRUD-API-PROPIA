const router = require('express').Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

router.get('/', moviesApiController.list);
router.get('/:id', moviesApiController.detail);
router.post('/create', moviesApiController.create);
router.delete('/delete/:id', moviesApiController.delete);


module.exports = router;