/*
* Function created to catch the mouse hovering over each card.
*       You use it by passing two variables to it and executing it.
*       Example: hCard("dimi", "dhover")
*/
function hCard($user, $element){
    console.log("Hover functiop works for " + $user);
    let $hov = document.getElementById($element);
    $hov.textContent = parseInt($hov.textContent) + 1;
    $hov = null;
}
function hoverCardWenke(){hCard("wenke", "whover")}
function hoverCardVictor(){hCard("victor", "vhover")}
function hoverCardShiva(){hCard("shiva", "shover")}
function hoverCardDimi(){hCard("dimi", "dhover")}

