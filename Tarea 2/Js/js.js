
var usuarios=[];
function Usuario(n,a,nu,m,c,f){

this.nombre=n;
this.apellido=a;
this.numero=nu;
this.mail=m;
this.cedula=c;
this.fecha=f;

}
function AgregarUsuario(){
    n=document.getElementById('nombre').value;
    a=document.getElementById('apellido').value;
    nu=document.getElementById('telefono').value;
    m=document.getElementById('email').value;
    c=document.getElementById('cedula').value;
    f=document.getElementById('fecha').value;

    usuarios.push(new Usuario(n,a,nu,m,c,f));
    savedata();
    mostrar();
    limpiar();
   
}
function cargar(){
    todo=localStorage.getItem('Data');
    if(todo!=null){
        usuarios=JSON.parse(todo);
        mostrar();
    }
}
function dce(e){
return document.createElement(e);
}

function limpiar(){
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('telefono').value='';
    document.getElementById('email').value='';
    document.getElementById('cedula').value='';
    document.getElementById('fecha').value='';
}

function mostrar(){
    destino=document.getElementById('tbDatos');
    destino.innerHTML='';
    
    for(x=0; x<usuarios.length;x++){
        user=usuarios[x]
    tr=dce('tr');
    tr.setAttribute('indice',x);
    td=dce('td');
    td.innerHTML=user.nombre;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=user.apellido;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=user.numero;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=user.mail;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=user.cedula;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=user.fecha;
    tr.appendChild(td);

    td=dce('td');
    td.innerHTML=Zodiaco(user.fecha);
    tr.appendChild(td);





    td=dce('td');
    btn=dce('button');
    btn.innerHTML='Eliminar';
    btn.setAttribute('onclick','borrar(this)');
    td.appendChild(btn);
    tr.appendChild(td);

  td=dce('td');
    btn=dce('button');
    btn.innerHTML='editar';
    btn.setAttribute('onclick','editar(this)');
    td.appendChild(btn);
    tr.appendChild(td);



    destino.appendChild(tr);
    }   
    
}

function borrar(btn){
    tr=btn.parentNode.parentNode;
    tr.setAttribute('class','borrar');
    if(confirm('Seguro de que desea borrar el usuario seleccionado?')){
    indice=tr.getAttribute('indice');; x++

    tarr=[];
    for(x=0; x<usuarios.length; x++){
        if(x!=indice){
            tarr.push(usuarios[x]);
        }
    }
    usuarios=tarr;
    savedata();
    tr.parentNode.removeChild(tr);
    
    }
    tr.setAttribute('class','');

}
function borrartodo(){
    if (confirm('Desea borrar todos los datos ingresados?')){
        usuarios=[];
        savedata();
        mostrar();
    }
}

function editar(btn){
tr=btn.parentNode.parentNode;

index= tr.getAttribute('index');
document.getElementById('nombre').value=usuarios[index].nombre;
document.getElementById('apellido').value=usuarios[index].apellido;
document.getElementById('telefono').value=usuarios[index].telefono;
document.getElementById('email').value=usuarios[index].email;
document.getElementById('cedula').value=usuarios[index].cedula;
document.getElementById('fecha').value=usuarios[index].fecha;
editIndex= index;
}

function GuardarEdit(){

    var nom = document.getElementById('nombre').value;
    var apell = document.getElementById('Apellido').value;
    var num = document.getElementById('telefono').value;
    var correo = document.getElementById('mail').value;
    var cedula = document.getElementById('cedula').value;
    var brith = document.getElementById('fecha').value;

    
    usuarios[editIndex]=new Usuario(nom,apell,num,correo,cedula,brith);
    savedata();
    limpiar();
    mostrar();


}

function savedata(){
    datos= JSON.stringify(usuarios);
    localStorage.setItem('Data',datos);
}

function Zodiaco(fecha){
    var zodiac = new Date(fecha);
    mes=zodiac.getMonth();
    dia = zodiac.getDay();

    if(mes==2 && dia >=21 || mes==3 && dia <=20){
        return "Aries";
    }else  if(mes==3 && dia >=21 || mes==4 && dia <=20){
        return "Tauro";
    }else  if(mes==4 && dia >=21 || mes==5 && dia <=21){
        return "Geminis";
    }else  if(mes==5 && dia >=22 || mes==6 && dia <=22){
        return "Cancer";
    }else  if(mes==6 && dia >=23 || mes==7 && dia <=22){
        return "Leo";
    }else  if(mes==7 && dia >=23 || mes==8 && dia <=22){
        return "Virgo";
    }else  if(mes==8 && dia >=23 || mes==9 && dia <=22){
        return "Libra";
    }else  if(mes==9 && dia >=23 || mes==10 && dia <=22){
        return "Escorpio";
    }else  if(mes==10 && dia >=23 || mes==11 && dia <=21){
        return "Sagitario";
    }else  if(mes==11 && dia >=22 || mes==0 && dia <=20){
        return "Capricornio";
    }else  if(mes==0 && dia >=21 || mes==1 && dia <=18){
        return "Acuario";
    }else  if(mes==1 && dia >=19 || mes==2 && dia <=20){
        return "Piscis";
    }else{
        return "Fecha no definida";
    }

}

