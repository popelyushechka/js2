send.addEventListener("click",fnc);
function fnc(){
    let val_CA = CA.value;
    let val_Lnv = Lnv.value;
    let val_CL = CL.value;
    let val_QR = val_CA;
    val_QR = (parseInt(val_CA) - parseInt(val_Lnv)) / parseInt(val_CL);
    QR.value = val_QR;

    result.innerHTML = val_QR;
}