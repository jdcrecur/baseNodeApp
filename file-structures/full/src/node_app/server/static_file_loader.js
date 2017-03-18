
let express = require('express'),
    path = require('path');

module.exports = function( app ){

    //Static routes to the js and css, also the bower components
    let staticCacheHeaders = ( global.environment != 'development' )? { maxage: 86400000*60 }: {};
    app.use( '/css',                express.static( path.join( process.cwd(), '/src/public/css'), staticCacheHeaders ) );
    app.use( '/images',             express.static( path.join( process.cwd(), '/src/public/img'), staticCacheHeaders ) );
    app.use( '/js',                 express.static( path.join( process.cwd(), '/src/public/js'), staticCacheHeaders ) );

};