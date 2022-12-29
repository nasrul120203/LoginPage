const container = document.querySelector(".container"),
 pwShowHide = document.querySelector(".showHidenpw");
 pwFields = document.querySelector(".password");



 // js code to show/hide password and change icon 
 pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwfield =>{
            if(pwfield.type ==="password"){
                pwfield.type = "text";
            }else{
                pwfield.type = "password";
            }
        })
    })
 })
