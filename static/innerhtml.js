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
        '<h3>' + element.title + '</h3>' +
        '<p>' + element.content + '</p>';
        return html;
    }).join('');
}