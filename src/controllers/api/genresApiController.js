const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {

        try {
            const genres = await db.Genre.findAll();
         return res.status(200).json({
             ok : true,
             data : genres,
             meta : {
                 status:200,
                 total : genres.length
             },
         })
        
        } catch (error) {
            console.log(error);
        }
            },
    'detail': async (req, res) => {
        const {id} = req.params;
        try {
            const genres = await db.Genre.findByPk(id,
                {include:['movies']});
         return res.status(200).json({
             ok : true,
             data : genres,
             meta : {
                 status:200,
                 total : 1
             },
         })
        
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = genresController;