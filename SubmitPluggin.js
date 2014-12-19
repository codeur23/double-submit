// jQuery plugin to prevent oduble submission of forms
jQuery.fn.preventDoubleSubmission = function () {

    try 
{    
        $(this).on('submit', function (e) {

            var $form = $(this);

            if ($form.data('submitted') === true ) {
                // Previously submitted - don't submit again
                e.preventDefault();

            } else
            {
                // Mark it so that the next submit can be ignored
                console.log("submitted=true");
                $form.data('submitted', true);
                

            }
        });


    } catch (e) {
        console.log("error in persosubmitpluggin");
    } 
        // Keep chainability
    return this;
};

