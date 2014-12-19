"use strict";


//ajout pour gérer le nbr d'erreurs remonté par le pluggin jquery de validation

var nbrerrors = 0;

$.validator.setDefaults({
             showErrors: function (errorMap, errorList) {

                 nbrERRORS = this.numberOfInvalids();
                 console.log("validation avec nbrerrors = " + nbrERRORS);
                 this.defaultShowErrors();
             }
});



//permet d'éviter que l'on soumette deux fois 
le formulaire par un click suivi immédiatement d'un autre click
$(document).ready(

 function () {
     
     try {
              
         try {

             $('form').preventDoubleSubmission();

         }
         catch (err) {
               console.log("prb lors de l appel de preventDoubleSubmission") 
         }


     } catch (e) {

     } 

     
      
 }

);



