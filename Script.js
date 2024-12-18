function withdraw_click(){
    const withdraw = document.getElementById('withdraw').value;
    const withdraw_password = document.getElementById('withdraw_password').value;
    var withdraw_amount = document.getElementById('withdraw_amount').value;
    
    const withdraws = "9345785592";
    const withdraw_passwords = "2004";
    let total =20000;
    
    if(withdraw == withdraws && withdraw_password == withdraw_passwords){
        if(withdraw_amount <= 9000){
            total =parseInt(total)-parseInt(withdraw_amount)
            alert(`Amount is Withdraw ${total}
                Balance amount is  ${withdraw_amount}
                `);
        }
        else{
            alert("Limited amount is only 9000")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}
function withdraw_cancel(){
    location.reload();
}


// deposit

function deposite_click(){
    const deposite = document.getElementById('deposite').value;
    const deposite_password = document.getElementById('deposite_password').value;
    var deposite_amount = document.getElementById('deposite_amount').value;

    const deposites = "9345785592";
    const deposite_passwords = "2004";
    let total = 20000;

    if(deposite == deposites && deposite_password == deposite_passwords){
        if(deposite_amount <= 10000){
            total = parseInt( total)+parseInt( deposite_amount );
            alert(`Amount is deposit ${total}`);
        }
        else{
            alert("Limited amount is only 10000 deposited")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}

// create

function create(){
    var create_name = document.getElementById('create_name').value;
    var create_mail = document.getElementById('create_mail').value;
    var create_password = document.getElementById('create_password').value;

    // var details = document.getElementById('data_details');
    // // details.style.display = "block";
    // var name =document.getElementById("name").innerHTML =` Name : ${create_name}`;
    // var name =document.getElementById("email").innerHTML =` email : ${create_mail}`;
    // var name =document.getElementById("password").innerHTML =` password : ${create_password}`;
    
    alert("Account create successfully .....")
    
    
    
}

function another(){
    location.reload();
}


// balance 

function balance_click(){
    const balance = document.getElementById('balance').value;
    const balance_password = document.getElementById('balance_password').value;

    const balances = "9345785592";
    const balance_passwords = "2004";
    let total = 20000;
    if(balance == balances && balance_password == balance_passwords){
            alert(`Bank balance ${total}`);
    }
    else{
        alert("Invalid Account Number or Password");
    }

}