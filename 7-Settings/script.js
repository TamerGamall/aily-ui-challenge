let theme = true;
$(".btn").on("click", function () {
    $(".page").toggleClass("bg-dark");
    $(".btn").toggleClass("bg-light");
    $(".btn").toggleClass("text-dark");
    $("p").toggleClass("text-light");
    $("h1").toggleClass("text-light");
    if (theme) {
        $(".btn").html(`<i class="fa-solid fa-sun me-2"></i> light Mode`);
        theme = false
    } else {
        $(".btn").html(`<i class="fa-solid fa-moon me-2"></i> Dark Mode`);
        theme = true
    }

});