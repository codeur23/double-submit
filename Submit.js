"use strict";


//ajout pour g�rer le nbr d'erreurs remont� par le pluggin jquery de validation

var nbrerrors = 0;

$.validator.setDefaults({
             showErrors: function (errorMap, errorList) {

                 nbrERRORS = this.numberOfInvalids();
                 console.log("validation avec nbrerrors = " + nbrERRORS);
                 this.defaultShowErrors();
             }
});



//permet d'�viter que l'on soumette deux fois 
le formulaire par un click suivi imm�diatement d'un autre click
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



