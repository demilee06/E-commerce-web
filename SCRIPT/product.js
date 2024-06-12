let cards = document.querySelectorAll('.card');

// Loop through each card
cards.forEach(card => {
    // Get card image source
    let imgSrc = card.querySelector('.card-img-top').getAttribute('src');
    
    // Get label text
    let labelText = card.querySelector('.label-top').textContent;
    
    // Get price
    let price = card.querySelector('.badge').textContent;
    
    // Get card title
    let title = card.querySelector('.card-title').textContent;
    
    // Get button link
    let buttonLink = card.querySelector('.btn').getAttribute('href');
    
    // Output information (you can replace this with your desired logic)
    console.log('Image Source:', imgSrc);
    console.log('Label Text:', labelText);
    console.log('Price:', price);
    console.log('Title:', title);
    console.log('Button Link:', buttonLink);
    console.log('------------------------------------');
});
