(function () {
  function fetchQuote() {
    var fillFunction = function(quote) {
      $("#quote").html(quote.quote);
    }

    $.ajax({
      url: 'quote',
      dataType: 'json',
      success: function(quote) { fillFunction(quote); },
      error: function() { alert('Failed!'); }
    });

  }
  jQuery(document).ready(function($) {
    fetchQuote();
  });

  setInterval(function(){ fetchQuote(); }, 3000);
})();
