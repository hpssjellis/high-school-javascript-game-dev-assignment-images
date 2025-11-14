
   // global functions here
function myHitOther(my1,my2){
   left1   = parseInt(document.getElementById(my1).style.left)
   right1  = left1 + parseInt(document.getElementById(my1).style.width)
   top1    = parseInt(document.getElementById(my1).style.top)   
   bottom1 = top1   + parseInt(document.getElementById(my1).style.height)
   left2   = parseInt(document.getElementById(my2).style.left)
   right2  = left2 + parseInt(document.getElementById(my2).style.width)
   top2    = parseInt(document.getElementById(my2).style.top)   
   bottom2 = top2   + parseInt(document.getElementById(my2).style.height)
   if ((right1  >=  left2  ) &&      	   
       (bottom1 >=  top2   ) &&
       (left1   <=  right2 ) &&
       (top1    <=  bottom2) ){
       return true
   }
}


function myCheckHit(){
   if ( myHitOther('myImg01','myImg02') ){
       alert('you lose')  
       document.getElementById('myImg01').style.left = '20px'
       location = 't2a13-keydown.html'  // go to your next level
   }
