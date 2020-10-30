function loadFile(event) {
  document.querySelector('#avatar').style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
}
