/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

class SLIDER {
    constructor(options) {

        this.slider = document.querySelector(options.slider);
        this.sliderLine = this.slider.querySelector('.header-slider__line');
        this.slides = this.sliderLine.children;
        this.next = this.slider.querySelector('.slider__next');
        this.prev = this.slider.querySelector('.slider__prev');

        this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        this.timeMove = options.time != undefined ? options.time : 1000;
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.moveSize = "X" === this.dir ? this.width : this.height;

        this.activeSlide = 0;
        this.sliderLine.style = `
                               position:relative;
                               overflow:hidden;`

        for (let i = 0; i < this.slides.length; i++) {
            const sl = this.slides[i];
            sl.style = ` position:absolute;
                         width: ${this.width}px;
                         height: ${this.height}px`;

            if (i != this.activeSlide) {
                sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
                // sl.style.transform = `scale(0.9)`;
                // sl.style.opacity = `0.5`;
                // this.slides[this.activeSlide].style.transform = `scale(0.9)`;
                // this.slides[this.activeSlide].style.opacity = `1`;
            }
            if (i === this.slides.length - 1) {
                sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
            }
        }
        if (options.autoplay) {
            let interval = setInterval(() => {
                this.move(this.next);
            }, this.timeMove);
            this.slider.addEventListener('mouseenter', () => { clearInterval(interval) })
            this.slider.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                    this.move(this.next);
                }, this.timeMove)
            })
        }
        this.next.addEventListener('click', () => this.move(this.next))
        this.prev.addEventListener('click', () => this.move(this.prev))

        window.addEventListener('resize', () => {
            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;
            this.moveSize = "X" === this.dir ? this.width : this.height;
            this.sliderLine.style = `
                               position:relative;
                               overflow:hidden;`
            for (let i = 0; i < this.slides.length; i++) {
                const sl = this.slides[i];
                sl.style = ` position:absolute;
                                             width: ${this.width}px;
                                             height: ${this.height}px`;
                if (i != this.activeSlide) {
                    sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
                }
                if (i === this.slides.length - 1) {
                    sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
                }
            }

            // console.log(this.width);

        })
    }
    move(btn) {
        this.next.disabled = true;
        this.prev.disabled = true;
        setTimeout(() => {
            this.next.disabled = false;
            this.prev.disabled = false;
        }, this.timeMove + 50);

        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            slide.style.transition = '0ms';
            // slide.style.display = `block`;
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`;
                // slide.style.display = `none`;
            }

        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms ease';
        if (btn == this.next) {
            this.activeSlide++;
            if (this.activeSlide >= this.slides.length) {
                this.activeSlide = 0;
                // console.log(this.activeSlide.style.display = `block`);
            }
        }
        else if (btn == this.prev) {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
        // this.slides[this.activeSlide].style.transform = `translateY(2%)`;
        // this.slides[this.activeSlide].style.transform = `scale(1.05)`;
        // this.slides[this.activeSlide].style.display = `block`;

        // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        // let newArray = arr.filter(callback( this.slides[this.activeSlide]));

        // const result = this.slides.filter(this.slides => this.slides != this.slides[this.activeSlide]);
        // const result = this.slides.filter(this.slides => this.slides [i]!= this.slides[this.activeSlide]);

        // this.slides[this.activeSlide].style = `transform: scale(1.05);
        //                                     transform : translateY(2%)`;
        // this.sliderLine.this.slides[this.activeSlide].style.transform = `translateY(-10%)`;
        // this.slides[this.activeSlide].children.style.width = `100%`;

        // this.slides[this.activeSlide].style = ` transform: translate${this.dir}(0px) scale(0.5);
        //                                         opacity: 1;
        //                                         ${this.timeMove}ms`;
        // this.slides[this.activeSlide].style.opacity = `1`;
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'

    }
}

const slider = new SLIDER({
    slider: '.header-slider',
    direction: 'X',
    time: 1000,
    autoplay: false
})
// const slider2 = new SLIDER({
//     slider: '.',
//     direction: 'X',
//     time: 1000,
//     autoplay: false
// })

const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const headerNavContainer = document.querySelector('.header-nav-container');


burger.onclick = () => {
    burger.classList.toggle("active");
    headerNavContainer.classList.toggle('activePopup');
}

const checkbox = document.getElementById('myonoffswitch');
const onoffswitch = document.getElementById('onoffswitch');
const switchBtn = document.querySelector('.switch-btn');

const headerNavUserColor = document.querySelector('.header-nav-user-color');
const headerNavUserItem = document.querySelector('.header-nav-user__item');
const headerNavUserItemIcon = document.querySelector('.header-nav-user__item-icon');
const foodBlockContentText = document.querySelectorAll('.food-block-content-text');

switchBtn.onclick = () => {
    switchBtn.classList.toggle('switch-on');
    if (switchBtn.classList.contains('switch-on')) {
        body.classList.add('green');
        body.classList.remove('red');
        foodBlockContentText.forEach(element => {
            element.classList.remove('red-bg-opacity');
            element.classList.add('green-bg-opacity');
        });
    }
    else {
        body.classList.add('red');
        body.classList.remove('green');
        foodBlockContentText.forEach(element => {
            element.classList.remove('green-bg-opacity');
            element.classList.add('red-bg-opacity');
        });

    }
}
headerNavUserItem.onclick = () => {
    headerNavUserColor.classList.toggle('is-hidden');
    headerNavUserItemIcon.classList.toggle('is-rotated');
    // headerNavUserItemIcon.style = 
    // headerNavUserColor.style= `transition: 1s`;
}
const patternData = /\D/g;

document.getElementById( 'people' ).oninput = function(e) {

    let cursor = this.selectionStart, pattern = patternData;

      if ( this.value.match( pattern ) ) {

        // alert( 'Только цифры' );

        this.value = this.value.replace( pattern, '' );

        cursor--;

      }

      this.selectionEnd = cursor;

  }

//# sourceMappingURL=main.js.map
