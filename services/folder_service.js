const setNameFolder = async () => {
  try {
    let path = document.getElementById("dir").files[0].path;
    const separator = (path.includes("\\"))? "\\": "/";
    
    let arr = path.split(separator);
    arr.pop();
    
    path = arr.join(separator);
    document.getElementById("dir-label").getElementsByTagName("span")[0].innerHTML = path;
  } catch (e) {
    console.log(e);
    document.getElementById("dir-label").getElementsByTagName("span")[0].innerHTML = "Pasta inválida";
  }
}

module.exports = {
  setNameFolder
}