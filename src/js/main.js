document.addEventListener('DOMContentLoaded', function(){
  const checkBoxes = document.querySelectorAll('.check__input');

  checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('focus', (event) => {
      event.currentTarget.classList.add('focus');
      document.querySelectorAll('.filters-check__text').forEach( text => {
        text.classList.remove('focus')
      })
      event.currentTarget.nextElementSibling.nextElementSibling.classList.add('focus')
      // console.log(event.currentTarget.nextElementSibling.nextElementSibling);
    })
  })
});