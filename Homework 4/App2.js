const express = require('express');
const pool = require('./database');
const cors = require('cors');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');
//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(cors());
app.use(express.static('Public'));

app.listen(3000, () => {
  console.log("Server is listening to port 3000")
});

// Home page --
// pulls all the posts from DB and renders posts page w/ those
// [x] this works
app.get('/', async(req, res) => {
  console.log("user navigated to '/' ");
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query(
      "SELECT * FROM nodetable"
    );
    res.render('posts', { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});

// [x] this works
app.get('/singleposts/:id', async(req, res) => {
  console.log("singleposts");
  try {
    const id = req.params.id;
    console.log(req.params.id);
    console.log("get a single post request has arrived");
    const posts = await pool.query(
      "SELECT * FROM nodetable WHERE id = $1", [id]
    );
    res.render('singleposts', { post: posts.rows[0] });
  } catch (err) {
    console.error(err.message);
  }
});

// [x] this works, nothing more needed here
app.get('/addnewpost', async(req, res) => {
  res.render('addnewpost');
});


// button works, no action in db
//
// inactivating the button in posts.ejs works only when you stay on
// the '/' page. if you visit another page and come back to '/'
// then buttons are active again
//
// number of likes are stored in column 'likes_count' (integer)
app.post('/likepost/:id', async(req, res) =>{
  console.log("likepost: user likes post number", req.params);
  try {
    const { id } = req.params;

    const likescountresponse = await pool.query(
      "SELECT likes_count FROM nodetable WHERE id = $1", [id]
    );

    let likescount = likescountresponse.rows[0].likes_count;

    console.log('this post had', likescount, 'likes');

    const updatelikescount = await pool.query(
      "UPDATE nodetable SET likes_count = $1 WHERE id = $2",
      [++likescount, id]
    );

    res.redirect('/');

  } catch (err) {
    console.error(err.message);
  }
});

// [x] this works
app.post('/deletepost/:id', async(req, res) => {
  console.log("delete !!");
  try {
    console.log(req.params);
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query(
      "DELETE FROM nodetable WHERE id = $1", [id]
    );

    // maybe not the best redirection
    res.redirect('/');
  } catch (err) {
    console.error(err.message);
  }
});


// [x] this part seems to work
app.post('/addnewpost', async(req, res) => {
  console.log("Add new post");
  try {
     const post = req.body;
     console.log(post);

     // we have to get the highest id of existing posts in db
     // to assign proper id for new post
     // (this is due bad db design :) )
     const postsCountQuery = await pool.query(
       "SELECT MAX(id) FROM nodetable"
     );
     let postsCount = postsCountQuery.rows[0].max;
     console.log(postsCount);

     // post id will be one higher than the highest id of posts in db
     const newpost = await pool.query(
       "INSERT INTO nodetable(id, title, body, urllink, likes_count, author, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7)",
       [++postsCount, post.title, post.body, post.urllink, 0, post.urllink, post.timestamp]
     );

     // redirectig to first page with all the posts seems logical
     res.redirect('/');

  } catch(err){
    console.error(err.message);
  }
});

// [x] this part works
app.use((req, res) => {
  console.log("user navigated to non-existing page '", req.url, "'");
  res.status(404).render('404');
 });
