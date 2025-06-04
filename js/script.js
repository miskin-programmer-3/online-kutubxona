searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 93){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




// qidiruv//
//  const searchBox = document.getElementById('search-box');
//     const books = document.querySelectorAll('.swiper-slide.box');

//     searchBox.addEventListener('input', function () {
//         const searchTerm = searchBox.value.toLowerCase();
//         books.forEach(book => {
//             const title = book.querySelector('h3').textContent.toLowerCase();
//             book.style.display = title.includes(searchTerm) ? 'block' : 'none';
//         });
//     });


// Swiper instance'ni nomlab oling (bu nom sizga kerak)
// Swiper instance
// Faqat bir marta chaqiring!



document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Sahifa yangilanishini to‘xtatamiz

    const query = document.getElementById('search-box').value.toLowerCase().trim();
    if (!query) return; // Agar qidiruv bo‘sh bo‘lsa hech narsa qilmaymiz

    // H3 elementlarini olamiz
    const allHeaders = document.querySelectorAll('#featured h3');

    let found = false;

    allHeaders.forEach(h3 => {
        const text = h3.textContent.toLowerCase();

        if (text.includes(query)) {
            found = true;
            // Mos kelgan elementga scroll qilamiz
            h3.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Ixtiyoriy: qidirilgan elementni vizual ko‘rsatish uchun class qo‘shish
            allHeaders.forEach(h => h.classList.remove('highlight'));
            h3.classList.add('highlight');
        }
    });

    if (!found) {
        alert('Hech qanday natija topilmadi!');
    }
});



  