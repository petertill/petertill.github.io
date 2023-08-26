import data from './products.json' assert { type: 'json' };


    function getValueBySlug(slug) {
    const product = data.find((p) => p.slug === slug);
    return product ? product : null;
    }



	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const slug = urlParams.get('prod');
	let content = document.getElementById('content');

	if(getValueBySlug(slug)){
		let current = getValueBySlug(slug);
        let freebiestring = `download='${slug}_petertill'`;
		/*let freebieHTML = `
		<a id="download" href="filename" download="slug_petertill" style="display:none;"></a>
		<form onsubmit="document.getElementById('download').click();" method="get" action="https://script.google.com/macros/s/AKfycbz3t2cVcPDOkJK7oanFoV2WUJcWvI6e2-ELZnMM2bpnA-aLOTK6L5eX_4oMR0SglD4u/exec">
			<input type="text" name="name" required>
			<input type="email" name="email" required>
			<input type="submit" value="Download it">
		</form>
		`*/
        //Change page title to product title https://app.gumroad.com/follow_from_embed_form
        document.title = `${current["title"]} | Peter Till`;
        console.log(current["link"]);
		content.innerHTML = 
        `
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0 product-img" src="./assets/products/${current["image"]}" alt="..."></div>
                    <div class="col-md-6">
                        <div class="small mb-1">Type: ${current["subtitle"]}</div>
                        <h1 class="display-5 fw-bolder">${current["title"]}</h1>
                        <div class="fs-5 mb-5">
                            <span>${current["price"]}</span>
                        </div>
                        <p class="lead">${current["shortdesc"]}</p>
                        <div class="d-flex">
                            ${current["soon"] ? `<div class="alert alert-warning" role="alert">You cannot get this product yet!</div>`:
                            current["isfreebie"] ? `<form action="${current["link"]}" method="post">
                            <div class="input-group mb-3">
                                <input type="hidden" name="seller_id" value="5953633473367"/>
                                <input class="form-control" type="email" placeholder="Your email address" name="email" value=""/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">Get it</button>
                                </div>
                            </div>
                            </form>`: 
                            `<a class="btn btn-primary" href="${current["cb"]}">Buy</a>`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
          <h2>Description</h2>
          <p>${current["description"]}</p>
        </section>
        `;
	}else{
	content.innerHTML = `<h1>No product found</h1>`
	}



function addToCart(slug) {

    //Get the cart items object
    var cartValue = sessionStorage.getItem("cart");
    var cartObj = JSON.parse(cartValue);
    
    //New product item
    var newItem = [{
        slug: [slug, 1]
    }];

    if(cartObj != null){

    cartObj.push(newItem);

    }else {
        cartObj = newItem;
    }

    var jsonStr = JSON.stringify(cartObj);
    sessionStorage.setItem("cart", jsonStr);
    console.log("Added to cart");

    

}