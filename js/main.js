const ObjBtnSend = document.getElementById('btnSend');
const ObjBtnReset = document.getElementById('btnReset');

const ObjTxtName = document.getElementById('txtName');
const ObjTxtMileage = document.getElementById('txtMileage');
const ObjSelAge = document.getElementById('selAge');



ObjBtnSend.addEventListener('click',function(){

    const rate = 0.21; //Tariffa al km
    const valMileage = parseInt(ObjTxtMileage.value);
    const valName = ObjTxtName.value;
    let valCP = Math.floor(Math.random() * 999) + 90000;
    let valCarrozza = Math.floor(Math.random() * 15) + 1;
    let valTariffa = "";
    let valPrice = valMileage * rate; //Prezzo intero


    if (isNaN(valMileage) || valName == ""){
        console.log('ERRORE: Valori mancanti.');
    } else {

        switch (ObjSelAge.value) {
            case 'under18':
                valPrice -= (valPrice * 0.2); 
                valTariffa = "Biglietto Ridotto";
                break;
        
            case 'mid':
                valTariffa = "Biglietto Intero";
                break;
        
            case 'over65':
                valPrice -= (valPrice * 0.4);
                valTariffa = "Biglietto Silver";
                break;
            
            default:
                console.log('ERROR: Non è stato selezionato alcun valore.')
        }

        // Arrotonda prezzo a due cifre decimali
        valPrice = valPrice.toFixed(2);

    }


  

    



});





