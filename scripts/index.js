document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('SETUP').innerText = "5500000"
})

var DidCount = false
document.getElementById("page").onscroll = function() {
    if(DidCount == false){
        DidCount = true
        document.getElementById('SETUP').innerHTML = '<b id="USERS" class="counter" data-duration="1750">5500000</b>+ users use our services/bots</p>'
        COUNT()
        setTimeout(() => {
            REPLACE()
        }, 4000);

    }
};

function REPLACE(){
    document.getElementById('SETUP').innerHTML = '<b>5.500.000</b>+ users use our services/bots</p>'
}
