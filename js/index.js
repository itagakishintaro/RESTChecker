( () => {
    'use strict';
    $( () => {
        $( '#send' ).on( 'click', () => {
            var body = '';
            if ( $( '#body' ).val() ) {
                body = JSON.parse( $( '#body' ).val() );
            }
            $( '#response' ).empty();
            $.ajax( {
                type: $( '#method' ).val(),
                url: $( '#url' ).val(),
                data: body,
                success: ( res ) => {
                    $( '#response' ).text( JSON.stringify( res ) );
                    scrollBottom();
                },
                error: ( e ) => {
                    $( '#response' ).text( JSON.stringify( e ) );
                    scrollBottom();
                }
            } );
        } );
    } );

    var scrollBottom = () => {
        $( "html,body" ).animate( {
            scrollTop: $( document ).height()
        }, 'slow' );
    };
} )();