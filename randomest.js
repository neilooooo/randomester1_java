function validate(e){
    e.preventDefault()
    const email=document.getElementById("email").value
    const msgbox=document.getElementById("msg").value
    const age=document.getElementById("age").value
    const password=document.getElementById("password").value
    var msg=""
    if(email===""){
        msg="enter your random email"
    }
    else if(password===""){
        msg="enter your random password"
    }
    else if(age===""){
        msg="enter your random age"
    }
    else{
        msg="random login successful"
    }
    msgbox.innertext=msg
}