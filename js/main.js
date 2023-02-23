// Elementi DOM

const ObjBtnSend = document.getElementById('btnSend');
const ObjBtnReset = document.getElementById('btnReset');

const ObjTxtName = document.getElementById('txtName');
const ObjTxtMileage = document.getElementById('txtMileage');
const ObjSelAge = document.getElementById('selAge');
const ObjSectResults = document.getElementById('sectResults');

const ObjDetailName = document.getElementById('detailName');
const ObjDetailTariffa = document.getElementById('detailTariffa');
const ObjDetailCarrozza = document.getElementById('detailCarrozza');
const ObjDetailCP = document.getElementById('detailCP');
const ObjDetailPrice = document.getElementById('detailPrice');


ObjBtnSend.addEventListener('click',function(){

    const rate = 0.21; //Tariffa al km
    const valMileage = parseInt(ObjTxtMileage.value);
    const valName = ObjTxtName.value;
    let valCP = Math.floor(Math.random() * 999) + 90000;
    let valCarrozza = Math.floor(Math.random() * 15) + 1;
    let valTariffa = "";
    let valPrice = valMileage * rate; //Prezzo intero


    if (isNaN(valMileage) || valName == ""){
        alert('ERRORE: Valori mancanti.');
        ObjSectResults.classList.remove('visible');
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
                alert('ERROR: Non è stato selezionato alcun valore.')
        }

        valPrice = `${valPrice.toFixed(2)} €`;

        ObjDetailName.innerHTML = valName;
        ObjDetailTariffa.innerHTML = valTariffa;
        ObjDetailCP.innerHTML = valCP;
        ObjDetailCarrozza.innerHTML = valCarrozza;
        ObjDetailPrice.innerHTML = valPrice

        ObjSectResults.classList.add('visible');

        // Arrotonda prezzo a due cifre decimali
       

    }

});


ObjBtnReset.addEventListener('click',function(){

    ObjTxtMileage.value = "";
    ObjTxtName.value = "";
    ObjSelAge.value = "under18";

    ObjSectResults.classList.remove('visible');

});





