
// prompt("Hello");
// var phrase = "hello world";

// document.write(phrase.indexOf("l"));
// //alert("請連結bsc網路");
function handle_click() {
    alert("你按啥");
}

var btn = document.getElementById("btn2");
btn.addEventListener("click", function(){
    alert("別按了");
    this.innerText = "速度離開";
})

function requestAccount() {
    console.log('Requesting account...');

    //Check if Metamask exist

    if(window.ethereum){
        console.log('exist');
    } else {
        console.log('Not exist');
    }
}

