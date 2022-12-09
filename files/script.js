const searchbar = document.getElementById('search_input');
const search_btn = document.getElementById('link_search');
const search_results = document.querySelector('.search_results');
const footer_search  = document.querySelector('.footer_search');
const sh_searchbar = document.querySelector('.sh_searchbar');

const products = [
    {
      "name" : "Frontier Co-Op Organic Adobo Seasoning Blend",
      "price" : "$29.00",
      "image" : "https://demo73leotheme.b-cdn.net/prestashop/at_freshio/32-large_default/the-adventure-begins-framed-poster.jpg" 
    },
    {
        "name" : "Pamela's Products Artisan Blend Flour Gluten Free",
        "price" : "$29.00",
        "image" : "https://demo73leotheme.b-cdn.net/prestashop/at_freshio/31-large_default/the-best-is-yet-to-come-framed-poster.jpg" 
    },
    {
        "name" : "Grassfed Organic Turmeric Superghee",
        "price" : "$15.00",
        "image" : "https://demo73leotheme.b-cdn.net/prestashop/at_freshio/30-large_default/brown-bear-printed-sweater.jpg" 
      },
      {
        "name" : "Organic High-Curcumin Turmeric Powder",
        "price" : "$22.00",
        "image" : "https://demo73leotheme.b-cdn.net/prestashop/at_freshio/24-large_default/hummingbird-printed-t-shirt.jpg" 
      },
      {
        "name" : "Organic High-Curcumin Turmeric Powder",
        "price" : "$29.00",
        "image" : "https://demo73leotheme.b-cdn.net/prestashop/at_freshio/33-large_default/today-is-a-good-day-framed-poster.jpg" 
      },
      
]
footer_search.addEventListener('click' , () => {
    console.log("transform")
    sh_searchbar.style.transform  = "translateY(0)";
    document.getElementById('search_icon').src = "../img/cross.png";
})

search_btn.addEventListener('click', () => {
    let search_result = searchbar.value.toLowerCase();
    let html = `<h5 class='input_product'>Products For "${search_result}" </h5>`;
    switch(search_result){
        case 'apple': 
        html += `
           <div class='result_product'>
             <img src=${products[1].image} width="90px" height ="90px">
             <div >
             <p>${products[1].name}</p>
             <p>${products[1].price}</p>
             </div>
           </div>
        `;
        break;
        case 'banana':
            html += `
           <div class="result_product">
             <img src=${products[0].image} width="90px" height ="90px">
             <div>
             <p>${products[0].name}</p>
             <p>${products[0].price}</p>
             </div>
           </div>
        `;
        break;
        case 'onion':
            html += `
           <div class='result_product'>
             <img src=${products[4].image} width="90px" height ="90px">
             <div>
             <p>${products[4].name}</p>
             <p>${products[4].price}</p>
             </div>
           </div>
        `;
        break;
        case 'carrot': 
        html += `
           <div class='result_product'>
             <img src=${products[3].image} width="90px" height ="90px">
             <div>

             <p>${products[3].name}</p>
             <p>${products[3].price}</p>
             </div>
           </div>
        `;
        break;
        case 'orange': 
        html += `
           <div class="result_product">
             <img src=${products[2].image} width="90px" height ="90px">
             <div>
             <p>${products[2].name}</p>
             <p>${products[2].price}</p>
             </div>
           </div>
        `;
        break;
    }
     search_results.innerHTML = html;
     search_results.style.display = "block";
     html = '';
})