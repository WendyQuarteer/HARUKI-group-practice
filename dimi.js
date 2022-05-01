
function Clicked_Wendy() {
    $counterBadge = document.getElementById("counterBadge1");
    console.log("Wendy: " + $counterBadge.textContent);
    $counterBadge.textContent = parseInt($counterBadge.textContent);
    if ($counterBadge.textContent<10){
        $counterBadge.textContent = parseInt($counterBadge.textContent)+1;
    } else {
        window.location.href = '/index.html';
    };

};
function  Clicked_Victor() {
    $counterBadge2 = document.getElementById('counterBadge2');
    console.log("Victor: " + $counterBadge2.textContent);
    $counterBadge2.textContent = parseInt($counterBadge2.textContent);
    if ($counterBadge2.textContent<15){
        $counterBadge2.textContent = parseInt($counterBadge2.textContent)+1;
    } else {
        // window.location.href = '/mindandbody.html';
        window.location.href = "/mindandbody.html"
    }

}

function  Clicked_Shiva() {
    $counterBadge3 = document.getElementById('counterBadge3');
    console.log("Shiva: " + $counterBadge3.textContent);
    $counterBadge3.textContent = parseInt($counterBadge3.textContent);
    if ($counterBadge3.textContent<13){
        $counterBadge3.textContent = parseInt($counterBadge3.textContent)+1;
    } else {
        // window.location.href = '/contact.html';
        window.location.href = '/contact.html';
    }

}
