var json = [{
    'title': 'InnerHTML Injected Title',
    'content': 'Some lorem ipsum nonsense...'
}]
window.addEventListener('click', function(event) {
    if (event.target.matches('button#innerHtmlbtn')) {
        jsonToInnerHTML();        
    }
})

var jsonToInnerHTML = function() {
    var div1 = document.querySelector('div#innerHtml1');

    div1.innerHTML = json.map(function (element) {
        var html = 
        '<div class="card" style="width: 18rem; margin-top: 1.5rem;' +
        '<div class="card-body">' +
        '<h3>' + element.title + '</h3>' +
        '<p>' + element.content + '</p>';
        return html;
    }).join('') +
    '</div>' +
    '</div>';
}