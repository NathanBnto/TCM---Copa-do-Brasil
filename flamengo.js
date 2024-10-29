function mostratimes(){
    var t = document.getElementById("mtimes");
    if(t.style.display=="none"){
        t.style.display="block";
    } else {
        t.style.display="block"
    }
   }
   function mostrajogos(){
       var j = document.getElementById("mjogos");
       var tj = document.getElementById("textojogo")
       if(j.style.display=="none"){
           j.style.display="block";
           j.style.marginTop="12px"
           tj.style.marginTop ="13px"
       } else {
           j.style.display="block"
           j.style.marginTop="12px"
           tj.style.marginTop ="13px"
       }
   }
   function mostracamps(){
       var c = document.getElementById("mcamps");
       var tc = document.getElementById("textocamps")
       if(c.style.display=="none"){
           c.style.display="block";
           c.style.marginTop="12px";
           tc.style.marginTop ="13px";
       } else {
           c.style.display="block";
           c.style.marginTop="12px";
           tc.style.marginTop ="13px";
       }
   }
   
   function somecoisa(){
    var mt = document.getElementById("mtimes");
    var mj = document.getElementById("mjogos");
    var mc = document.getElementById("mcamps");
    var tj = document.getElementById("textojogo");
    var tc = document.getElementById("textocamps");
    
    mt.style.display="none";
    mj.style.display="none";
    mc.style.display="none";
   }