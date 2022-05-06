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
            imageIndex: 0
        },
        methods: {
            nextImage: function() {
                this.imageIndex ++;
            },
            prevImage: function() {
                this.imageIndex --;
            }
        }
    }
);