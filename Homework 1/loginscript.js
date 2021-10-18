function redirect(){
    var email = document.getElementById('Email').value; //https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    var password = document.getElementById('Password').value;
    if(email && password) { //https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
        window.location.href = "index.html"; //https://stackoverflow.com/questions/22803634/how-to-open-new-html-file-using-java-script
    }
}