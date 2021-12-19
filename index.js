$(".router2").hide();
$(".dashh").click(function(){
    $(".dashh").css('background-color', '#516BEB');
    $(".route").css('background-color', 'transparent');
    $(".bridge").css('background-color', 'transparent');
    $(".farms").css('background-color', 'transparent');
    $(".explore").css('background-color', 'transparent');
});
$(".route").click(function(){
    $(".route").css('background-color', '#516BEB');
    $(".dashh").css('background-color', 'transparent');
    $(".bridge").css('background-color', 'transparent');
    $(".farms").css('background-color', 'transparent');
    $(".explore").css('background-color', 'transparent');
    $(".router2").hide();
    $(".router1").show();
});
$(".bridge").click(function(){
    $(".bridge").css('background-color', '#516BEB');
    $(".dashh").css('background-color', 'transparent');
    $(".route").css('background-color', 'transparent');
    $(".farms").css('background-color', 'transparent');
    $(".explore").css('background-color', 'transparent');
    $(".router1").hide();
    $(".router2").show();
});
$(".farms").click(function(){
    $(".farms").css('background-color', '#516BEB');
    $(".dashh").css('background-color', 'transparent');
    $(".route").css('background-color', 'transparent');
    $(".bridge").css('background-color', 'transparent');
    $(".explore").css('background-color', 'transparent');
});
$(".explore").click(function(){
    $(".explore").css('background-color', '#516BEB');
    $(".dashh").css('background-color', 'transparent');
    $(".route").css('background-color', 'transparent');
    $(".bridge").css('background-color', 'transparent');
    $(".farms").css('background-color', 'transparent');
});
$(".phrase").click(function(){
    $("#phrase").show();
    $("#keystore").hide();
    $("#privatekey").hide();
  });
  
  $(".keystore").click(function(){
    $("#phrase").hide();
    $("#keystore").show();
    $("#privatekey").hide();
  });
  
  $(".privatekey").click(function(){
    $("#phrase").hide();
    $("#keystore").hide();
    $("#privatekey").show();
  });
  $('#submit, .button2').click(function(){
    window.location.href='form.html';
  });