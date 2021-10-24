function createPostHTML(id, author, title, body, datetime, image) {
  let postHTML = '';
  postHTML += '<div class="post" id="' + id + '"> \
                 <div class="post-header"> \
                   <img src="img/pea.png" /> \
                   <span class="date-time">' + datetime + '</span> \
                </div> \
                <div class="post-content">';
  if(image!=""){
    postHTML += '<img src='+image+' alt="Image">';
  }
  postHTML += '  <h1>' +title+'</h1>\
                 <p>' + body + '</p> \
               </div> \
               <div class="post-footer"> <img src="img/thumb.png" /></div> \
               </div>';
  return postHTML;
  /*
    if(image!=""){
        return '<div class="post" id="' + id + '"> \
      <div class="post-header"> \
        <img src="img/pea.png" /> \
        <span class="date-time">' + datetime + '</span> \
      </div> \
      <div class="post-content"> \
        <img src='+image+' alt="Image">\
        <h1>' +title+'</h1>\
        <p>' + body + '</p> \
      </div> \
      <div class="post-footer"> <img src="img/thumb.png" /></div> \
      </div>';
    }
    else{
        return '<div class="post" id="' + id + '"> \
      <div class="post-header"> \
        <img src="img/pea.png" /> \
        <span class="date-time">' + datetime + '</span> \
      </div> \
      <div class="post-content"> \
        <h1>' +title+'</h1>\
        <p>' + body + '</p> \
      </div> \
      <div class="post-footer"> <img src="img/thumb.png" /></div> \
      </div>';
    }*/
  }

$.getJSON("https://api.jsonbin.io/b/61741d609548541c29c76bf2/3", function(result){
  $.each(result, function(i, field){
    let postID = "post-" + field.id;
    let postDateTime = field.create_time;
    let postBody = field.body;
    let postAuthor = field.author;
    let postTitle = field.title;
    let postImg = field.img;
    $("main").append(createPostHTML(postID, postAuthor, postTitle, postBody, postDateTime, postImg));
  });
});


// Homework 2 task 7 logged-in user dropdown
function toggleUserInfo(){
  let display = document.getElementById("user-info").style.display;
  document.getElementById("user-info").style.display = display !== "block" ? "block" : "none";
}
$("#user").click(function(){
  toggleUserInfo();
});
