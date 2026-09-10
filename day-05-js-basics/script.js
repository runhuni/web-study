console.log('자바스크립트 정상 실행');

const titleElement = document.getElementById('title');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
  titleElement.textContent = '버튼을 눌러 텍스트를 바꿨습니다.';
  titleElement.style.color = '#2563eb';
});
