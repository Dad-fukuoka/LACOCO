// ************************* swiper 脱毛の流れ
const flow_Swiper = new Swiper('.flow', {
	loop: true,
	speed: 800,
	slidesPerView: 1,
	centeredSlides: true,
	autoplay: { // 自動再生
		delay: 1000, // 1秒後に次のスライド
		disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});




// ************************* #goTopを付与したフローティングボタンの挙動を設定。f_lastクラスを付与した要素を越えると非表示になる。 *************************
$(function (){
    $('#goTop').hide(); //最初は隠しておく。CSSで隠してもオッケー
        $(window).on("scroll", function () {
        let topBtn = $('#goTop'); // ボタンを指定
        if( $(this).scrollTop() < 1000 ){//スクロールした高さが０から1000pxまでの高さ
        topBtn.fadeOut();
        }else{
        if($(this).scrollTop() < $(".f_last").offset().top){//スクロールした高さが０から.s12までの高さ
        topBtn.fadeIn();
        }else{
        topBtn.fadeOut();
        }
        }
    });
});