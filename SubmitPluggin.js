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
                if(nbrerrors ==0)
                {
                    $form.data('submitted', true);
                }
                else
                {
                    $form.data('submitted', false);   
                }

                

            }
        });


    } catch (e) {
        console.log("error in preventDoubleSubmission");
    } 
        // Keep chainability
    return this;
};

