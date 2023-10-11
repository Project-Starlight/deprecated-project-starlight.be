class carousel {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        this.slides = document.querySelectorAll(`${selector} .slider-single`);
        this.slideTotal = this.slides.length - 1;
        this.slideCurrent = -1;

        this.repeat = options.repeat || false;
        this.noArrows = options.noArrows || false;
        this.noBullets = options.noBullets || false;

        this.slideInitial();
    }

    initBullets() {
        if (this.noBullets) {
            return;
        }
        const bulletContainer = document.createElement('div');
        bulletContainer.classList.add('bullet-container')
        this.slides.forEach((elem, i) => {
            const bullet = document.createElement('div');
            bullet.classList.add('bullet')
            bullet.id = `bullet-index-${i}`
            bullet.addEventListener('click', () => {
                this.goToIndexSlide(i);
            })
            bulletContainer.appendChild(bullet);
            elem.classList.add('proactivede');
        })
        this.container.appendChild(bulletContainer);
    }


    initArrows() {
        if (this.noArrows) {
            return;
        }
        const leftArrow = document.createElement('a')
        const iLeft = document.createElement('i');
        iLeft.classList.add('fa')
        iLeft.classList.add('fa-arrow-left')
        leftArrow.classList.add('slider-left')
        leftArrow.appendChild(iLeft)
        leftArrow.addEventListener('click', () => {
            this.slideLeft();
        })
        const rightArrow = document.createElement('a')
        const iRight = document.createElement('i');
        iRight.classList.add('fa')
        iRight.classList.add('fa-arrow-right')
        rightArrow.classList.add('slider-right')
        rightArrow.appendChild(iRight)
        rightArrow.addEventListener('click', () => {
            this.slideRight();
        })
        this.container.appendChild(leftArrow);
        this.container.appendChild(rightArrow);
    }


    slideInitial() {
        this.initBullets();
        this.initArrows();
        setTimeout(() => {
            this.slideRight();
        }, 500);
    }


    updateBullet() {
        if (!this.noBullets) {
            document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
                elem.classList.remove('active');
                if (i === this.slideCurrent) {
                    elem.classList.add('active');
                }
            })
        }
        this.checkRepeat();
    }


    checkRepeat() {
        if (!this.repeat) {
            if (this.slideCurrent === this.slides.length - 1) {
                this.slides[0].classList.add('not-visible');
                this.slides[this.slides.length - 1].classList.remove('not-visible');
                if (!this.noArrows) {
                    document.querySelector('.slider-right').classList.add('not-visible')
                    document.querySelector('.slider-left').classList.remove('not-visible')
                }
            } else if (this.slideCurrent === 0) {
                this.slides[this.slides.length - 1].classList.add('not-visible');
                this.slides[0].classList.remove('not-visible');
                if (!this.noArrows) {
                    document.querySelector('.slider-left').classList.add('not-visible')
                    document.querySelector('.slider-right').classList.remove('not-visible')
                }
            } else {
                this.slides[this.slides.length - 1].classList.remove('not-visible');
                this.slides[0].classList.remove('not-visible');
                if (!this.noArrows) {
                    document.querySelector('.slider-left').classList.remove('not-visible')
                    document.querySelector('.slider-right').classList.remove('not-visible')
                }
            }
        }
    }


    slideRight() {
        if (this.slideCurrent < this.slideTotal) {
            this.slideCurrent++;
        } else {
            this.slideCurrent = 0;
        }
        let preactiveSlide;
        if (this.slideCurrent > 0) {
            preactiveSlide = this.slides[this.slideCurrent - 1];
        } else {
            preactiveSlide = this.slides[this.slideTotal];
        }
        const activeSlide = this.slides[this.slideCurrent];
        let proactiveSlide;
        if (this.slideCurrent < this.slideTotal) {
            proactiveSlide = this.slides[this.slideCurrent + 1];
        } else {
            proactiveSlide = this.slides[0];

        }
        this.slides.forEach((elem) => {
            let thisSlide = elem;
            if (thisSlide.classList.contains('preactivede')) {
                thisSlide.classList.remove('preactivede');
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('preactive')) {
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.remove('proactivede');
                thisSlide.classList.add('preactivede');
            }
        });
        preactiveSlide.classList.remove('preactivede');
        preactiveSlide.classList.remove('active');
        preactiveSlide.classList.remove('proactive');
        preactiveSlide.classList.remove('proactivede');
        preactiveSlide.classList.add('preactive');

        activeSlide.classList.remove('preactivede');
        activeSlide.classList.remove('preactive');
        activeSlide.classList.remove('proactive');
        activeSlide.classList.remove('proactivede');
        activeSlide.classList.add('active');

        proactiveSlide.classList.remove('preactivede');
        proactiveSlide.classList.remove('preactive');
        proactiveSlide.classList.remove('active');
        proactiveSlide.classList.remove('proactivede');
        proactiveSlide.classList.add('proactive');

        this.updateBullet();
    }


    slideLeft() {
        if (this.slideCurrent > 0) {
            this.slideCurrent--;
        } else {
            this.slideCurrent = this.slideTotal;
        }
        let proactiveSlide;
        if (this.slideCurrent < this.slideTotal) {
            proactiveSlide = this.slides[this.slideCurrent + 1];
        } else {
            proactiveSlide = this.slides[0];
        }
        const activeSlide = this.slides[this.slideCurrent];
        let preactiveSlide;
        if (this.slideCurrent > 0) {
            preactiveSlide = this.slides[this.slideCurrent - 1];
        } else {
            preactiveSlide = this.slides[this.slideTotal];
        }
        this.slides.forEach((elem) => {
            const thisSlide = elem;
            if (thisSlide.classList.contains('proactive')) {
                thisSlide.classList.remove('preactivede');
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('proactivede')) {
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.remove('proactivede');
                thisSlide.classList.add('preactivede');
            }
        });

        preactiveSlide.classList.remove('preactivede');
        preactiveSlide.classList.remove('active');
        preactiveSlide.classList.remove('proactive');
        preactiveSlide.classList.remove('proactivede');
        preactiveSlide.classList.add('preactive');

        activeSlide.classList.remove('preactivede');
        activeSlide.classList.remove('preactive');
        activeSlide.classList.remove('proactive');
        activeSlide.classList.remove('proactivede');
        activeSlide.classList.add('active');

        proactiveSlide.classList.remove('preactivede');
        proactiveSlide.classList.remove('preactive');
        proactiveSlide.classList.remove('active');
        proactiveSlide.classList.remove('proactivede');
        proactiveSlide.classList.add('proactive');

        this.updateBullet();
    }


    goToIndexSlide(index) {
        const sliding = (this.slideCurrent > index) ? () => this.slideRight() : () => this.slideLeft();
        while (this.slideCurrent !== index) {
            sliding();
        }
    }

}