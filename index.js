
login()
function login(){
   try{
  let x =  prompt("LOGIN(write heart or something,don't write number)");
    if(x == "") throw "username not defind" 
    if(Number(x)) throw "username not defind"
    if(x == null) throw "username not defind"

   alert(`welcome ${x}`)
   }
   catch(error){
   alert(error)
   window.location.reload();
   }


}



const box = document.querySelector("div")

document.getElementById("Btn").onclick = function(){
  box.classList.toggle("style")
}
