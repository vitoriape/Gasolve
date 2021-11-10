function gasolveForm(frm){

    // Assigns value to ethanol.value (ethanol value). If the field value = empty, null or negative | Return an alert
    if (frm.ethanol.value == "" || 
        frm.ethanol.value == null || 
        frm.ethanol.value < 1 ){
    
        alert( "Please, type an valid value for ethanol." );
            frm.ethanol.focus();
        
    return false;
        
    }
    
    // Assigns value to gasoline.value (gasoline value). If the field value = empty, null or negative | Return an alert
    if (frm.gasoline.value == "" ||
        frm.gasoline.value == null ||
        frm.gasoline.value.lenght < 1 ){
    
        alert( "Please, type an valid value for gasoline." );
            frm.gasoline.focus();
        
        return false;
        
    }

     /*
     [ Options of average consumption 
        [ 6.0km/l - 7.0km/l ]
        [ 7.0km/l - 8.0km/l ]
        [ 8.0km/l - 9.0km/l ]
        [ 9.0km/l - 10km/l ]
        [ 10km/l+ ]
     */

     if (frm.consume.value == "" ){
            
        alert( "Please, inform the average consumption of your vehicle. ");
            frm.consume.focus();
         
     return false;
         
    }

     // Calculates which fuel is more advantageous and assign to resultValue
     operation = parseFloat( frm.ethanol.value ) / parseFloat( frm.gasoline.value )
     
     if ( operation < 0.7 ){
        result = "According to the data, is better fill up with ethanol."

        } else if ( operation > 0.7 ){
            result = "According to the data, is better fill up with gasoline."

        } else if ( operation = 0.7 ){
            result = "According to the data, it doesn't matter if you fill up with gasoline or ethanol."
            
    }

      document.getElementById( "resultValue" ).innerHTML = result;
            
      var logicalchoose = confirm( "The information was successfully registered and calculated!\n\n"  
                                  + result + "\n\n" + "If you want to calculate again, click OK. \nElse, just click Cancel :)");
            
      if ( logicalchoose == true ){
        return gasolveForm;
          
        } else{
            alert( "Dear user, \n\n\n\n" + "This is a test application. Thanks for your contribution.\n\n\n\n" );
            
        }
        
}