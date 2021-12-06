const express = require('express');
const pool = require('./database');

const app = express();
// register the ejs view engine
app.set('view engine', 'ejs');
app.listen(3000);


/*app.get('/', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    /*res.render('posts');
   });*/
   app.use((req, res) => {
   /* res.status(404).sendFile('./views/404.html', { root: __dirname });*/
    res.status(404).render('header', '404');
   });
   app.get('/', async(req, res) => {
    try {
    console.log("get posts request has arrived");
    const posts = await pool.query(
    "SELECT * FROM Posts"
    );
    res.json(posts.rows);
    } catch (err) {
    console.error(err.message);
    }
   });
   app.get('/:id', async(req, res) => {
    try {
    console.log("get a post request has arrived");
    const posts = await pool.query(
    "SELECT * FROM Posts WHERE id = $1", [id]
    );
    res.json(posts.rows[0]);
    } catch (err) {
    console.error(err.message);
    }
   });
   app.post('/', async(req, res) => {
    try {
    console.log("a post request has arrived");
    const post = req.body;
    const newpost = await pool.query(
    "INSERT INTO Posts(id, likes, title, body, imgURL, userIconURL, datestamp) values ($1, $2, $3, $4, $5, $6, $7)"
    );
    res.json( newpost );
    } catch (err) {
    console.error(err.message);
    }
   });
   /*app.put('/:id', async(req, res) => {
    try {
    const { id } = req.params;
    const post = req.body;
    console.log("update request has arrived");
    const updatepost = await pool.query(
    "UPDATE nodetable SET (title, body, urllink) = ($2, $3, $4) WHERE id =$1"
    );
    res.json(post);
    } catch (err) {
    console.error(err.message);
    }
   });*/
   /*app.delete('/posts/:id', async(req, res) => {
 try {
 const { id } = req.params;
 const post = req.body;
 console.log("delete a post request has arrived");
 const deletepost = await pool.query( "DELETE FROM nodetable WHERE id = $1", [id]
 );
 res.json(post);
 } catch (err) {
 console.error(err.message);
 }
});
   */
   
   app.get('/', (req, res) => {
    let posts = [
     {title: "title1", body: "body1" },
     { title: "title2", body: "body2" },
     ];
     res.render('posts');
    });
    app.use(express.static())
   app.get('singlepost', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    res.render('singlepost');
   });
   app.get('addnewpost', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    res.render('addnewpost');
   });