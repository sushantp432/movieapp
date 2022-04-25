// Store the wallet amount to your local storage with key "amount"
// document.querySelector("amount").addEventListener("amount")

let amt= []
add=()=>{
    document.querySelector("#wallet").innerHTML=null;
    let amount=document.querySelector("#amount").value;

    amt.push(amount);
    localStorage.setItem("amount",JSON.stringify(amt));

    var total = 0;
    for(var i=0;i<amt.length;i++){
        total+=+amt[i];
    }
    console.log(total);
    document.querySelector("#wallet").append(total);
    document.location.reload;
    };
    