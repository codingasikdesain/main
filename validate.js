 function validateInput() {
    const inputElement = document.getElementById("nohp");
    const nopeElement = document.getElementById("no_tujuan");
    const infoElement = document.getElementById("info");
    const linkBeliElement = document.getElementById("linkBeli");
    const spaceElement = document.getElementById("spaces");
    if (inputElement.value.length < 11) {
      nopeElement.style.background = "red";
      nopeElement.style.color = "#ffff";
      infoElement.textContent = "!";
      linkBeliElement.style.display = "none";
      spaceElement.style.display = "none";
    } else {
      nopeElement.style.background = "transparent";
      nopeElement.style.color = "black";
      infoElement.style.display = "none";
      linkBeliElement.style.display = "block";
      spaceElement.style.display = "block";
    }
  }
  document.getElementById("nohp").addEventListener("input", validateInput);
