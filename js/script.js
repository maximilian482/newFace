function menu() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// =========== FUNÇÃO PROCEDIMENTOS ============
let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('demo')
  let captionText = document.getElementById('caption')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  captionText.innerHTML = dots[slideIndex - 1].alt
}
/* ============= FUNÇÃO CONTADOR ================== */

var counter1 = document.getElementById('counter1')
var counter2 = document.getElementById('counter2')
var counter3 = document.getElementById('counter3')
var counter4 = document.getElementById('counter4')

function increment(i, max, element) {
  if (i > max) return
  setTimeout(function () {
    element.innerText = Math.round(i)
    increment(i + max / 100, max, element)
  }, 10)
}

increment(0, 9, counter1)
increment(0, 15, counter2)
increment(0, 700, counter2)
increment(0, 2500, counter2)

/** =========== Botão voltar para o TOPO  =============**/
const buttonBackToTop = document.querySelector('.totop')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    buttonBackToTop.classList.add('show')
  } else {
    buttonBackToTop.classList.remove('show')
  }
})

// ============= FUNÇÃO ENVIAR E-MAIL ===============

function enviaEmail() {
  var resp = document.getElementById('resp')
  var nome = document.getElementById('name').value
  var tel = document.getElementById('phone').value
  var email = document.getElementById('email').value
  var date = document.getElementById('date').value
  var message = document.getElementById('message').value

  if (nome == '' || nome.length < 3) {
    alert('Preencha os campos obrigatórios!')
    resp.innerHTML = 'Preencha o nome!'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else if (tel == '') {
    alert('Preencha os campos obrigatórios!')
    resp.innerHTML = 'Preencha o Telefone'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else if (email == '') {
    alert('Preencha os campos obrigatórios!')
    resp.innerHTML = 'Preencha o E-mail'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else if (date == '') {
    alert('Preencha os campos obrigatórios!')
    resp.innerHTML = 'Preencha uma data'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else if (message == '') {
    alert('Preencha os campos obrigatórios!')
    resp.innerHTML = 'Escreva alguma coisa!'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else if (message.length <= 15) {
    alert('Escreva pelo menos 15 caracteres!')
    resp.innerHTML = 'Texto muito curto!'
    resp.style.backgroundColor = 'red'
    resp.style.color = 'white'
  } else {
    alert('Mensagem enviada!')
    resp.innerHTML = 'Sucesso!'
    resp.style.backgroundColor = 'green'
    resp.style.color = 'white'
  }
}

// ========= FUNÇÃO CADASTRO ===============

function cadastro() {
  var respcad = document.getElementById('respcad')
  var nomecad = document.getElementById('nomecad').value
  var telcad = document.getElementById('phonecad').value
  var emailcad = document.getElementById('emailcad').value

  if (nomecad == '') {
    alert('Preencha os campos obrigatórios!')
    respcad.innerHTML = 'Preencha o nome!'
    respcad.style.backgroundColor = 'red'
    respcad.style.color = 'white'
  } else if (telcad == '') {
    alert('Preencha os campos obrigatórios!')
    respcad.innerHTML = 'Preencha o Telefone'
    respcad.style.backgroundColor = 'red'
    respcad.style.color = 'white'
  } else if (emailcad == '') {
    alert('Preencha os campos obrigatórios!')
    respcad.innerHTML = 'Preencha o E-mail'
    respcad.style.backgroundColor = 'red'
    respcad.style.color = 'white'
  } else {
    alert('Mensagem enviada!')
    respcad.innerHTML = 'Sucesso!'
    respcad.style.backgroundColor = 'green'
    respcad.style.color = 'white'
    // }
  }
}
