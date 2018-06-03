(function () {
  function fetchQuote() {
    var fillFunction = function(quote) {
      var color = "black";

      switch(quote.feeling) {
          case "sad":
              color = "blue";
              break;
          case "happy":
              color = "orange";
              break;
          case "loved":
              color = "pink";
              break;
          case "angry":
              color = "red";
              break;
      }

      var content = `
        <table style="width:100%">
         <tr>
           <td><img src="images/heart.gif"</img></td>
           <td><h1 id="quote" class="w3-large w3-text-${color}">${quote.quote}</h1></td>
         </tr>
       </table>
      `;
      $("#quote_content").html(content);
    }

    $.ajax({
      url: 'quote',
      dataType: 'json',
      success: function(quote) { fillFunction(quote); },
      error: function() { console.log('Failed to get a quote!'); }
    });

  }
  jQuery(document).ready(function($) {
    //fetchQuote();
  });

  setInterval(function(){ fetchQuote(); }, 3000);
})();
