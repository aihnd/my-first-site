$(function () {
    // ハンバーガーの動き
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu').toggleClass('open');
        $('nav').stop().slideToggle();
    });

    // リンク・外部をクリックでメニューを閉じる
    $('nav li').on('click', function () {
        if (window.innerWidth > 768) {
            $('.hamburger-menu').removeClass('open');
            $('nav').stop.slideUp();
        }
    });
    // 768px以上でナビゲーションの表示状態を戻す
    $(window).on('resize', function () {
        if (window.innerWidth > 768) {
            $('nav').removeAttr('style');
            $('.hamburger-menu').removeClass('open');
        }
    });

    // フォームボタン開閉
    $('button.event-btns').on('click', function () {

        const $btn = $(this);
        const isOpen = $btn.toggleClass('is-open').hasClass('is-open');
const $form = $btn.next('#contact .text-box');
        $btn.find('p').text(isOpen ? 'CLOSE' : 'Forms OPEN');
        $btn.attr('aria-expanded', isOpen);

        // フォームを開閉する
        $form.slideToggle(400);
    });

    // スクロールでinview
    $(window).on('scroll', function () {

        $('.js-bounceIn:not(.active),.js-inview-center:not(.active),.js-inview-enter:not(.active)').each(function () {

            const elementTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            // 要素の上端が画面に入ったら発動
            if ($(this).hasClass('.js-inview-enter')) {
                if (scrollTop + windowHeight >= elementTop) {
                    $(this).addClass('active');
                }
                // それ以外は画面中央に達したら
            } else {
                if (scrollTop + windowHeight / 2 >= elementTop) {
                    $(this).addClass('active');
                }
            }
        });
    });

    // リンクボタンの色変化
    $('.fadeIn').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        }
    });
});

// ---------------------
// フェードインの設定
// ---------------------

// トップページ・キービジュアル
$(function () {
    setTimeout(function () {
        $('.keyvisual img,#event .text-box,.block-wrap').addClass('active');
    }, 1000);

    setTimeout(function () {
        $('.catchcopy p,.contact-icon').addClass('active');
    }, 2000);
    setTimeout(function () {
        $('.nanika').addClass('active');
    }, 2500);

    setTimeout(function () {
        $('.scroll-down,.bounce-header').addClass('active');
    }, 3000);

    setTimeout(function () {
        $('#event .scroll-down').addClass('active');
    }, 2000);

});

