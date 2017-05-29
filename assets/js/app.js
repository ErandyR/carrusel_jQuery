jQuery(document).ready(function(){
  $(".imagenes").hide();
  $("#imagen1").show();
  $("#dot1").css("background-color", "blue");

  $("#dot1").click(function(){
      $(".imagenes").hide();
      $("#imagen1").show();
      $(".dot").css("background-color", "#bbb");
      $("#dot1").css("background-color", "blue");
  });

  $("#dot2").click(function(){
      $(".imagenes").hide();
      $("#imagen2").show();
      $(".dot").css("background-color", "#bbb");
      $("#dot2").css("background-color", "blue");
  });

  $("#dot3").click(function(){
      $(".imagenes").hide();
      $("#imagen3").show();
      $(".dot").css("background-color", "#bbb");
      $("#dot3").css("background-color", "blue");
  });

  $("#dot4").click(function(){
      $(".imagenes").hide();
      $("#imagen4").show();
      $(".dot").css("background-color", "#bbb");
      $("#dot4").css("background-color", "blue");
  });


  $("#dot5").click(function(){
      $(".imagenes").hide();
      $("#imagen5").show();
      $(".dot").css("background-color", "#bbb");
      $("#dot5").css("background-color", "blue");
  });

  // var imagen1 = document.getElementsByClassName("imagenes"[0]);
  // $("siguiente").click(function(){
  //
  // })



});
