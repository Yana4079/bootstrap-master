// $(document).ready(function () {
    $(".fa-chevron-down").click(function () { 
        $(".submenu").click(); 
    });
    $(".submenu").click(function (e) { 
        e.toggle(); 
    });
// });

$('.toggle_menu').click(function(){
    $(this).find('.submenu').toggleClass('hide');
})




function HideLeftMenu() {
    document.getElementById('close').style.display = "none";
    console.log("Привет");
}

function OpenLeftMenu() {
    document.getElementById('close').style.display = "block";
    console.log("Привет");
}



