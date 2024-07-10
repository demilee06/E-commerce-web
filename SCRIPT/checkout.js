let title = document.querySelector('h1')

let items = JSON.parse(localStorage.getItem('purchaseItems'))

console.log(items);

items.forEach(item => {
    title.innerHTML += `
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
                    <div class="d-grid gap-2 my-4"> <button type="button" class="btn add-btn btn-warning" value=${item.id}>Add to Cart</button>
                    </div>
                    </div>
                </div> 
            </div>
    `
})