( () => {
    'use strict';
    $( () => {
        $( '#send' ).on( 'click', () => {

            console.log( $( '#body' ).val() );

            $.ajax( {
                type: $( '#method' ).val(),
                url: $( '#url' ).val(),
                data: $( '#body' ).val(),
                success: ( res ) => {
                    console.log( res );
                    $( '#response' ).text( res );
                    $( "html,body" ).animate( {
                        scrollTop: $( document ).height()
                    }, 'slow' );
                },
                error: ( e ) => {
                    console.log( e );
                }
            } );
        } );
    } );
} )();