function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if(elemento === null){
    console.log('Elemento nao encontrado')
  }
  console.log(elemento.localName === 'audio')

}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++){
  const tecla = listaTeclas[contador];
  
  const instrumento = tecla.classList[1];
  
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio)
  };

  tecla.onkeydown = function (evento) {
    if(tecla.code === 'Space' || tecla.code === 'Enter'){
      tecla.classList.add('ativa');
    }
      console.log(evento)
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}