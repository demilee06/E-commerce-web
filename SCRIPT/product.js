const main = document.querySelector('.row')

function Rug(id, name, image, category, description, quantity, price) {
    this.id = id
    this.name = name
    this.image = image
    this.category = category
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new Rug(1, 'Smiley Rug', 'https://demilee06.github.io/E-com-images/smiley%20floor%20rug.jpg','Floor Rugs','Smiley emoji rug with a glitch-esque style to it.','',1500.00)
let item2 = new Rug(2,'Green Mushroom Rug','https://demilee06.github.io/E-com-images/giant%20mushroom%20floor%20rug.jpg','Floor Rugs','The Green and brown tones in this rug give it a comfy touch ','',1600.00)
let item3 = new Rug(3,'Van Gogh Rug','https://demilee06.github.io/E-com-images/van%20gogh%20floor%20rug.jpg','Floor Rugs','The art in this rug is a replication of the Famous Van gogh painting','',1978.99 )
let item4 = new Rug(4,'Purple ButterFly Rug','https://demilee06.github.io/E-com-images/buddafly.jpg','Floor Rugs','This butterfly is perfect for giving any bedroom a comfy feel','',1200.00 )
let item5 = new Rug(5,'B&W Graphic Car Rug','https://demilee06.github.io/E-com-images/black%20and%20white%20art%20car%20floor%20rug.jpg','Car Rugs','A creative graphic work  of art ','',500.00 )
let item6 = new Rug(6,'Goku Car Rug','https://demilee06.github.io/E-com-images/goku%20car%20floor%20rug.jpg','Car Rugs','this anime rug is adds a fun vibe to any car','',700.00 )
let item7 = new Rug(7,'Dino Car Rug','https://demilee06.github.io/E-com-images/dino%20car%20floor%20rug.jpg','Car Rugs','Dino gives a cartoon-ish vibe to your car','',570.00 )
let item8 = new Rug(8,'M&M Car Rug','https://demilee06.github.io/E-com-images/m%20and%20m%20car%20floor%20rug.jpg','Car Rugs','who doesnt love a good M&M now can and then','',500.00 )
let item9 = new Rug(9,'Ukraine Keyboard Rug','https://demilee06.github.io/E-com-images/colorful%20keyboard%20rug.jpg','Keyboard Rugs','this was made in support of the people deal with war Ukraine','',120.00 )
let item10 = new Rug(10,'One Piece Keyboard Rug','https://demilee06.github.io/E-com-images/one%20piece%20keyboard%20rug.jpg', 'Keyboard Rugs','A fan favourite amoungst anime watchers','',120.00)
let item11 = new Rug(11,'SpongeBob Keyboard Rug','https://demilee06.github.io/E-com-images/sponge%20bob%20keyboard%20rug.jpg','Keyboard Rugs','SpongeBob the lovable silly character who is now apart of your desk','',120.00 )
let item12 = new Rug(12,'Stitch Keyboard Rug','https://demilee06.github.io/E-com-images/stitch%20keyboard%20rug.jpg','Keyboard Rugs','stitch a mischevious tiny creature with a silly side','',120.00 )
let item13 = new Rug(13,'HedgeHog Coaster','https://demilee06.github.io/E-com-images/hedgehog%20coaster.jpg','Coaster Rugs','nothing makes a hot beverage better than having a cute coaster on hand','',15.00 )
let item14 = new Rug(14,'All Seeing Eye Coaster','https://demilee06.github.io/E-com-images/coaster%20eye%20rug.jpg','Coaster Rugs','these are the for the mystic guys/girlies of the world','',15.00 )
let item15 = new Rug(15,'Poker Card Coaster','https://demilee06.github.io/E-com-images/coaster.jpg','Coaster Rugs','the classic poker cards give  a classy touch to your beverage','',15.00 )
let item16 = new Rug(16,'Smiley Coaster','https://demilee06.github.io/E-com-images/smiley%20coaster%20rugs.jpg','Coaster Rugs','emoji coasters are so fun and coloful they brighten up the atmosphere','',15.00 )
let item17 = new Rug(17,'Neutral Phone Cover','https://demilee06.github.io/E-com-images/phone%20rugs%201.jpg','Phone Cover','neutral but fashionable phone covers are a must have','',50.00 )
let item18 = new Rug(18,'Animal Phone Cover','https://demilee06.github.io/E-com-images/phone%20rugs%202.jpg','Phone Cover','the adorable animal covers definitely simulate have a plushy on hand all the time','',60.00 )
let item19 = new Rug(19,'Colorful Phone Cover','https://demilee06.github.io/E-com-images/phone%20rugs%203.jpg','Phone Cover','playful and bold designs always helps spark the inspiration in you','',60.00 )
let item20 = new Rug(20,'Patterned Phone Cover','https://demilee06.github.io/E-com-images/phone%20rugs%204.jpg','Phone Cover','if you are going for a crocheted comforter vibe thsi one is for you','',50.00 )



let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20]


items.forEach(item => {
    main.innerHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img
                    src="${item.image}"
                    class="card-img-top" alt="Smiley face Rug">
                    <div class="label-top shadow-sm">${item.name}</div>
                    <div class="card-body">
                    <div class="clearfix mb-3">
                        <span class="float-start badge rounded-pill bg-primary">${item.price}</span>
                        <span class="float-end"><a href="#" class="small text-muted">${item.category}</a></span>
                    </div>
                    <h5 class="card-title">${item.description}</h5>
                    <div class="d-grid gap-2 my-4"> <a href="../HTML/Checkout.html" class="btn btn-warning">Add to Cart</a>
                    </div>
                    </div>
                </div>
            </div>
    `
})


