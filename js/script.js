Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            sliderImages: [
                {
                    locationName: 'Svezia',
                    imageUrl: "img/01.jpg",
                    imageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    locationName: 'Svizzera',
                    imageUrl: 'img/02.jpg',
                    imageText: 'Lorem ipsum',
                },
                {
                    locationName: 'Gran Bretagna',
                    imageUrl: 'img/03.jpg',
                    imageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    locationName: 'Germania',
                    imageUrl: 'img/04.jpg',
                    imageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    locationName: 'Paradise',
                    imageUrl: 'img/05.jpg',
                    imageText: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
            ],
            imageIndex: 0,
        },
        methods: {
            // spoasta all'immagine successiva
            nextImage: function() {
                if (this.imageIndex === this.sliderImages.length -1) {
                    this.imageIndex = 0;
                } else {
                    this.imageIndex ++;
                }
                this.resetTimer();
            },
            // sposta all'immagine precedente
            prevImage: function() {
                if (this.imageIndex === 0) {
                    this.imageIndex = this.sliderImages.length -1;
                } else {
                    this.imageIndex --;
                }
                this.resetTimer();
            },
            // al click su un'immagine nel thumbnails posiziona la classe active su quella cliccata
            clickOnThumb: function (index) {
                this.imageIndex = index;
            },
            // on mouse over ferma il timer dell'autoslide e lo risetta a zero per evitare salti strani
            stopTimer: function() {
                clearInterval(this.timer);
                this.Timer = null;
            },
            // on mouse leave fa ripartire il timer dell'autoslide
            restartTimer: function() {
                this.timer = setInterval(this.nextImage, 3000);
            },
            // raggruppa stoTimer e restartTimer per applicarli a nextImage e prevImage ed evitare anche qui salti strani
            resetTimer() {
                this.stopTimer();
                this.restartTimer();
            }
        },
        created () {
            // se fai cosi NON devi mettere le () dopo nextImage!
            this.restartTimer();
            // altra sintassi
            // setInterval(() => {
            //     this.nextImage();
            // }, 3000);
        }
    }
);