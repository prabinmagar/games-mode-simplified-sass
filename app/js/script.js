$(document).ready(function(){
    $(".sidenav-toggle-btn").click(() => {
        $('.sidenav-menu').toggleClass('sidenav-menu-hide');
        $('.main-content').toggleClass('flush-main-content');
    })
})