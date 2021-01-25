if(window.training) {
    window.training ={};
}
var training=window.training;


(function ($){
    training.global={
        home:function (){
            var mainBanner = $(".main-banner");

            mainBanner.slick({
                dots:true,
                infinite:false,
                speed: 300,
                slidesToShow: 1,
                arrow: true,
                adaptiveHeight: true
            });
        },

        init:function (){
            var self = training.global;
            _self.home();
        }
    };
    training.global.init();


    }



)(jquery);

