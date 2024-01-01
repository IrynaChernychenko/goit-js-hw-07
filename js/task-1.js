'use strict'

  const categoriesList = document.querySelector('#categories');
  const categoriesItems = categoriesList.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('ul li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements in category: ${categoryElements.length}`);
  });