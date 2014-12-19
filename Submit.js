"use strict";


//ajout pour g�rer le nbr d'erreurs remont� par le pluggin jquery de validation

var nbrerrors = 0;

//Permet de renseigner le nbrerrors � chaque fois que la validation
//se d�roule avec le pluggin jquery validate
$.validator.setDefaults({
             showErrors: function (errorMap, errorList) {

                 nbrerrors = this.numberOfInvalids();
                 console.log("validation avec nbrerrors = " + nbrerrors);
                 this.defaultShowErrors();
             }
});

//permet d'�viter que l'on soumette deux fois 
//le formulaire par un click suivi imm�diatement d'un autre click
$(document).ready(

 function () {
     
     try {
              
         try {

             //Abonnement au submit pour �viter double soumission
             $('form').preventDoubleSubmission();

         }
         catch (err) {
               console.log("prb lors de l appel de preventDoubleSubmission") 
         }


     } catch (e) {

     } 
      
 }

);



