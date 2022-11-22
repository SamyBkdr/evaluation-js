

do {
  var choix = parseInt(prompt("Faites un choix entre : \n 1.Addition \n 2.Soustraction \n 3.Multiplication \n 4.Division"))
  } while (choix < 1 || choix > 4 || isNaN(choix));


do {
   var num1 = parseInt(prompt("Entrez un nombre"))
   } while (isNaN(num1));

do {
   var num2 = parseInt(prompt("Puis un autre"))
   } while (isNaN(num2));
      

   function addition(num1,num2){
       let result = num1 + num2
       alert(result)
   }

   function soustraction(){
       let result = num1 - num2
       alert(result)
   }

   function multiplication(){
       let result = num1 * num2
       alert(result)
   }

   function division(){
       let result = num1 / num2
       alert(result)
   }

   try{
       switch(choix){
           case 1:
           addition(num1,num2);
           break;

           case 2:
           soustraction();
           break;

           case 3:
           multiplication();
           break;

           case 4:
           division();
           break;
           default:
       }
       
   } catch(e){
           alert(e)
   }




