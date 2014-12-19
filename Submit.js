"use strict";

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



