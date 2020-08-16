//$(document).mousemove(function(e){
   // $('body::before').attr({  'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
  //  });
  //});

(function(){
    document.onmousemove=function(e){
        document.querySelector('.spotlight').style = 'background-image:radial-gradient(130px 130px at '+e.clientX+'px '+ e.clientY +'px ,transparent 0%, rgb(238, 228, 228) 80%,rgba(0,0,0,0.8)';
    };
})();