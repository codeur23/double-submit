"use strict";


//ajout pour gérer le nbr d'erreurs remonté par le pluggin jquery de validation

var nbrerrors = 0;

//Permet de renseigner le nbrerrors à chaque fois que la validation
//se déroule avec le pluggin jquery validate
$.validator.setDefaults({
             showErrors: function (errorMap, errorList) {

                 nbrerrors = this.numberOfInvalids();
                 console.log("validation avec nbrerrors = " + nbrerrors);
                 this.defaultShowErrors();
             }
});

//permet d'éviter que l'on soumette deux fois 
//le formulaire par un click suivi immédiatement d'un autre click
$(document).ready(

 function () {
     
     try {
              
         try {

             //Abonnement au submit pour éviter double soumission
             $('form').preventDoubleSubmission();

         }
         catch (err) {
               console.log("prb lors de l appel de preventDoubleSubmission") 
         }


     } catch (e) {

     } 
      
 }

);



