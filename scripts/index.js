document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('SETUP').innerText = "awdawd"
})

var DidCount = false
document.getElementById("page").onscroll = function() {
    if(DidCount == false){
        DidCount = true
        document.getElementById('SETUP').innerHTML = '<b id="USERS" class="counter" data-duration="1750">2000000</b>+ users use our services/bots?</p>'
        COUNT()
        setTimeout(() => {
            REPLACE()
        }, 1750);

    }
};

function REPLACE(){
    document.getElementById('SETUP').innerHTML = '<b>2,000,000</b>+ users use our services/bots?</p>'
}