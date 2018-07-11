// Вариант один
document.addEventListener('keydown', function (e) {
  const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
  playSound(audio);
});

function playSound(audio) {    
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  };


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
