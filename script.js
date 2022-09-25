
const mensaje=document.getElementById("areaizquierda");
const mensaje2=document.getElementById("areaderecha");
           

function encriptar(){
   
           var texto=mensaje.value;
           document.getElementById("visible").style.display='none'
            document.getElementById("oculta").style.display='block'
            texto=texto.replace(/e/g,'enter');
            texto=texto.replace(/i/g,'imes');
            texto=texto.replace(/a/g,'ai');
            texto=texto.replace(/o/g,'ober');
            texto=texto.replace(/u/g,'ufat');
            mensaje.value="";
            mensaje2.value=texto;


}

function desencriptar(){
   
       var texto=mensaje.value;
        document.getElementById("visible").style.display='none'
        document.getElementById("oculta").style.display='block'
        texto=texto.replace(/enter/g,'e');
        texto=texto.replace(/imes/g,'i');
        texto=texto.replace(/ai/g,'a');
        texto=texto.replace(/ober/g,'o');
        texto=texto.replace(/ufat/g,'u');
        mensaje.value="";
        mensaje2.value=texto;


}

function copiar(){
    mensaje2.select();
    navigator.clipboard.writeText(mensaje2.value);
    mensaje2.value=""
   

}