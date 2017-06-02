
var appname= angular.module('ShoppingListCheckOff',[]);
    appname.controller('ToBuyController', ToBuyController );
    appname.controller('AlreadyBoughtController', AlreadyBoughtController);
    appname.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
   
    ToBuyController.$inject=['ShoppingListCheckOffService']
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    
  
    function ToBuyController (ShoppingListCheckOffService){
            var toBuy=this;
            toBuy.items=ShoppingListCheckOffService.getToBuyItems();
            toBuy.buyItem= function (toBuyindex){
             ShoppingListCheckOffService.buyItem(toBuyindex);
              
          }
       }

    function AlreadyBoughtController (ShoppingListCheckOffService){
           var bought=this;
           bought.boughtItems=ShoppingListCheckOffService.getBoughtItems();
           
   }
       
      // Shoping service
 function ShoppingListCheckOffService(){
        var shopingService=this;
        var tobuyitemList=[{ 
          name:'apple juice',
          quantity:10
         },{ 
          name:'Mango Faluda',
          quantity:3
         },{ 
          name:'Lemon juice',
          quantity:30
         },{ 
          name:'Pizza with Butter',
          quantity:1
         },{ 
          name:'Curd Rice',
          quantity:1
         }]

       
        var toBuyitems=tobuyitemList;

        var boughtItems=[];
     
        shopingService.getToBuyItems=function (){

          return toBuyitems;
        }

         shopingService.getBoughtItems=function (){

          return boughtItems;
        }

        shopingService.buyItem=function(toBuyIndex){
          var item=toBuyitems[toBuyIndex];
          shopingService.addItem(item);
          shopingService.removeItem(toBuyIndex);
        }

        shopingService.removeItem=function(index){
          console.log("removing index :" ,index)
          toBuyitems.splice(index,1);
        }
        shopingService.addItem=function(item){
          console.log("Adding item to bought list:",item);
          boughtItems.push(item);
          
        }

       
      
      }

     
     

     
   
    
