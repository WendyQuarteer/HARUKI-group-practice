const delay = ms => new Promise(res => setTimeout(res, ms));
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
function Clicked_Wendy() {
    $counterBadge = document.getElementById("counterBadge1");
    $counterBadge.textContent = parseInt($counterBadge.textContent);
    if ($counterBadge.textContent<=4){
        $counterBadge.textContent = parseInt($counterBadge.textContent)+1;
    } else {
        window.location.href = '/index.html';
    }
    console.log(document.getElementById('h5_Wenke').textContent + ": " + $counterBadge.textContent);
}
function  Clicked_Victor() {
    $counterBadge2 = document.getElementById('counterBadge2');
    $counterBadge2.textContent = parseInt($counterBadge2.textContent);
    if ($counterBadge2.textContent>=5){
        $counterBadge2.textContent = parseInt($counterBadge2.textContent)-5;
    } else {
        window.location.href = "/mindandbody.html"
    }
    console.log(document.getElementById('h5_victor').textContent + ": " + $counterBadge2.textContent);
}

function  Clicked_Shiva() {
    $counterBadge3 = document.getElementById('counterBadge3');
    for (let i=5;i>0;i--) {
        wait(300);
        $counterBadge3.innerText = parseInt(i);
    }
    if ($counterBadge3.textContent == 1){
        wait(1500);
        window.location.href = '/contact.html';
    }
    console.log(document.getElementById('h5_Shiva').textContent + ": " + $counterBadge3.textContent);
}
