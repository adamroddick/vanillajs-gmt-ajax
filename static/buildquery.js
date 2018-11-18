  /*!
   * Build a query string from an object of data
   * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
   * @param  {Object} data The data to turn into a query string
   * @return {String}      The query string
   */
  var buildQuery = function(data) {
    if (typeof data === "string") return data;
    var query = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        query.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        );
      }
    }
    return query.join("&");
  };