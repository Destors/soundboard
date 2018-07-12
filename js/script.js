document.addEventListener('keydown', function (e) {
  const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  playSound(audio);
});

function playSound(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

function clickHandler(e) {
  const audio = document.querySelector('audio[data-key="' + this.dataset.key + '"]');
  playSound(audio);
};

const keys = Array.from(document.querySelectorAll('.sounbord-btn-wrapper'));
keys.forEach(key => key.addEventListener('click', clickHandler));


/*if (this.dataset.key) {
    const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');  
    playSound(audio);
  }};*/

/*function clickHandler(e) {
    if (this.dataset.key) {
    const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');  
    playSound(audio);
  }};

const keys = Array.from(document.querySelectorAll('.sounbord-btn-wrapper'));
keys.forEach(key => key.addEventListener('click', clickHandler));


/*function clickHandler(e) {
    if (this.dataset.key) {
      const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
      const key = document.querySelector(`div[data-key="${this.dataset.key}"]`);
      playSound(audio);
    } else { 
      const audio = document.querySelector(`audio#${this.dataset.target}`);
      const key = document.querySelector(`div[data-target="${this.dataset.target}"]`);
      playSound(audio);
    }
    
  }  

const keys = Array.from(document.querySelectorAll('.sounbord-btn-wrapper'));
keys.forEach(key => key.addEventListener('click', clickHandler));*/


//вариант два
/*
function keyDownTracker(e) {
  const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.sounbord__btn-wrapper'));
window.addEventListener('keydown', keyDownTracker);
*/