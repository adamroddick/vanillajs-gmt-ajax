var jsonArray = {
    "name": "Adam",
    "posts": [
        {
            "postid": 1,
            "content": "Content for post 1",
        },
        {
            "postid": 2,
            "content": "Content for post 2 blah blah",
        },
        {
            "postid": 3,
            "content": "Post 3 content yoo hoo",
        }
    ]
}

window.addEventListener('click', function(event) {
    if (event.target.matches("button#jsonArraybtn")) {
        jsonArrayToInnerHtml();
    }
})

var jsonArrayToInnerHtml = function() {
    var div1 = document.querySelector('div#jsonArray1');

    div1.innerHTML = 
            '<h3>' + jsonArray.name + '\'s Posts' + '</h3>' +
            '<ul>' + 
            jsonArray.posts.map(function(post) {
                var html = 
                '<b>Post: ' + post.postid + '</b>' +
                '<li>' + post.content + '</li>'
            return html;
            }).join('')
            + '</ul>';

}