//On submit run AJAX
jQuery( 'form[name="coform"]' ).on( 'submit', function() {
    //Get coform form data in array
    var coformData = jQuery( this ).serializeArray();
    //Checks coform nonce from Coform_Create_Form_Post class.
    coformData.push( { "name" : "security", "value" : coformAjaxPostNonce } );
    // AJAX start
    jQuery.ajax({
        url : coformAjaxUrl, //Variable from coform_ajax_url_and_nonce method
        type : 'POST',
        data : coformData,
        success : function( response ) {
            //Show Thank you message.
            jQuery('#coform-container').html( coformThankYouMsg );
        },
        fail : function( err ) {
            // Alert error if there is one.
            alert( 'There was an error: ' + err );
        }
    });
    //Prevent page refresh.
    return false;
});