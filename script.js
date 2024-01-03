$(document).ready(function() {

    // showing the menu
    $('.main-nav .navbar-nav .nav-item:nth-child(1)').on('click', function() {
        console.log(this);
        const menu = $('.menu-div');

        $('.menu-div').toggleClass('show-menu');
        $('.submenu-div').toggleClass('show-menu');
        $('.menu-item').removeClass('active');
        $('.menu-item:nth-child(1)').addClass('active');

        if (menu.hasClass('show-menu')) {
            $(window).on('scroll', hideMenuWhenScrolling);
        } else {
            $(window).off('scroll', hideMenuWhenScrolling);
        }
    });


    $('.menu-ul .menu-item a').on('click', function() {
        console.log(this);
        $('.menu-item').removeClass('active');
        $(this).parent('.menu-item').addClass('active');

        if ($(this).text().indexOf('Coffee') !== -1) {
            $('.coffee').removeClass('hide-menu');
            console.log($('.coffee'));
            $('.snacks').addClass('hide-menu');
            $('.cakes').addClass('hide-menu');
        } else if ($(this).text().indexOf('Snacks') !== -1){
            $('.snacks').removeClass('hide-menu');
            $('.coffee').addClass('hide-menu');
            $('.cakes').addClass('hide-menu');
        } else if ($(this).text().indexOf('Cakes') !== -1){
            $('.cakes').removeClass('hide-menu');
            $('.coffee').addClass('hide-menu');
            $('.snacks').addClass('hide-menu');
        }

    });


    // mouse enter
    $('.submenu-ul .submenu-item').on('mouseenter', function() {
        $('.submenu-item').removeClass('submenu-active');
        $(this).addClass('submenu-active');
    });
    
    $('.submenu-ul').on('mouseleave', function() {
        $('.submenu-item').removeClass('submenu-active'); 
    });

    //hide navabr when scrolling
    function hideMenuWhenScrolling() {
        $('.menu-div').removeClass('show-menu');
        $('.submenu-div').removeClass('show-menu');
        $(window).off('scroll', hideMenuWhenScrolling);
    }


    // slider
    const width = $('.submenu-item').outerWidth();
    let index = 0;
    
    $('.right-arrow').on('click', function() {
        if (index < $('.slide').length - 1) {
            index+=4;
            updateSlider();
        }
    });
    
    $('.left-arrow').on('click', function() {
        if (index > 0) {
            index-=4;
            updateSlider();
        }
    });
    
    function updateSlider() {
        const x = -index * width;
        $('.slider-container').css('transform', 'translateX(' + x + 'px)');
    }

    if ($(window).width() < 1000) {
        $('.menu-link').attr('href', 'menu1.html');
        console.log("less")
    }



    // menu1 script
    const body = $('.menu-body');
    const slides = $('.menu-body .slide');
    const leftBtn = $('.menu-body .menu-left-arrow');
    const rightBtn = $('.menu-body .menu-right-arrow');

    let activeSlide = 0;

    rightBtn.on('click', function () {
        activeSlide++;

        if (activeSlide > slides.length - 1) {
            activeSlide = 0;
        }

        setBgToBody();
        setActiveSlide();
        changeLink();
    });

    leftBtn.on('click', function () {
        activeSlide--;

        if (activeSlide < 0) {
            activeSlide = slides.length - 1;
        }

        setBgToBody();
        setActiveSlide();
        changeLink();
    });

    function setBgToBody() {
        body.css('background-image', slides[activeSlide].style.backgroundImage);
    }

    function setActiveSlide() {
        slides.removeClass('active');
        slides.eq(activeSlide).addClass('active');
    }
    function changeLink() {
        if(activeSlide == 0){
            $('.menu1-text .menu1-a').text("Coffee & Drinks");
            $('.menu1-text .menu1-a').attr("href", "menu1.html");
            $('.menu-slider-link').attr("href", "menu1.html");
        }
        else if(activeSlide == 1){
            $('.menu1-text .menu1-a').text("Sandwiches & Snacks");
            $('.menu1-text .menu1-a').attr("href", "menu2.html");
            $('.menu-slider-link').attr("href", "menu2.html");

        }
        else{
            $('.menu1-text .menu1-a').text("Muffins & Cakes");
            $('.menu1-text .menu1-a').attr("href", "menu3.html");
            $('.menu-slider-link').attr("href", "menu3.html");

        }
    }
    setBgToBody();


    var drinksData = [
        { name: 'Coffee', price: '50 TL', image: 'images/Coffee.png' },
        { name: 'Latte', price: '60 TL', image: 'images/Latte.png' },
        { name: 'HotChocolate', price: '55 TL', image: 'images/HotChocolate.png' },
        { name: 'MilkShake', price: '70 TL', image: 'images/MilkShake.png' },
        { name: 'Tea', price: '20 TL', image: 'images/Tea.png' },
        { name: 'Matcha', price: '25 TL', image: 'images/Matcha.png' },
        { name: 'Orange Juice', price: '90 TL', image: 'images/Orange.png' },
        { name: 'Limonade', price: '70 TL', image: 'images/Limonade.png' },
    ];

    function generateMenuItems(data) {
        var menuContainer = $('#drinkMenu');

        menuContainer.empty();

        $.each(data, function(index, drink) {
            var menuItem = $('<div class="menu1-item"></div>');
            menuItem.append('<img src="' + drink.image + '" alt="' + drink.name + '">');
            menuItem.append('<h3>' + drink.name + '</h3>');
            menuItem.append('<p>' + drink.price + '</p>');

            menuContainer.append(menuItem);
        });
    }

    generateMenuItems(drinksData);




// ------------------add your script here------------------

// function changeLink() {
//     if(activeSlide == 0){
//         $('.menu2-text .menu2-a').text("Coffee & Drinks");
//         $('.menu2-text .menu2-a').attr("href", "menu2.html");
//         $('.menu-slider-link').attr("href", "menu2.html");
//     }
//     else if(activeSlide == 1){
//         $('.menu2-text .menu2-a').text("Sandwiches & Snacks");
//         $('.menu2-text .menu2-a').attr("href", "menu2.html");
//         $('.menu-slider-link').attr("href", "menu2.html");

//     }
//     else{
//         $('.menu3-text .menu3-a').text("Muffins & Cakes");
//         $('.menu3-text .menu3-a').attr("href", "menu3.html");
//         $('.menu-slider-link').attr("href", "menu3.html");

//     }
// }


// var mealData = [
//     { name: 'Döner', price: '75 TL', image: 'images/doner.png' },
//     { name: 'Falafel', price: '70 TL', image: 'images/falafel.png' },
//     { name: 'Fries', price: '50 TL', image: 'images/fries.png' },
//     { name: 'Sandwich', price: '50 TL', image: 'images/sandwich.png' },
//     { name: 'Meat Balls', price: '25 TL', image: 'images/meatballs.png' },
//     { name: 'Hot Dog', price: '30 TL', image: 'images/hotdog.png' },
//     { name: 'Wet Burger', price: '30 TL', image: 'images/wetburger.png' },
//     { name: 'Toast', price: '50 TL', image: 'images/toast.png' }
// ];

// generateMenuItems(mealData, 'dsandwichMenu');


// function generateMenuItems(data, menuContainerId) {
// var menuContainer = $('#' + menuContainerId);

// menuContainer.empty();

// $.each(data, function(index, drink) {
//     var menuItem = $('<div class="menu1-item"></div>');
//     menuItem.append('<img src="' + drink.image + '" alt="' + drink.name + '">');
//     menuItem.append('<h3>' + drink.name + '</h3>');
//     menuItem.append('<p>' + drink.price + '</p>');

//     menuContainer.append(menuItem);
// });
// }

// function generateMenuItems(data, menuContainerId) {
//     var menuContainer = $('#' + menuContainerId);

//     menuContainer.empty();

//     $.each(data, function(index, drink) {
//         var menuItem = $('<div class="menu1-item"></div>');
//         menuItem.append('<img src="' + drink.image + '" alt="' + drink.name + '">');
//         menuItem.append('<h3>' + drink.name + '</h3>');
//         menuItem.append('<p>' + drink.price + '</p>');

//         menuContainer.append(menuItem);
//     });
// }



// var muffinCakeData = [
// { name: 'Apple Pie', price: '50 TL', image: 'images/apple.png' },
// { name: 'Pancakes', price: '45 TL', image: 'images/pancakes.png' },
// { name: 'Muffin', price: '40 TL', image: 'images/muffin.png' },
// { name: 'Cake', price: '55 TL', image: 'images/cake.png' }
// ];

// generateMenuItems(muffinCakeData, 'dCakeMenu');

// function generateMenuItems(data, menuContainerId) {
// var menuContainer = $('#' + menuContainerId);

// menuContainer.empty();

// $.each(data, function(index, drink) {
//     var menuItem = $('<div class="menu1-item"></div>');
//     menuItem.append('<img src="' + drink.image + '" alt="' + drink.name + '">');
//     menuItem.append('<h3>' + drink.name + '</h3>');
//     menuItem.append('<p>' + drink.price + '</p>');

//     menuContainer.append(menuItem);
// });
// }

// function generateMenuItems(data, menuContainerId) {
//     var menuContainer = $('#' + menuContainerId);

//     menuContainer.empty();

//     $.each(data, function(index, drink) {
//         var menuItem = $('<div class="menu1-item"></div>');
//         menuItem.append('<img src="' + drink.image + '" alt="' + drink.name + '">');
//         menuItem.append('<h3>' + drink.name + '</h3>');
//         menuItem.append('<p>' + drink.price + '</p>');

//         menuContainer.append(menuItem);
//     });
// }


















});