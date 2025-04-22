function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src" ,"./imagens/avatarlight.png")
  } else {
    img.setAttribute("src", "./imagens/avatar-.png")
  }

  /*
  if (html.classList.contains('light')) { img.setAttribute("src", "../imagens/avatarlight-.png")
    html.classList.remove('light')
  } else { img.setAttribute("src", "../imagens/avatar.png")
    html.classList.add('light')
  }temos uma maneira mais simples*/
}