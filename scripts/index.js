let clubsDidOpen = false;

function openClubs() {

    let element = document.getElementById("clubs");
    let icon = document.getElementById("drop-icon");

    if (!clubsDidOpen) {
        element.innerHTML = "<a href='./pages/csclub.html'>&nbsp;&nbsp;&nbsp;&nbsp;CS Club</a><br><a href='./pages/cscompteam.html'>&nbsp;&nbsp;&nbsp;&nbsp;CS Competitions</a>";
        icon.innerHTML = "<i class='fa fa-chevron-up' aria-hidden='true'></i>";
    } else {
        element.innerHTML = "";
        icon.innerHTML = "<i class='fa fa-chevron-down' aria-hidden='true'></i>";
    }

    clubsDidOpen = !clubsDidOpen;

}

function openClubsPages() {

    let element = document.getElementById("clubs");
    let icon = document.getElementById("drop-icon");

    if (!clubsDidOpen) {
        element.innerHTML = "<a href='../pages/csclub.html'>&nbsp;&nbsp;&nbsp;&nbsp;CS Club</a><br><a href='../pages/cscompteam.html'>&nbsp;&nbsp;&nbsp;&nbsp;CS Competitions</a>";
        icon.innerHTML = "<i class='fa fa-chevron-up' aria-hidden='true'></i>";
    } else {
        element.innerHTML = "";
        icon.innerHTML = "<i class='fa fa-chevron-down' aria-hidden='true'></i>";
    }

    clubsDidOpen = !clubsDidOpen;

}