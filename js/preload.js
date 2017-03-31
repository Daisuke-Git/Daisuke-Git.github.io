
"use strict";

window.addEventListener('load',function(){

    // var preload = document.getElementById('preload');
    // document.body.removeChild(preload);


function load(){

  window.addEventListener("load", function(){
    var preload = document.getElementById("preload");
    document.body.removeChild("preload");

  });


}

window.onload = load();



(function(){

  var preload = document.getElementById('preload');
  var loadLogo = document.getElementById('preload__logo');
  var loadVal = 0
  var loadRep = setInterval(loadSet,4);

  // console.log('hi');

  function loadSet(){

    if(loadVal == 100){

      clearInterval(loadRep);

      var opVal = 1;
      var opRep = setInterval(opDec,20);

          // console.log(opVal);

          function opDec(){

            if(opVal == -0.09999999999999987){

              clearInterval(opRep);
              preload.style.display = 'none';
              loadLogo.style.display = 'none';


            }else{

              if(opVal > 0){

                preload.style.opacity = opVal;
                opVal = opVal - 0.01;
                // console.log(opVal);

              }

            }

          }




    }else{

      if(loadVal < 100){

        loadVal = loadVal + 1;
        // console.log(loadVal);

      }

    }

  }

})();


});
