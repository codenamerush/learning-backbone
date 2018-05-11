// create the custom `partyTime` event
var myCustomEvent= new CustomEvent( 'partyTime', {timeToParty: true, partyYear: 1999} );

// listen to the `document` for the `partyTime` event
document.addEventListener('partyTime', function(evt) {
    if (evt.partyYear) {
        console.log( "Partying like it's " + evt.partyYear + "!");
    }

    document.body.style.backgroundImage = 'linear-gradient(90deg, orange, blue)';
});

// trigger the custom event
document.dispatchEvent( myCustomEvent );
