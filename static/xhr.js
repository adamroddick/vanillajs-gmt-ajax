// Listens to all clicks anywhere on the DOM
window.addEventListener("click", function(event) {
    // Only runs on buttons with the 'function' class
    if (event.target.matches("button.function")) {
      var id = event.target.id;
      // Runs a function with the same name as the id of the button, cute
      window[id]();
    }
  });

  // Traditional XHR Request
  var traditionalXhr = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("success calling api");
      } else {
        console.log("failed calling api");
      }

      console.log("some code that always runs");
    };

    xhr.open("GET", "http://localhost:3001/json");
    xhr.send();
  };

  // Promise based XHR Request
  var makeRequest = function(method, url) {
    var xhr2 = new XMLHttpRequest();

    return new Promise(function(resolve, reject) {
      xhr2.onreadystatechange = function() {
        if (xhr2.readyState !== 4) return;

        if (xhr2.status >= 200 && xhr2.status < 300) {
          console.log("promise xhr success");
          resolve(xhr2);
        } else {
          console.log("promise xhr failed");
          reject({
            status: xhr2.status,
            statusText: xhr2.statusText
          });
        }
      };
      xhr2.open(method, url);
      xhr2.send();
    });
  };

  var promiseXhr = function() {
    makeRequest("GET", "http://localhost:3001/json")
      .then(function(json) {
        console.log("successfully used then off an xhr promise");
        console.log(json.response);
      })
      .catch(function(error) {
        console.log("failed to use then off an xhr promise");
        console.log(error);
      });
  };

  // Encode a query string with the GMT plugin and call it with the promise based xhr
  var buildQueryPlugin = function() {
    var endpoint = "http://localhost:3001/json2";
    var query = buildQuery({
      key: "password123",
    });

    var callUrl = endpoint + "?" + query;

    makeRequest("GET", callUrl)
        .then(function(json) {
            console.log(json.response);
        })
  };