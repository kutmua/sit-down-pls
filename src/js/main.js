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


  /* -------------------------- */
  // TODO: реализовать эту функцию для всех кнопок КУПИТЬ
  const productPage = 'product-card.html';
  const btnsBuy = document.querySelectorAll('.catalog-card__btn');

  btnsBuy.forEach(btn => {
    btn.addEventListener('click', (event) => {
      let productType = event.target.previousSibling.previousElementSibling.previousElementSibling.textContent.trim().slice(1, length-1);
      localStorage.setItem('breadСrumbs', JSON.stringify(productType));
    })
  })

  function productCheck() {
    let fileName = location.href.split("/").slice(-1);
    if (fileName[0] === productPage) {
      createBreadCrumbs();
    }
  }

  function createBreadCrumbs() {
    let productType = JSON.parse(localStorage.getItem('breadСrumbs'));

    const list = document.querySelector('.bread-crumbs__list');
      const listItem = document.createElement('li');
        const itemLink = document.createElement('a');

    const currentItemLink = document.querySelectorAll('.bread-crumbs__item-link');
    currentItemLink.forEach(link => {
      if (link.classList.contains('bread-crumbs__item-link_active')) {
        link.classList.remove('bread-crumbs__item-link_active')
      }
    })

    /* присваение классов */
    listItem.classList.add('bread-crumbs__list-item');
      itemLink.classList.add('bread-crumbs__item-link', 'another-links', 'bread-crumbs__item-link_active')

    /* отрисовка элементов */
    itemLink.textContent = productType;
    listItem.append(itemLink);
    list.append(listItem);

  }

  productCheck()

  /* -------------------------- */
  const modal = new GraphModal();
});