
/*
  Code by Gabriel Nunes
  Modified by Todd Chaffee to use Camper gist for JSON Quote data.
*/


const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');

function inIframe () {
  try { return window.self !== window.top; }
  catch (e) { return true; }
}

let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

let quotesData;

function loadQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotes receive succeed');
        console.log(quotesData);
      }
    }
  });
}

function getQuote(num) {
  return quotesData.quotes[Math.floor(num * quotesData.quotes.length)];
}

function getColor(num) {
  return colors[Math.floor(num * colors.length)];
}

function refresh() {

  let randomNum = Math.random();
  let quote = getQuote(randomNum);
  var color = getColor(randomNum);

  let quoteText = quote.quote;
  let quoteAuthor = quote.author;

  console.log(quoteText + ":" + quoteAuthor);

  /*
    if(inIframe()) {
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  */

  $("#quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(quoteText);
    }
  );

  $("#quote-author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      // 这里填text和html有什么区别
      $('#author').text(quoteAuthor);
    }
  );

  $("html body").animate(
    {
      backgroundColor: color,
      color: color
    },
    1000
  );
  $(".button").animate(
    {
      backgroundColor: color
    },
    1000
  );
}

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$(document).ready(function() {
  loadQuotes().then(() => { refresh(); });

  $('#new-quote').on('click', refresh);

  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });

  $('#tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  });
});
