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

if (localStorage.getItem("comment-draft_af66c166630dea36556b924b97545e7e-rte") && localStorage.getItem("NameForm")) {
    document.getElementById("comment").innerText = localStorage.getItem("comment-draft_af66c166630dea36556b924b97545e7e-rte");
    document.getElementById("name").innerText = localStorage.getItem("NameForm");
    document.getElementById('comment__block').style.display = "block";
}

function SendComment() {
    var textAlert = document.getElementById("comment-draft_af66c166630dea36556b924b97545e7e-rte").value;
    var textName = document.getElementById("NameForm").value;

    localStorage.setItem("comment-draft_af66c166630dea36556b924b97545e7e-rte", textAlert);
    localStorage.setItem("NameForm", textName);


    document.getElementById("comment").innerHTML = document.getElementById("comment-draft_af66c166630dea36556b924b97545e7e-rte").value;
    document.getElementById("name").innerHTML = document.getElementById("NameForm").value;
    document.getElementById('comment__block').style.display = "block";
    var textAlert = document.getElementById("comment-draft_af66c166630dea36556b924b97545e7e-rte").value = "";
    var textName = document.getElementById("NameForm").value = "";
}


