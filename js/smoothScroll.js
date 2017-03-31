(function(){

var bod = document.getElementsByTagName("body")[0];

function animate(opts){

  var start = new Date();
    // console.log('start' + start);
    var id = setInterval(function(){
      var elapsedTime = new Date() - start;
      // console.log('elapsedTime' + elapsedTime);
      var elapsedTimeRate = elapsedTime / opts.duration;
      // console.log('elapsedTimeRate',elapsedTimeRate);
      var delta = opts.delta(elapsedTimeRate);

      if(elapsedTimeRate > 1){
        clearInterval(id);
      }
      window.addEventListener('click',function(){

        clearInterval(id);

      });
      opts.step(delta);

    },1);

}

function move(duration, toTop){

  animate({

      duration: duration || 1200,
      delta: function quad(elapsedTimeRate){

        return Math.pow(elapsedTimeRate, 2);

      },
      step: function(quad){
        bod.scrollTop = bod.scrollTop + (toTop - bod.scrollTop) * quad;
      }
  });
}

function boo(e){

  var theHref = this.getAttribute('href').slice(1);
  var classHref = document.getElementsByClassName(theHref)[0];
  var distTotop = classHref.offsetTop;
  var length = Math.abs(distTotop - bod.scrollTop);
  var timing;

  if(Math.abs(length) < 500){

    timing = 1000;

  }

  if(Math.abs(length) > 2500){

    timing = 2500;

  }else{

    timing = length;

  }

  move(timing,distTotop);
  e.preventDefault();

  // console.log('length' + length);
  // console.log('bod'+ bod.scrollTop);
  // console.log('dist'+distTotop);
  // console.log(classHref);
  // console.log(theHref);
  // console.log('boo');
}

var navItems = document.getElementsByClassName('nav__items')[0];
var anchors = navItems.getElementsByTagName('a');

for(var i = 0; i < anchors.length; ++i){
  var attr = anchors[i].getAttribute('href');
  if(attr.indexOf('#') === 0){

    // console.log('yea it is');
    anchors[i].addEventListener('click',boo);
    // console.log('no it isnt');
  }
}

})();
// console.log(attr);
// console.log(anchors);
// console.log(navItems);



// new Date同士を減算するとミリ秒(数値)になる。加算すると文字列になってしまうので足しても意味がない。
//
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// var a = new Date("2015/01/01 00:00");
// var b = new Date("2014/01/01 00:00");
//
// console.log(a - b);
// // => 31536000000
//
// console.log(a + b);
// // => Thu Jan 01 2015 00:00:00 GMT+0900Wed Jan 01 2014 00:00:00 GMT+0900

  // function animate(opts){
  //
  //   var start = new Date();
  //
  //   var id = setInterval(function(){
  //     var timePassed = new Date() - start;
  //       console.log(timePassed);
  //     var progress = timePassed / opts.duration;
  //     console.log(progress);
  //     var delta = opts.delta(progress);
  //     },1000)
  //
  //
  //
  //
  // }
  // function move(duration, too) {
  //     animate({
  //         duration: duration || 1200,
  //         delta: quad,
  //         step: function(quad) {
  //             bod.scrollTop = bod.scrollTop + (too - bod.scrollTop) * quad;
  //
  //         }
  //     });
  // }
  // window.addEventListener('DOMContentLoaded',animate);




//
// window.onload = animate();
