const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generatebtn=document.getElementById('Generatebtn');
const downloadbtn=document.getElementById('Downloadbtn');
const qrContainer=document.querySelector('.qr-body');
let size=sizes.value;
generatebtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log("Generate button clicked.");
    isEmptyInput();
})

sizes.addEventListener('change',function(e){
    size=e.target.value;
    isEmptyInput();
    // generateQRcode();
})
downloadbtn.addEventListener('click',function(e){
    let img=document.querySelector('.qr-body img');
    if(img!==null){
        let imgAttr=img.getAttribute('src');
        downloadbtn.setAttribute("href",imgAttr);
    }
    else{
        e.preventDefault();
        alert("No QR CODE found.");
    }
})
function isEmptyInput(){
     if(qrText.value.length>0)
        generateQRcode();
    else
        alert("Bhai mera URL toh daalo yaar.");
}
function generateQRcode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }) 
};