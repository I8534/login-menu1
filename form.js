const infotab = document.querySelector('.sign');
const overlay = document.querySelector('.overlay');
const loginButton = document.querySelector('.btn-primary')
const closeButton = document.querySelector('.btn-danger')

function openInfo() {
  infotab.classList.add('is-active');
  overlay.classList.add('is-active');
}

loginButton.addEventListener('click', openInfo);

function closeInfo() {
  infotab.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

closeButton.addEventListener('click', closeInfo);


// $('.btn-primary').click(function() {
//   $(this).find('.sub').stop().slideDown(500);
//   // stop의 역할은 마우스를 떼는 순간 바로 위로 올라가게 만드는 것이다.
//   //위의 함수를 해석하자면 .gnb-main-item 클래스에 호버했을 때
//   // this 즉 .gnb-main-item 클래스에서 sub이라는 곳에서 호버안하면 stop하고 호버를 끝까지하면 슬라이드 다운해라.
//   $(this).children('a').addClass('active');
//   // children('a') this의 자식 요소의 a 클래스