document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('SETUP').innerText = "awdawd"
})

var DidCount = false
document.getElementById("page").onscroll = function() {
    if(DidCount == false){
        DidCount = true
        document.getElementById('SETUP').innerHTML = '<b id="USERS" class="counter" data-duration="2500">1500000</b>+ users use our services/bots?</p>'
        COUNT()
        setTimeout(() => {
            REPLACE()
        }, 2500);

    }
};

function REPLACE(){
    document.getElementById('SETUP').innerHTML = '<b>1.500.000</b>+ users use our services/bots?</p>'
}