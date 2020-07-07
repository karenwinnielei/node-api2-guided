const express = require('express')

const Hubs = require( '../hubs/hubs-model.js' ); // ========= updated the path

const router = express.Router();

router.post( '/', ( req, res ) => {
  const messageInfo = req.body;

  Hubs.addMessage( messageInfo )
    .then( ( message ) => {
      res.status( 201 ).json( { data: message } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      res
        .status( 500 )
        .json( { errorMessage: 'we could not add the message' } );
    } );
} );

module.exports = router