const quotes = ["Ideas await...", "Ready to be inspired?", "On your mark, Get set, WRITE!", "Feeling stuck?", "Get motivated...", "Wrting is more than typing words..."]

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById("prompt").addEventListener('click', () => {
  document.getElementById('textarea').innerHTML ='';
  document.getElementById('textarea').innerHTML = prompts.random();
});

function quotation() {
  document.getElementById('textarea').innerHTML = quotes.random();
}

quotation();