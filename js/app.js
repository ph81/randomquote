$(document).ready(function(){
    
    var twitterUrl;
    var html;
    
    displayQuote();

    //initial quote 
    

    //New quote
    $("#newquote").on("click", function() {

     
       displayQuote();
    
    });

    $("#tweet").on("click", function() {
        window.open(twitterUrl);
    });

    function displayQuote() {

        $.getJSON("http://paperhearts.me/playground/randomquote/js/xfquotes.json", function(json) {
        
        html = "";

        var random = json.randomquote[Math.floor(Math.random() * json.randomquote.length)];

        //getting ready to tweet the quote
        twitterUrl = 'https://twitter.com/intent/tweet?text=' + random.quote + " - " + random.character;

        //console.log(random.quote + " - " + random.character);
        //forming html for the div
        html += "<strong>" + random.quote + "</strong>";
        html += "<br><em> -" + random.character + "</em>";
        html += "<br>" + random.episode + " (Season " + random.season + ")";
        //displaying
        $(".quote").html(html);
        });
    }

});