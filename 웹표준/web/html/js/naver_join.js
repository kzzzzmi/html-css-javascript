const join_id = document.querySelector('#id');
const join_submit = document.querySelector('.join_submit');
const warning_requireds = document.querySelectorAll('.text_required');
const idCheck_false = document.querySelector('.idCheck_false');

join_id.onblur = () => {
  let test_id = 'junil11234';

  if (join_id.value.length == 0) {
    warning_requireds[0].style.display = 'block';
  } else {
    warning_requireds[0].style.display = 'none';
    if (join_id.value == test_id) {
      idCheck_false.style.display = 'block';
    } else {
      idCheck_false.style.display = 'none';
    }
  }
};

join_submit.addEventListener('click', () => {
  alert(join_id.value + ' 계정을 생성했습니다');
  print();
});

const long_text = document.querySelectorAll('long_text');
const id_text = document.querySelector('#id');
const input = document.querySelectorAll('input');

console.log(long_text);
console.log(id_text);
console.log(input);
