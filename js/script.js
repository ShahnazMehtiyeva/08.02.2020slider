// let picturecount = document.querySelectorAll('.lent img').length;
// let ul = document.querySelector('ul');
// let lent = document.querySelector('.lent');
// lent.style.width = (picturecount * 100) + 'vw';
// let left_btn = document.querySelector('.left-btn');
// let position = 0;
// let right_btn = document.querySelector('.right-btn');

// let frame = document.querySelector('.frame');
// createDots();

// let dots = document.querySelectorAll('li');
// dots[0].classList.add('active')

// right_btn.addEventListener('click', function () {
//     if (position < 100 * (picturecount - 1)) {
//         position += 100;
//     } else {
//         position = 0;
//     }
//     lent.style.right = position + 'vw';
//     setActive();
// })


// left_btn.addEventListener('click', function () {
//     if (position > 0) {
//         position -= 100;
//     } else {
//         position = 100 * (picturecount - 1);
//     }
//     lent.style.right = position + 'vw';
//     setActive();
// })

// function timerfunc() {
//     if (position < 100 * (picturecount - 1)) {
//         position += 100;
//     } else {
//         position = 0;
//     }
//     lent.style.right = position + 'vw';
//     setActive();
// }


// let timer;

// timer = setInterval(timerfunc, 3000)

// lent.addEventListener('mouseenter', function () {
//     clearInterval(timer)
// })

// lent.addEventListener('mouseleave', function () {
//     timer = setInterval(timerfunc, 3000)
// })



// function createDots() {
//     for (let i = 0; i < picturecount; i++) {
//         let li = document.createElement('li');

//         li.addEventListener('click', function () {
//             position = i * 100;
//             lent.style.right = position + 'vw';
//             setActive();
//         });

//         ul.appendChild(li);
//     }
// }

// function setActive() {
//     let index = position / 100;
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('active');
//     }
//     dots[index].classList.add('active');
// }







// second slide

let left_btn = document.querySelector('.left-btn');

let right_btn = document.querySelector('.right-btn');

let images = document.querySelectorAll('.top img');
let top1 = document.querySelector('.top')
let index = 0;

images[0].classList.add('active');

right_btn.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    if (index < (images.length - 1)) {
        index++;
    } else {
        index = 0;
    }
    console.log(index);
    
    images[index].classList.add('active');
})

left_btn.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    images[index].classList.add('active');
})

// function timerfunc() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].classList.remove('active');
//     }

//     if (index < (images.length - 1)) {
//         index++;
//     } else {
//         index = 0;
//     }
//     images[index].classList.add('active');
// }


// let timer;

// timer = setInterval(timerfunc, 3000)

// top1.addEventListener('mouseenter', function () {
//     clearInterval(timer)
// })

// top1.addEventListener('mouseleave', function () {
//     timer = setInterval(timerfunc, 3000)
// })

let images2 = document.querySelectorAll('.bottom img');
for (let i = 0; i < images2.length; i++) {
    images2[i].addEventListener('click', function () {
        for (let j = 0; j < images2.length; j++) {
            images[j].classList.remove('active');
        }
        images[i].classList.add('active');
    });

}