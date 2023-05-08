function botao(t){
   let pai = document.getElementsByClassName('titulo')[t].parentElement;
   let img = document.getElementsByClassName('imag');
   let conteudo = pai.classList.contains('sectionHide');
   let sanf = document.getElementsByClassName('sanfona');
   let sessoes = document.getElementsByClassName('sanfona')

   if(conteudo == true){
     for(let s = 0; s < sessoes.length; s++){
          sessoes[s].classList = 'sanfona sectionHide';
          sanf[s].style. height= '3em';
          img[s].style.transform = "rotate(" + 0 + "deg)";
     }
        pai.classList = 'sanfona sectionShow';
        img[t].style.transform = "rotate(" + 178 + "deg)";
        sanf[t].style. height= '6em';
   } else{
        pai.classList = 'sanfona sectionHide';
        img[t].style.transform = "rotate(" + 0 + "deg)";
        sanf[t].style. height= '3em';
   }
}