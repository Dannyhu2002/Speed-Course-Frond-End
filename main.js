let contactlink = document.getElementById("About");
contactlink.addEventListener("click", clickHandler);

function clickHandler(e){
    console.log("test");
    e.preventDefault();
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 1000
    });
}
