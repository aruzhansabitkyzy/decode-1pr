const searchbar = document.getElementById('search_input');
const search_btn = document.getElementById('link_search');
const search_results = document.querySelector('.search_results');
const footer_search  = document.querySelector('.footer_search');
const sh_searchbar = document.querySelector('.sh_searchbar');
const search_icon = document.querySelector('.search_icon');
const cross_icon = document.querySelector('.cross_icon');
const panel = document.querySelector('.panel');
const paneltool = document.querySelector(".paneltool");
const theme = document.getElementsByClassName("theme");
const burger = document.querySelector('.b_menu');
const dropdownGreen = document.querySelector('.dropdown-green');
const arrow = document.getElementsByClassName('arrow');
const changingImg = document.querySelector('.changingImg');

let imgIndex = 0;
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
const img = [
  "https://img.freepik.com/premium-photo/salad-with-chicken-arugula-walnuts-tomatoes-and-parmesan-gray-background_89816-15038.jpg?w=99",
  "https://mydario.com/wp-content/uploads/2018/05/shutterstock_264191096.jpg",
  "https://i.insider.com/610443ab39e63d001884b056?width=1300&format=jpeg&auto=webp",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDd5yjvu6CBZZfZueSFlIymlUApl_F96kpF4NTINhdA7vyLM-9Ev0hWblVC17X5mN9Po&usqp=CAU"
]

burger.addEventListener('click', openMenu);
arrow[0].addEventListener('click', changeImage);
arrow[1].addEventListener('click', changeImage);

panel.addEventListener('click' , openSidePanel);
theme[0].addEventListener('click', changeColor,'green');
theme[1].addEventListener('click' , changeColor,'orange');
theme[2].addEventListener('click', changeColor,'pink');

document.querySelector('.scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

footer_search.addEventListener('click' , () => {
    if(search_icon.classList.contains('hide_icon')) {
      search_icon.classList.remove('hide_icon');
      cross_icon.classList.add('hide_icon');
      sh_searchbar.classList.add('hide_searchbar');
    }
    else {
      sh_searchbar.classList.remove('hide_searchbar');
      search_icon.classList.add('hide_icon');
      cross_icon.classList.remove('hide_icon');
    }
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

function openSidePanel() {
   if(paneltool.classList.contains('slide_left')) {
      panel.style.left = "93.2%";
      paneltool.classList.remove("slide_left");
   }
   else {
      panel.style.left = "75.5%";
      paneltool.classList.add("slide_left");
   }
}

function changeImage() { 
  if(imgIndex == 3) {
  imgIndex = 0;
} 
imgIndex++;

  changingImg.classList.add('hidden')
  setTimeout(() => {
    changingImg.style.visibility = 'hidden'
    changingImg.src =img[imgIndex]+"";
    setTimeout(() => {
      changingImg.style.visibility = '';
      changingImg.classList.remove('hidden');
    }, 10)
  }, 300)
}

function openMenu() {
    if(dropdownGreen.classList.contains('show')) {
       dropdownGreen.classList.remove('show');
       dropdownGreen.classList.add('hide');
    }
    else {
      dropdownGreen.classList.add('show');
      dropdownGreen.classList.remove('hide');
    }
}

function changeColor(color) {
    let newColor = color.target.classList[1];
    console.log(newColor);
    document.getElementById('f_text').style.color = newColor;
    document.getElementById('right-top-link').style.color = newColor;
    document.getElementsByClassName('.home').forEach((item) => {
        console.log(item);
        item.style.color = newColor;
    });
    document.querySelector('.price').style.color = newColor;
}

  var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    slidesPerView: 4,
    auto: true, 
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //     1199: {
    //        slidesPerView : 3,
    //        spaceBetween: 40
    //     },
    //     768: {
    //       slidesPerView : 2,
    //       spaceBetween: 60
    //     },
    //     480: {
    //       slidesPerView : 1,
    //       spaceBetween: 60
    //     }
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    rewind: true,
  });
  var swiper2 = new Swiper('.swiper2', {
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    auto: true, 
    autoplay: {
      delay: 3000
    },
    stretch: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    rewind: true
  })



