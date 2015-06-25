$(document).ready(function() {
  $("body").append('<div id="beepbeep"></div>');
  //$("#beepbeep").append('<div id="beep"></div>');
});

$.easing.bw = function(x, t, b, c, d) {
	 ts=(t/=d)*t;
	 tc=ts*t;
	return b+c*(25.8*tc*ts + -78.5*ts*ts + 89.6*tc + -47.4*ts + 11.50*t);

	}

var beepID = 0;
var beepColor = '#66a4ca';
var beepFontColor = 'white';


beepbeep = {
  show: function(message) {

    var thisBeepID = beepbeep.getBeepID();
    $("#beepbeep").append('<div id="beep" class="' + thisBeepID + '" style="background-color:'+beepColor+';color:'+beepFontColor+';"></div>');
    $("#beepbeep ." + thisBeepID).append('<p>' + message + '</p>');
    beepbeep.animate(thisBeepID);


  },
  getBeepID: function() {
    return beepID++;
  },
  animate: function(id) {
    var beep = $("#beepbeep ." + id);
    beep.animate({
      marginLeft: "10px"
    }, 400, "bw");
    setTimeout(function() {
      beep.animate({
        marginLeft: "300px"
      }, 200);
    }, 3800);
    setTimeout(function() {
      beep.remove();
    }, 4000);
  },
  showWithImg: function(message, imgUrl) {

    var thisBeepID = beepbeep.getBeepID();
    $("#beepbeep").append('<div id="beep" class="' + thisBeepID + '" style="background-color:'+beepColor+';color:'+beepFontColor+';"></div>');
    $("#beepbeep ." + thisBeepID).append('<img src="'+imgUrl+'" alt="" />')
    $("#beepbeep ." + thisBeepID).append('<p>' + message + '</p>');
    beepbeep.animate(thisBeepID);
  },
  setBackgroundColor: function(color) {

    beepColor = color;

  },
  setFontColor: function(color) {

    beepFontColor = color;

  },
  showType: function(message, type) {
    if(type=='alert'){
      beepbeep.setFontColor('white');
      beepbeep.setBackgroundColor('red');
    }
    else if (type=='ok') {
      beepbeep.setFontColor('white');
      beepbeep.setBackgroundColor('green');
    }
    beepbeep.show(message);
  }


}
