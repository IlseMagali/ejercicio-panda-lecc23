//alert("hola");
var botonCerrar = document.getElementsByTagName("span");
var imagenes = document.getElementsByClassName("panda");
console.log(imagenes);

for (var i = 0; i < botonCerrar.length;i++){
  botonCerrar[i].addEventListener("click", function(){
    for (var i = 0; i < imagenes.length;i++){
      imagenes[i].style = this.style;
      this.style.display = "none";
    }

  });
}

//
