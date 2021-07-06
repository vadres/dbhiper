const setNameFolder = async () => {
  try {
    let path = document.getElementById("dirs").files[0].path;
    const separator = (path.includes("\\"))? "\\": "/";
    
    let arr = path.split(separator);
    arr.pop();
    
    path = arr.join(separator);
    document.getElementById("dir-label").getElementsByTagName("span")[0].innerHTML = path;
    document.getElementById("folder").value = path;
  } catch (e) {
    console.log(e);
    document.getElementById("dir-label").getElementsByTagName("span")[0].innerHTML = "Pasta inválida";
    document.getElementById("folder").value = "";
  }
}

module.exports = {
  setNameFolder
}