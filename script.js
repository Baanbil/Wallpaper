const input = document.getElementById("input")
function handle(event){
  if(event.key === "Enter"){
    appear();
  }
}
function appear(){
  const jessiah = document.getElementById("jessiah")
  const nav = document.getElementById("nav")
  const myH1 = document.getElementById("dev")
  const content = document.getElementById("content");
  const gallery = document.getElementById("gallery");
  const audio = document.getElementById("audio")

  jessiah.style.display = "none";
  nav.style.display = "flex"
  myH1.textContent = `${input.value}`
  content.style.display = "block";
  gallery.style.display = "none"
  audio.play();
}
function dev(){
  const buttonElelment = document.getElementById("dev");
  if(buttonElelment.innerText === `${input.value}`){
    buttonElelment.innerHTML = "&copy; Baanbil Godfred";
    document.body.style.background = "url(images/244122.jpg)"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
  }
  else{
    buttonElelment.innerHTML = `${input.value}`
    document.body.style.background = "url(images/134824.jpg)"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
  }
}