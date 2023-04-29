const db = require('../../database/models');
const sequelize = db.sequelize;


const moviesController = {
    'list': async (req, res) => {

        try {
            const movies = await db.Movie.findAll();
         return res.status(200).json({
             ok : true,
             data : movies,
             meta : {
                 status:200,
                 total : movies.length
             },
         })
        
        } catch (error) {
            console.log(error);
        }
            },
    'detail': async (req, res) => {
        const {id} = req.params;
        try {
            const movies = await db.Movie.findByPk(id,
                {include:['genre']});
         return res.status(200).json({
             ok : true,
             data : movies,
             meta : {
                 status:200,
                 total : 1
             },
         })
        
        } catch (error) {
            console.log(error);
        }
    },
    create: function (req,res) {
           db.Movie.create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            .then(()=> {
                return res.redirect('/movies')})            
            .catch(error => res.send(error))
        

    },
    delete: async (req,res) => {
        try {
            const destroyMovies = await db.Movie.destroy({
                   where:{
                       id: req.params.id
                   }

               })
             return  res.json(destroyMovies)
           } catch (error) {
               console.log(error);
           }
    }

}

module.exports = moviesController;