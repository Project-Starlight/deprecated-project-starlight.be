function navigateWithHidden(queryToBeHidden,queryToBeShown,e){
    e.preventDefault();
    document.querySelector(queryToBeHidden).classList.add("hidden");
    document.querySelector(queryToBeShown).classList.remove("hidden");
}