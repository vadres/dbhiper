const addLoader = () => {
  document.getElementById("loader").style.display = "block";
  setTimeout(() => {
    document.getElementById("loader").style.opacity = 1;
  }, 10);

  setTimeout(delLoader, 3000);
}

const delLoader = () => {
  document.getElementById("loader").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 400);
}

module.exports = {
  delLoader,
  addLoader
}