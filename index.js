
// prompt("Hello");
// var phrase = "hello world";

// document.write(phrase.indexOf("l"));
// //alert("請連結bsc網路");
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

function connectWallet() {
    
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      var btnConnect = document.getElementById("connect-btn");
      btnConnect.innerText = "Wallet Connected";

    } else {
      alert("Please install Metamask");
    }
}