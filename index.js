Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById("prompt").addEventListener('click', () => {
  document.getElementById('textarea').innerHTML ='';
  document.getElementById('textarea').innerHTML = prompts.random();
});