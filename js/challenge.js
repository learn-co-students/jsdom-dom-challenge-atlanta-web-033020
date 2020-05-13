const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const likes = document.querySelector('.likes');
const pause = document.querySelector('#pause');
const commentInput = document.querySelector('#comment-input');
const comments = document.querySelector('.comments');
const submit = document.querySelector('#submit');

document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    if (!paused) {
      increaseCounter();
    }
  }, 1000);
});

plus.addEventListener('click', increaseCounter);
minus.addEventListener('click', decreaseCounter);

heart.addEventListener('click', addLike);

pause.addEventListener('click', pauseCounter);

submit.addEventListener('click', leaveComment);

function increaseCounter() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function decreaseCounter() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

let likesArr = [];

class like {
  constructor(number, times) {
    this.number = number;
    this.times = times;
    likesArr.push(this);
  }
}

function addLike() {
  updateOrCreateLike(parseInt(counter.innerHTML))
  showLikes();
}

function updateOrCreateLike(number) {
  for (let i = 0; i < likesArr.length; i++) {
    if (likesArr[i].number === number) {
      likesArr[i].times++;
      return;
    }
  }
  new like(number, 1);
}

function showLikes() {
  likes.innerHTML = '';
  for (let i = 0; i < likesArr.length; i++) {
    let li = document.createElement('li');
    if (likesArr[i].times > 1) {
      li.innerHTML = `${likesArr[i].number} has been like ${likesArr[i].times} times`;
    } else {
      li.innerHTML = `${likesArr[i].number} has been like ${likesArr[i].times} time`;
    }
    likes.appendChild(li);
  }
}

let paused = false;

function pauseCounter() {
  paused = !paused;
  if (paused) {
    pause.innerHTML = 'resume'
  } else {
    pause.innerHTML = 'pause'
  }
}

let commentArray = [];

function leaveComment() {
  commentArray.push(commentInput.value);
  showComments();
}

function showComments() {
  let ul = document.createElement('ul');
  if (comments.children.length === 0) {
    comments.appendChild(ul);
  }
  ul = document.querySelector('.comments ul');
  for (i = 0; i < commentArray.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = commentArray[i];
    ul.appendChild(li);
  }
  debugger;
}