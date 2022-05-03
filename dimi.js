/* HCARD:
* Function created to catch the mouse hovering over each card.
*       You use it by passing two variables to it and executing it.
*       Example: hCard("dimi", "dhover")
*/
function hCard($user, $element){
    let $hov = document.getElementById($element);
    $hov.textContent = parseInt($hov.textContent) + 1;
    console.log("Bodycount in tha house " + $user + "; " + $hov.textContent);
}
function hoverCardWenke(){hCard("wenke", "whover")}
function hoverCardVictor(){hCard("victor", "vhover")}
function hoverCardShiva(){hCard("shiva", "shover")}
function hoverCardDimi(){hCard("dimi", "dhover")}

