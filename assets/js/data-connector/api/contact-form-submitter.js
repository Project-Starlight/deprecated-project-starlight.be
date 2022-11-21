"use strict";
function postContactForm2(){
    console.log(getBodyForm());
    fetchFromServer(_config.apiURL + "/message","POST",getBodyForm())
        .then(()=>{
            //TODO: goodSubmitHandler();
            console.log("submitted woppa!")
        })
        .catch(error => {
            console.log(error);
            //TODO: errorHandler2(error);
        })
}
