
var tela = $(window).width();
$(window).resize(function(event) {
  tela = $(window).width();
});

var secoes = document.querySelectorAll(".secao-corpo")
var lista = document.querySelectorAll(".linkref");

if(tela > 780){
  lista.forEach( function(element, index) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
            
    
    for(var x=0; x<lista.length;x++){
      var atual = lista[x];
     
      atual.classList.remove('botao-ativo')
    }
      
      element.classList.add('botao-ativo');

      

      var href = this.getAttribute('href').substring(1);
      secoes.forEach( function(element, index) {
        var hrefSecao = element.getAttribute('id');

        if(element.classList.contains('secao-ativa') & hrefSecao != href){
          element.classList.remove('secao-ativa');
        }else if(hrefSecao === href ){
          element.classList.add('secao-ativa');

        }

      });
    })
  });
}

if(tela < 780){

  $("#collapse-navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
}