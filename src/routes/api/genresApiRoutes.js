const router = require('express').Router();
const genresApiController = require('../../controllers/api/genresApiController');

router.get('/', genresApiController.list);
router.get('/:id', genresApiController.detail);


module.exports = router;