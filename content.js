document.addEventListener("DOMContentLoaded", function() {
    var roster1 = document.querySelectorAll(".roster1");
    console.log("TEST123");
    var roster2 = document.querySelectorAll(".roster2");
    for (var i = 0; i < roster1.length; i++) {
        var data = roster1[i].querySelector(".sc-cckZPw.sc-hniSEw.emCWny.efPzHo").innerHTML;
        roster2[i].innerHTML = data;
        console.log("Copied Data: " + data);
    }
});
