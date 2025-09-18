$(document).ready(function(){
  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });   


  var count3 = '';
  var count4 = '';
  var count5 = '';


  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
  
  $(".aprender").click(function() {
      $("#inicial").hide();
      $("#parte_um").show();
      $("body").css("background-color", "#f2f2f2");
      $('html,body').scrollTop(0);
    });


  $("#aparece_texto").click(function() {
    if ($("#aparece_texto").hasClass("collapsed")) {
      $("#camposdecadastro").show();
      $("#camposdecadastro2").hide();
      $(".botao_flutuante2").show();
      $(".botao_flutuante").hide();
      $(".botoes_flutuantes").css("background-color", "#EAF6FF");
      $("#trocabotao").show();
      $("#trocabotao2").hide();
      $(".cookies").show();
      $(".cookies2").hide();
    }else{
      $("#camposdecadastro").hide();
      $(".botao_flutuante").show();
      $(".botao_flutuante2").hide();
      $(".botoes_flutuantes").css("background-color", "#f2f2f2");
    }
});
  $("#aparece_texto2").click(function() {
    if ($("#aparece_texto2").hasClass("collapsed")) {
      $("#camposdecadastro2").show();
      $("#camposdecadastro").hide();
      $(".botao_flutuante2").show();
      $(".botao_flutuante").hide();
      $(".botoes_flutuantes").css("background-color", "#EAF6FF");
      $("#trocabotao2").show();
      $("#trocabotao").hide();
      $(".cookies2").show();
      $(".cookies").hide();
    }else{
      $("#camposdecadastro2").hide();
      $(".botao_flutuante").show();
      $(".botao_flutuante2").hide();
      $(".botoes_flutuantes").css("background-color", "#f2f2f2");
    }
});

  $(".inicio").click(function() {
      $("#inicial").show();
      $("#parte_um").hide();
      $("#seguinte").hide();
      $("#resultado").hide();
      $("#treinamento").hide();
      $("#login").hide();
      $("#login2").hide();
      $("#login3").hide();
      $("#login4").hide();
      $("#login5").hide();
      $("#login6").hide();
      $("#etapa1").hide();
      $("#etapa3").hide();
      $("#treinar_etapa2").hide();
      $("body").css("background-color", "#EAF6FF");
      $('html,body').scrollTop(0);
    });

  $(".seguinte2").click(function() {
      $("#parte_um").hide();
      $("#seguinte").show();
      $("body").css("background-color", "#F2F2F2");
      $('html,body').scrollTop(0);
    });

  $(".voltar2").click(function() {
      $("#seguinte").hide();
      $("#parte_um").show();
      $("body").css("background-color", "#f2f2f2");
      $('html,body').scrollTop(0);
    });
  $(".voltar3").click(function() {
      $("#login").hide();
      $("#login2").hide();
      $("#treinamento").show();
      $('html,body').scrollTop(0);
    });
  $(".voltar5").click(function() {
      $("#login4").hide();
      $("#login2").show();
      $('html,body').scrollTop(0);
    });
  $(".enviar").click(function() {
      $("#login3").hide();
      $("#login4").show();
      $('html,body').scrollTop(0);
    });
  $(".resultado").click(function() {

      $('.veja').hide();
      $('.ponto').hide();
      $("#seguinte").hide();
      $("#resultado").show();
      $('html,body').scrollTop(0);
      if (total===1) {
      $('.veja').show();
      $('.ponto').hide();
    }
      if (total>1) {
      $('.veja').hide();
      $('.ponto').show();
    }
    });
  $(".treinar2").click(function() {
      $("#resultado").hide();
      //$("#treinamento").show();
      $("#etapa1").show();
      $("body").css("background-color", "#EAF6FF");
      $('html,body').scrollTop(0);
    });


   

      var ver = $("#argumento_um").val(); 
      var ver2 = $("#argumento_dois").val();
      var ver3 = $("#argumento_tres").val();
      var ver4 = $("#argumento_quatro").val();
      var ver5 = $("#argumento_cinco").val();
      var ver6 = $("#argumento_seis").val();

      var ver7 = $("#argumento_sete").val(); 
      var ver8 = $("#argumento_oito").val();
      var ver9 = $("#argumento_nove").val();
      var ver10 = $("#argumento_dez").val();
      var ver11 = $("#argumento_onze").val();
      var ver12 = $("#argumento_doze").val();



  $(".treinar").click(function() {
      $("#inicial").hide();
      ver = $("#argumento_um").val(); 
      ver2 = $("#argumento_dois").val();
      ver3 = $("#argumento_tres").val();
      ver4 = $("#argumento_quatro").val();
      ver5 = $("#argumento_cinco").val();
      ver6 = $("#argumento_seis").val();

      ver7 = $("#argumento_sete").val(); 
      ver8 = $("#argumento_oito").val();
      ver9 = $("#argumento_nove").val();
      ver10 = $("#argumento_dez").val();
      ver11 = $("#argumento_onze").val();
      ver12 = $("#argumento_doze").val();

      if (ver!='') {
          $('#resposta13').removeClass('desabilita40');
          $('#resposta14').removeClass('desabilita40');
          $('#resposta15').removeClass('desabilita40');
        }

      if (ver2!='') {
          $('#resposta17').removeClass('desabilita40');
          $('#resposta18').removeClass('desabilita40');
          $('#resposta19').removeClass('desabilita40');
        }

        if (ver3!='') {
          $('#resposta21').removeClass('desabilita40');
          $('#resposta22').removeClass('desabilita40');
          $('#resposta23').removeClass('desabilita40');
        }

        if (ver4!='') {
          $('#resposta25').removeClass('desabilita40');
          $('#resposta26').removeClass('desabilita40');
          $('#resposta27').removeClass('desabilita40');
        }

        if (ver5!='') {
          $('#resposta29').removeClass('desabilita40');
          $('#resposta30').removeClass('desabilita40');
          $('#resposta31').removeClass('desabilita40');
        }

        if (ver6!='') {
          $('#resposta33').removeClass('desabilita40');
          $('#resposta34').removeClass('desabilita40');
          $('#resposta35').removeClass('desabilita40');
        }


        if (ver7!='') {
          $('#resposta37').removeClass('desabilita40');
          $('#resposta38').removeClass('desabilita40');
          $('#resposta39').removeClass('desabilita40');
        }

        if (ver8!='') {
          $('#resposta41').removeClass('desabilita40');
          $('#resposta42').removeClass('desabilita40');
          $('#resposta43').removeClass('desabilita40');
        }

        if (ver9!='') {
          $('#resposta45').removeClass('desabilita40');
          $('#resposta46').removeClass('desabilita40');
          $('#resposta47').removeClass('desabilita40');
        }

        if (ver10!='') {
          $('#resposta49').removeClass('desabilita40');
          $('#resposta50').removeClass('desabilita40');
          $('#resposta51').removeClass('desabilita40');
        }

        if (ver11!='') {
          $('#resposta53').removeClass('desabilita40');
          $('#resposta54').removeClass('desabilita40');
          $('#resposta55').removeClass('desabilita40');
        }

        if (ver12!='') {
          $('#resposta57').removeClass('desabilita40');
          $('#resposta58').removeClass('desabilita40');
          $('#resposta59').removeClass('desabilita40');
        }




       console.log(ver)
       console.log(ver2)
       console.log(ver3)
       console.log(ver4)
       console.log(ver5)
       console.log(ver6)
       console.log(ver7)
       console.log(ver8)
       console.log(ver9)
       console.log(ver10)
       console.log(ver11)
       console.log(ver12)

$('#argumento_um').keyup(function() {
        var length = $(this).val().length;
        console.log(length);
        if(length==0){
          $('.bolinha13').removeClass('ativo');
          $('.bolinha14').removeClass('ativo');
          $('.bolinha15').removeClass('ativo');
          $('.bolinha16').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta13').addClass('desabilita40');
          $('#resposta14').addClass('desabilita40');
          $('#resposta15').addClass('desabilita40');
        } 
        if (length>0) {
          $('#resposta13').removeClass('desabilita40');
          $('#resposta14').removeClass('desabilita40');
          $('#resposta15').removeClass('desabilita40');
        }    
    });
    
$('#argumento_dois').keyup(function() {
        var length2 = $(this).val().length;
        console.log(length2);
        if(length2==0){
          $('.bolinha17').removeClass('ativo');
          $('.bolinha18').removeClass('ativo');
          $('.bolinha19').removeClass('ativo');
          $('.bolinha20').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta17').addClass('desabilita40');
          $('#resposta18').addClass('desabilita40');
          $('#resposta19').addClass('desabilita40');
        } 
        if (length2>0) {
          $('#resposta17').removeClass('desabilita40');
          $('#resposta18').removeClass('desabilita40');
          $('#resposta19').removeClass('desabilita40');
        }    
    });

$('#argumento_tres').keyup(function() {
        var length3 = $(this).val().length;
        console.log(length3);
        if(length3==0){
          $('.bolinha21').removeClass('ativo');
          $('.bolinha22').removeClass('ativo');
          $('.bolinha23').removeClass('ativo');
          $('.bolinha24').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta21').addClass('desabilita40');
          $('#resposta22').addClass('desabilita40');
          $('#resposta23').addClass('desabilita40');
        } 
        if (length3>0) {
          $('#resposta21').removeClass('desabilita40');
          $('#resposta22').removeClass('desabilita40');
          $('#resposta23').removeClass('desabilita40');
        }    
    });


$('#argumento_quatro').keyup(function() {
        var length4 = $(this).val().length;
        console.log(length4);
        if(length4==0){
          $('.bolinha25').removeClass('ativo');
          $('.bolinha26').removeClass('ativo');
          $('.bolinha27').removeClass('ativo');
          $('.bolinha28').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta25').addClass('desabilita40');
          $('#resposta26').addClass('desabilita40');
          $('#resposta27').addClass('desabilita40');
        } 
        if (length4>0) {
          $('#resposta25').removeClass('desabilita40');
          $('#resposta26').removeClass('desabilita40');
          $('#resposta27').removeClass('desabilita40');
        }    
    });

$('#argumento_cinco').keyup(function() {
        var length5 = $(this).val().length;
        console.log(length5);
        if(length5==0){
          $('.bolinha29').removeClass('ativo');
          $('.bolinha30').removeClass('ativo');
          $('.bolinha31').removeClass('ativo');
          $('.bolinha32').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta29').addClass('desabilita40');
          $('#resposta30').addClass('desabilita40');
          $('#resposta31').addClass('desabilita40');
        } 
        if (length5>0) {
          $('#resposta29').removeClass('desabilita40');
          $('#resposta30').removeClass('desabilita40');
          $('#resposta31').removeClass('desabilita40');
        }    
    });


$('#argumento_seis').keyup(function() {
        var length6 = $(this).val().length;
        console.log(length6);
        if(length6==0){
          $('.bolinha33').removeClass('ativo');
          $('.bolinha34').removeClass('ativo');
          $('.bolinha35').removeClass('ativo');
          $('.bolinha36').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta33').addClass('desabilita40');
          $('#resposta34').addClass('desabilita40');
          $('#resposta35').addClass('desabilita40');
        } 
        if (length6>0) {
          $('#resposta33').removeClass('desabilita40');
          $('#resposta34').removeClass('desabilita40');
          $('#resposta35').removeClass('desabilita40');
        }    
    });

$('#argumento_sete').keyup(function() {
        var length7 = $(this).val().length;
        console.log(length7);
        if(length7==0){
          $('.bolinha37').removeClass('ativo');
          $('.bolinha38').removeClass('ativo');
          $('.bolinha39').removeClass('ativo');
          $('.bolinha40').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta37').addClass('desabilita40');
          $('#resposta38').addClass('desabilita40');
          $('#resposta39').addClass('desabilita40');
        } 
        if (length7>0) {
          $('#resposta37').removeClass('desabilita40');
          $('#resposta38').removeClass('desabilita40');
          $('#resposta39').removeClass('desabilita40');
        }    
    });

$('#argumento_oito').keyup(function() {
        var length8 = $(this).val().length;
        console.log(length8);
        if(length8==0){
          $('.bolinha41').removeClass('ativo');
          $('.bolinha42').removeClass('ativo');
          $('.bolinha43').removeClass('ativo');
          $('.bolinha44').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta41').addClass('desabilita40');
          $('#resposta42').addClass('desabilita40');
          $('#resposta43').addClass('desabilita40');
        } 
        if (length8>0) {
          $('#resposta41').removeClass('desabilita40');
          $('#resposta42').removeClass('desabilita40');
          $('#resposta43').removeClass('desabilita40');
        }    
    });

$('#argumento_nove').keyup(function() {
        var length9 = $(this).val().length;
        console.log(length9);
        if(length9==0){
          $('.bolinha45').removeClass('ativo');
          $('.bolinha46').removeClass('ativo');
          $('.bolinha47').removeClass('ativo');
          $('.bolinha48').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta45').addClass('desabilita40');
          $('#resposta46').addClass('desabilita40');
          $('#resposta47').addClass('desabilita40');
        } 
        if (length9>0) {
          $('#resposta45').removeClass('desabilita40');
          $('#resposta46').removeClass('desabilita40');
          $('#resposta47').removeClass('desabilita40');
        }    
    });


$('#argumento_dez').keyup(function() {
        var length10 = $(this).val().length;
        console.log(length10);
        if(length10==0){
          $('.bolinha49').removeClass('ativo');
          $('.bolinha50').removeClass('ativo');
          $('.bolinha51').removeClass('ativo');
          $('.bolinha52').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta49').addClass('desabilita40');
          $('#resposta50').addClass('desabilita40');
          $('#resposta51').addClass('desabilita40');
        } 
        if (length10>0) {
          $('#resposta49').removeClass('desabilita40');
          $('#resposta50').removeClass('desabilita40');
          $('#resposta51').removeClass('desabilita40');
        }    
    });


$('#argumento_onze').keyup(function() {
        var length11 = $(this).val().length;
        console.log(length11);
        if(length11==0){
          $('.bolinha53').removeClass('ativo');
          $('.bolinha54').removeClass('ativo');
          $('.bolinha55').removeClass('ativo');
          $('.bolinha56').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta53').addClass('desabilita40');
          $('#resposta54').addClass('desabilita40');
          $('#resposta55').addClass('desabilita40');
        } 
        if (length11>0) {
          $('#resposta53').removeClass('desabilita40');
          $('#resposta54').removeClass('desabilita40');
          $('#resposta55').removeClass('desabilita40');
        }    
    });


$('#argumento_doze').keyup(function() {
        var length12 = $(this).val().length;
        console.log(length12);
        if(length12==0){
          $('.bolinha57').removeClass('ativo');
          $('.bolinha58').removeClass('ativo');
          $('.bolinha59').removeClass('ativo');
          $('.bolinha60').addClass('ativo');
          $('#trocabotao').addClass('desabilita40');
          $('#resposta57').addClass('desabilita40');
          $('#resposta58').addClass('desabilita40');
          $('#resposta59').addClass('desabilita40');
        } 
        if (length12>0) {
          $('#resposta57').removeClass('desabilita40');
          $('#resposta58').removeClass('desabilita40');
          $('#resposta59').removeClass('desabilita40');
        }    
    });


  var comprovacao1= $(".comprovacao1").val();
  var comprovacao2 = $(".comprovacao2").val();
  var comprovacao3 = $(".comprovacao3").val();
  var comprovacao4 = $(".comprovacao4").val();
  var comprovacao5 = $(".comprovacao5").val();
  var comprovacao6 = $(".comprovacao6").val();
  var comprovacao7= $(".comprovacao7").val();
  var comprovacao8 = $(".comprovacao8").val();
  var comprovacao9 = $(".comprovacao9").val();
  var comprovacao10 = $(".comprovacao10").val();
  var comprovacao11 = $(".comprovacao11").val();
  var comprovacao12 = $(".comprovacao12").val();
  var comprovacao13= $(".comprovacao13").val();
  var comprovacao14 = $(".comprovacao14").val();
  var comprovacao15 = $(".comprovacao15").val();
  var comprovacao16 = $(".comprovacao16").val();
  var comprovacao17 = $(".comprovacao17").val();
  var comprovacao18 = $(".comprovacao18").val();
  var comprovacao19= $(".comprovacao19").val();
  var comprovacao20 = $(".comprovacao20").val();
  var comprovacao21 = $(".comprovacao21").val();
  var comprovacao22 = $(".comprovacao22").val();
  var comprovacao23 = $(".comprovacao23").val();
  var comprovacao24 = $(".comprovacao24").val();
  var referencia1= $(".referencia1").val();
  var referencia2 = $(".referencia2").val();
  var referencia3 = $(".referencia3").val();
  var referencia4 = $(".referencia4").val();
  var referencia5 = $(".referencia5").val();
  var referencia6 = $(".referencia6").val();
  var referencia7= $(".referencia7").val();
  var referencia8 = $(".referencia8").val();
  var referencia9 = $(".referencia9").val();
  var referencia10 = $(".referencia10").val();
  var referencia11 = $(".referencia11").val();
  var referencia12 = $(".referencia12").val();
  var referencia13= $(".referencia13").val();
  var referencia14 = $(".referencia14").val();
  var referencia15 = $(".referencia15").val();
  var referencia16 = $(".referencia16").val();
  var referencia17 = $(".referencia17").val();
  var referencia18 = $(".referencia18").val();
  var referencia19= $(".referencia19").val();
  var referencia20 = $(".referencia20").val();
  var referencia21 = $(".referencia21").val();
  var referencia22 = $(".referencia22").val();
  var referencia23 = $(".referencia23").val();
  var referencia24 = $(".referencia24").val(); 

  if (comprovacao2!='') {
  $("#maiscontrole2").trigger('click');}

  if (comprovacao3!='') {
  $("#maiscontrole3").trigger('click');}

  if (comprovacao4!='') {
  $("#maiscontrole4").trigger('click');}

  if (comprovacao5!='') {
  $("#maiscontrole5").trigger('click');}

  if (comprovacao6!='') {
  $("#maiscontrole6").trigger('click');}

  if (comprovacao7!='') {
  $("#maiscontrole7").trigger('click');}

  if (comprovacao8!='') {
  $("#maiscontrole8").trigger('click');}

  if (comprovacao9!='') {
  $("#maiscontrole9").trigger('click');}

  if (comprovacao10!='') {
  $("#maiscontrole10").trigger('click');}

  if (comprovacao11!='') {
  $("#maiscontrole11").trigger('click');}

  if (comprovacao12!='') {
  $("#maiscontrole12").trigger('click');}

  if (comprovacao13!='') {
  $("#maiscontrole13").trigger('click');}

  if (comprovacao14!='') {
  $("#maiscontrole14").trigger('click');}

  if (comprovacao15!='') {
  $("#maiscontrole15").trigger('click');}

  if (comprovacao16!='') {
  $("#maiscontrole16").trigger('click');}

  if (comprovacao17!='') {
  $("#maiscontrole17").trigger('click');}

  if (comprovacao18!='') {
  $("#maiscontrole18").trigger('click');}

  if (comprovacao19!='') {
  $("#maiscontrole19").trigger('click');}

  if (comprovacao21!='') {
  $("#maiscontrole21").trigger('click');}

  if (comprovacao22!='') {
  $("#maiscontrole22").trigger('click');}

  if (comprovacao23!='') {
  $("#maiscontrole23").trigger('click');}

  if (comprovacao24!='') {
  $("#maiscontrole24").trigger('click');}

    if (referencia2!='') {
  $("#maiscontrole2").trigger('click');}

  if (referencia3!='') {
  $("#maiscontrole3").trigger('click');}

  if (referencia4!='') {
  $("#maiscontrole4").trigger('click');}

  if (referencia5!='') {
  $("#maiscontrole5").trigger('click');}

  if (referencia6!='') {
  $("#maiscontrole6").trigger('click');}

  if (referencia7!='') {
  $("#maiscontrole7").trigger('click');}

  if (referencia8!='') {
  $("#maiscontrole8").trigger('click');}

  if (referencia9!='') {
  $("#maiscontrole9").trigger('click');}

  if (referencia10!='') {
  $("#maiscontrole10").trigger('click');}

  if (referencia11!='') {
  $("#maiscontrole11").trigger('click');}

  if (referencia12!='') {
  $("#maiscontrole12").trigger('click');}

  if (referencia13!='') {
  $("#maiscontrole13").trigger('click');}

  if (referencia14!='') {
  $("#maiscontrole14").trigger('click');}

  if (referencia15!='') {
  $("#maiscontrole15").trigger('click');}

  if (referencia16!='') {
  $("#maiscontrole16").trigger('click');}

  if (referencia17!='') {
  $("#maiscontrole17").trigger('click');}

  if (referencia18!='') {
  $("#maiscontrole18").trigger('click');}

  if (referencia19!='') {
  $("#maiscontrole19").trigger('click');}

  if (referencia21!='') {
  $("#maiscontrole21").trigger('click');}

  if (referencia22!='') {
  $("#maiscontrole22").trigger('click');}

  if (referencia23!='') {
  $("#maiscontrole23").trigger('click');}

  if (referencia24!='') {
  $("#maiscontrole24").trigger('click');}

       if (ver2!='') {
        $("#maisargumento1").trigger('click');}
        if (ver3!='') {
        $("#maisargumento2").trigger('click');}
        if (ver4!='') {
        $("#maisargumento3").trigger('click');}
        if (ver5!='') {
        $("#maisargumento4").trigger('click');}
        if (ver6!='') {
        $("#maisargumento5").trigger('click');}

        if (ver7!='') {
        $("#maisargumento7").trigger('click');}
        if (ver8!='') {
        $("#maisargumento8").trigger('click');}
        if (ver9!='') {
        $("#maisargumento9").trigger('click');}
        if (ver10!='') {
        $("#maisargumento10").trigger('click');}
        if (ver11!='') {
        $("#maisargumento11").trigger('click');}
      
       
      //$("#treinamento").show();
      $("#etapa1").show();
      $('html,body').scrollTop(0);
    });

  $(".treinar3").click(function() {
      $("#parte_um").hide();
      $("#seguinte").hide();
      //$("#treinamento").show();
      $("#etapa1").show();
      $('html,body').scrollTop(0);
      $("body").css("background-color", "#EAF6FF");
    });

  $(".primeiro_acesso").click(function() {
      $("#treinamento").hide();
      $("#login").show();
      $('html,body').scrollTop(0);
    });
  $(".cadastrado").click(function() {
      $("#treinamento").hide();
      $("#login2").show();
      $('html,body').scrollTop(0);
    });
  $(".cadastrar3").click(function() {
      $("#login").hide();
      $("#login5").show();
      $('html,body').scrollTop(0);
    })
  $(".voltar6").click(function() {
      $("#login5").hide();
      $("#login2").show();
      $('html,body').scrollTop(0);
    })
  $(".redefinir").click(function() {
      $("#login2").hide();
      $("#login3").show();
      $('html,body').scrollTop(0);
    })
  $(".acesso").click(function() {
      $("#login3").hide();
      $("#login2").show();
      $('html,body').scrollTop(0);
    })
  $(".reorganizar").click(function() {
      $("#resultado").hide();
      $("#seguinte").show();
      $('html,body').scrollTop(0);
      $('.conector').hide();
      $(".bolinha").removeClass('ativo');
      $(".primeiro").hide();
      $(".segundo").hide();
      $(".terceiro").hide();
      $(".quatro2").hide();
      $(".bolinha4").addClass('ativo');
      $(".bolinha8").addClass('ativo');
      $(".bolinha12").addClass('ativo');
      $(".bolinha84").addClass('ativo');
      $("#resultado_aprender").addClass('desabilita40');
      count=0;
      count2=0;
    })

  $(".entrar_etapa1").click(function() {
      $(".adicionar_arg").addClass('desabilita');
      $(".retirar_arg").addClass('desabilita');
      $(".botao_mais").addClass('desabilita');
      $(".lixo").addClass('desabilita');
      $("#login2").hide();
      $("#etapa1").show();
      $('html,body').scrollTop(0);
    })


  $(".avancar_treinar_etapa20").click(function() {
      kotoba();
      $('#trocabotao').removeClass('desabilita40');
      $("#parte_um").hide();
      $("#seguinte").hide();
      $("#resultado").hide();
      $("#treinamento").hide();
      $("#login").hide();
      $("#login2").hide();
      $("#login3").hide();
      $("#login4").hide();
      $("#login5").hide();
      $("#login6").hide();
      $("#etapa1").hide();
      $("#etapa2").hide();
      $("body").css("background-color", "#EAF6FF");
      $("#treinar_etapa2").show();
      $('html,body').scrollTop(0);

    });

$(".avancar_treinar_etapa2").click(function() {
      kotoba();
      $('#trocabotao2').removeClass('desabilita40');
      $("#parte_um").hide();
      $("#seguinte").hide();
      $("#resultado").hide();
      $("#treinamento").hide();
      $("#login").hide();
      $("#login2").hide();
      $("#login3").hide();
      $("#login4").hide();
      $("#login5").hide();
      $("#login6").hide();
      $("#etapa1").hide();
      $("#etapa2").hide();
      $("body").css("background-color", "#EAF6FF");
      $("#treinar_etapa20").show();
      $('html,body').scrollTop(0);
    });

  $(".voltar8").click(function() {
      $("#etapa1").hide();
      $("#inicial").show();
      $('html,body').scrollTop(0);
    });

$(".voltar9").click(function() {
      $("#treinar_etapa2").hide();
      $("#etapa1").show();
      //$('html,body').scrollTop(0);
      $(".spans").text(' ');
      $("#copia_argumento_um").text(' ');
      $("#copia_argumento_dois").text(' ');
      $("#copia_argumento_tres").text(' ');
      $('#caixa_argumento1').hide();
      $('#caixa_argumento2').hide();
      $('#caixa_argumento3').hide();
    });
$(".voltar90").click(function() {
      $("#treinar_etapa20").hide();
      $("#etapa1").show();
      //$('html,body').scrollTop(0);
      $(".aspans").text(' ');
      $("#2copia_argumento_um").text(' ');
      $("#2copia_argumento_dois").text(' ');
      $("#2copia_argumento_tres").text(' ');
      $('#2caixa_argumento1').hide();
      $('#2caixa_argumento2').hide();
      $('#2caixa_argumento3').hide();
    });
$(".voltar10").click(function() {
      $("#etapa3").hide();
      $("#treinar_etapa2").show();
      $('html,body').scrollTop(0);
    });

$(".voltar100").click(function() {
      $("#etapa30").hide();
      $("#treinar_etapa20").show();
      $('html,body').scrollTop(0);
    });



$(".avancar_treinar_etapa3").click(function() {
  var visivel1  = $('#caixa_argumento1').is(':visible');
  var visivel2  = $('#caixa_argumento2').is(':visible');
  var visivel3  = $('#caixa_argumento3').is(':visible');

  if (visivel1==false) {
    $('#introducao90').val('');
  }

  if (visivel2==false) {
    $('#introducao100').val('');
  }

  if (visivel3==false) {
    $('#introducao110').val('');
  }


      $("#treinar_etapa2").hide();
      $("#etapa3").show();
      $('html,body').scrollTop(0);

      let zero = document.getElementById('introducao800').value;
      let one = document.getElementById('introducao80').value;
      let two = document.getElementById('introducao90').value;
      let three = document.getElementById('introducao100').value;
      let four = document.getElementById('introducao110').value;
      let five = document.getElementById('introducao120').value;

      $("#copia_introducao800").text(zero);
      $("#copia_introducao80").text(one);
      $("#copia_introducao90").text(two);
      $("#copia_introducao100").text(three);
      $("#copia_introducao110").text(four);
      $("#copia_introducao120").text(five);
    })
$(".avancar_treinar_etapa30").click(function() {
      $("#treinar_etapa20").hide();
      $("#etapa30").show();
      $('html,body').scrollTop(0);

      let zero = document.getElementById('aintroducao800').value;
      let one = document.getElementById('aintroducao80').value;
      let two = document.getElementById('aintroducao90').value;
      let three = document.getElementById('aintroducao100').value;
      let four = document.getElementById('aintroducao110').value;
      let five = document.getElementById('aintroducao120').value;

      $("#acopia_introducao800").text(zero);
      $("#acopia_introducao80").text(one);
      $("#acopia_introducao90").text(two);
      $("#acopia_introducao100").text(three);
      $("#acopia_introducao110").text(four);
      $("#acopia_introducao120").text(five);
    })
function myFunction10(x) {
  if (x.matches) { // If media query matches
    $(".imagem6").hide();
    $(".imagem7").show();
  } else {
    $(".imagem7").hide();
    $(".imagem6").show();
  }
}

var x = window.matchMedia("(max-width: 991px)")
myFunction10(x) // Call listener function at run time
x.addListener(myFunction10) // Attach listener function on state changes


function myFunction2(y) {
  if (y.matches) { // If media query matches
    $(".imagem9").show();
    $(".imagem11").show();
  } else {
    $(".imagem11").hide();
    $(".imagem9").hide();
  }
}

var y = window.matchMedia("(max-width: 768px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes


function myFunction3(z) {
  if (z.matches) { // If media query matches
    $("#1").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#2").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#3").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#201").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#202").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#203").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#204").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#205").removeClass("d-flex justify-content-between").addClass("check_box");
    $("#206").removeClass("d-flex justify-content-between").addClass("check_box");
    $(".show_hide").hide();
    $(".show_hide2").show();
  } else {
    $("#1").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#2").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#3").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#201").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#202").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#203").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#204").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#205").addClass("d-flex justify-content-between").removeClass("check_box");
    $("#206").addClass("d-flex justify-content-between").removeClass("check_box");
    $(".show_hide2").hide();
    $(".show_hide").show();
  }
}

var z = window.matchMedia("(max-width: 767px)")
myFunction3(z) // Call listener function at run time
z.addListener(myFunction3) // Attach listener function on state changes


function myFunction4(r) {
  if (r.matches) { // If media query matches
    $(".mobile").show();
    $(".desktop").hide();
    $(".imagem13").show();
    $(".imagem12").hide();
    $(".intolerancia").css("background-color", "#3E3E3E");

  } else {
    $(".mobile").hide();
    $(".desktop").show();
    $(".imagem13").hide();
    $(".imagem12").show();
    $(".intolerancia").css("background-color", "#f2f2f2");
  }
}

var r = window.matchMedia("(max-width: 990px)")
myFunction4(r) // Call listener function at run time
r.addListener(myFunction4) // Attach listener function on state changes


function myFunction5(s) {
  if (s.matches) { // If media query matches
    $(".mobile2").show();
    $(".desktop2").hide();
  } else {
    $(".mobile2").hide();
    $(".desktop2").show();
  }
}

var s = window.matchMedia("(max-width: 480px)")
myFunction5(s) // Call listener function at run time
s.addListener(myFunction5) // Attach listener function on state changes

function myFunction(m) {
  if (m.matches) { // If media query matches
    $(".imagem_introducao4").hide();
    $(".imagem_introducao4b").show();
    $(".frase_inicial").hide();
    $(".frase_inicial2").show();
  } else {
    $(".imagem_introducao4b").hide();
    $(".imagem_introducao4").show();
    $(".frase_inicial2").hide();
    $(".frase_inicial").show();
  }
}

var m = window.matchMedia("(max-width: 1025px)")
myFunction(m) // Call listener function at run time
m.addListener(myFunction) // Attach listener function on state changes



});


var target2 = '';
var target4 = '';

$(".textarea4").click(function() {
      var target = $(this).closest('[data-id]');
      console.log(target.data('id'))
      $(".tabela1").removeClass('borda_cinza_escuro');
      $(".botao_mais").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(".lixo").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(this).closest('[data-id]').addClass('borda_cinza_escuro');
      $("#mais"+target.data('id')).addClass('fundo_img_cinza_escuro').removeClass('desabilita');
      $("#lixo"+target.data('id')).addClass('fundo_img_cinza_escuro').removeClass('desabilita');
    });
  
  $(".textarea6").click(function() {
      var target3 = $(this).closest('[data-id]');
      console.log(target3.data('id'))
      $(".tabela1").removeClass('borda_cinza_escuro');
      $(".botao_mais").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(".lixo").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(this).closest('[data-id]').addClass('borda_cinza_escuro');
      $("#mais"+target3.data('id')).addClass('fundo_img_cinza_escuro').removeClass('desabilita');
      $("#lixo"+target3.data('id')).addClass('fundo_img_cinza_escuro').removeClass('desabilita');
    });

$(".argumento").click(function() {
      target2 = $(this).closest('[data-id]');
      console.log(target2.data('id'))
      $(".argumento").removeClass('borda_laranja').addClass('borda_cinza_claro');
      $(".adicionar_arg").removeClass('fundo_img_laranja').addClass('desabilita');
      $(".retirar_arg").removeClass('fundo_img_laranja').addClass('desabilita');
      $(this).closest('[data-id]').removeClass('borda_cinza_claro').addClass('borda_laranja');
      $("#mais"+target2.data('id')).addClass('fundo_img_laranja').removeClass('desabilita');
      $("#lixo"+target2.data('id')).addClass('fundo_img_laranja').removeClass('desabilita');
    });

$(".argumento").click(function() {
      target4 = $(this).closest('[data-id]');
      console.log(target4.data('id'))
      $(".argumento").removeClass('borda_laranja').addClass('borda_cinza_claro');
      $(".adicionar_arg").removeClass('fundo_img_laranja').addClass('desabilita');
      $(".retirar_arg").removeClass('fundo_img_laranja').addClass('desabilita');
      $(this).closest('[data-id]').removeClass('borda_cinza_claro').addClass('borda_laranja');
      $("#mais"+target4.data('id')).addClass('fundo_img_laranja').removeClass('desabilita');
      $("#lixo"+target4.data('id')).addClass('fundo_img_laranja').removeClass('desabilita');
    });

$(".textarea3").click(function() {
      $(".tabela1").removeClass('borda_cinza_escuro');
      $(".botao_mais").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(".lixo").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
    });
$(".textarea5").click(function() {
      $(".tabela1").removeClass('borda_cinza_escuro');
      $(".botao_mais").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
      $(".lixo").removeClass('fundo_img_cinza_escuro').addClass('desabilita');
    });



$(".adicionar_arg").click(function() {
  var valor3 = $(this).attr("id").substring(13,15);
  var valor4 = 1;
  var soma = parseFloat(valor3) + parseFloat(valor4);
      console.log(soma)
  $("#elemento"+soma).show();
  
});

$(".retirar_arg").click(function() {
  var valor5 = $(this).attr("id").substring(13,15);
  console.log(valor5)
  $("#elemento"+valor5).hide();
});

$(".botao_mais").click(function() {
  var valor = $(this).attr("id").substring(12,14);
      console.log(valor)
  $("#referencia"+valor).show();
});

$(".lixo").click(function() {
  var valor2 = $(this).attr("id").substring(12,14);
  var subtrai = 1;
  var total = valor2-subtrai;
      console.log(total)
  $("#referencia"+total).hide();
  $(".referencia"+valor2).val('');
  $(".comprovacao"+valor2).val('');
});



$(".grupo2").click(function() {

  resposta = $(this).attr("id").substring(8,11);
  elemento2 = $(this).attr('class').split(' ')[1].substring(0,8);
  elemento3 = $(this).attr('class').split(' ')[2];
  
      console.log(resposta);
      console.log(elemento2);
      console.log(elemento3);

  if (elemento3=='um') {
    $(".um").removeClass('ativo');
  }
  if (elemento3=='dois') {
    $(".dois").removeClass('ativo');
  }
  if (elemento3=='tres') {
    $(".tres").removeClass('ativo');
  }

  $("."+elemento2).removeClass('ativo');
  $("."+elemento3).removeClass('ativo');
  $(".bolinha"+resposta).addClass('ativo');


    if (elemento3=='um' || elemento3=='dois' || elemento3=='tres') {
      count3 =1;
      $('#resultado_aprender').removeClass('desabilita40');
    }else{
      count3 = 0;
      $('#resultado_aprender').addClass('desabilita40');
    }
    console.log(count3)
    qtd1 = $(".um .ativo").length;
    qtd2 = $(".dois .ativo").length;
    qtd3 = $(".tres .ativo").length;

    total = qtd1+qtd2+qtd3;
    console.log(total);
//*********************************************************

  if (elemento3=='um' && elemento2=="escolha1") {
    $('.p1').hide();
    $('.primeiro').hide();
    $('.ponto1').show();      
    }

  if (elemento3=='dois' && elemento2=="escolha1") {
    $('.p1').hide();
    $('.segundo').hide();
    $('.ponto2').show();
  }
  if (elemento3=='tres' && elemento2=="escolha1") {
    $('.p1').hide();
    $('.terceiro').hide();
    $('.ponto3').show();
  }
  if (elemento3=='quatro' && elemento2=="escolha1") {
    $('.p1').hide();
    $('.quarto').hide();
    $('.ponto4').show();
  }

//*************************************************************
    if (elemento3=='um' && elemento2=="escolha2") {
    $('.p2').hide();
    $('.primeiro').hide();
    $('.ponto5').show();
  }

  if (elemento3=='dois' && elemento2=="escolha2") {
  $('.p2').hide();
    $('.segundo').hide();
    $('.ponto6').show();
  }
  if (elemento3=='tres' && elemento2=="escolha2") {
  $('.p2').hide();
    $('.terceiro').hide();
    $('.ponto7').show();
  }
  if (elemento3=='quatro' && elemento2=="escolha2") {
  $('.p2').hide();
    $('.quarto').hide();
    $('.ponto8').show();
  }

//************************************************************
    if (elemento3=='um' && elemento2=="escolha3") {
      $('.p3').hide();
    $('.primeiro').hide();
    $('.ponto9').show();
  }

  if (elemento3=='dois' && elemento2=="escolha3") {
    $('.p3').hide();
    $('.segundo').hide();
    $('.ponto10').show();
  }
  if (elemento3=='tres' && elemento2=="escolha3") {
    $('.p3').hide();
    $('.terceiro').hide();
    $('.ponto11').show();
  }
  if (elemento3=='quatro' && elemento2=="escolha3") {
    $('.p3').hide();
    $('.quarto').hide();
    $('.ponto12').show();
  }

//*********************************************************

    if (elemento3=='um' && elemento2=="escolha4") {
    $('.p4').hide();
    $('.primeiro').hide();
    $('.ponto13').show();
  }

  if (elemento3=='dois' && elemento2=="escolha4") {
  $('.p4').hide();
    $('.segundo').hide();
    $('.ponto14').show();
  }
  if (elemento3=='tres' && elemento2=="escolha4") {
  $('.p4').hide();
    $('.terceiro').hide();
    $('.ponto15').show();
  }
  if (elemento3=='quatro' && elemento2=="escolha4") {
  $('.p4').hide();
    $('.quarto').hide();
    $('.ponto16').show();
  }


//********************************************************
if (!$('.escolha1').hasClass('ativo')) {
    $(".bolinha4").addClass('ativo');
  }
if (!$('.escolha2').hasClass('ativo')) {
    $(".bolinha8").addClass('ativo');
  }
if (!$('.escolha3').hasClass('ativo')) {
    $(".bolinha12").addClass('ativo');
  }
if (!$('.escolha4').hasClass('ativo')) {
    $(".bolinha84").addClass('ativo');
  }

});

function popup() {
  $('#myPopup').addClass('show');
  setTimeout(function() { 
    $('#myPopup').removeClass('show')
    }, 5000);
} 

//escolha das bolinhas quero treinar****************************************************************//


  var teste1 = '';
  var teste2 = '';
  var teste3 = '';
  var teste4 = '';
  var teste5 = '';
  var teste6 = '';

  var teste7 = '';
  var teste8 = '';
  var teste9 = '';
  var teste10 = '';
  var teste11 = '';
  var teste12 = '';

  var comprovacao1= $(".comprovacao1").val();
  var comprovacao2 = $(".comprovacao2").val();
  var comprovacao3 = $(".comprovacao3").val();
  var comprovacao4 = $(".comprovacao4").val();
  var comprovacao5 = $(".comprovacao5").val();
  var comprovacao6 = $(".comprovacao6").val();
  var comprovacao7= $(".comprovacao7").val();
  var comprovacao8 = $(".comprovacao8").val();
  var comprovacao9 = $(".comprovacao9").val();
  var comprovacao10 = $(".comprovacao10").val();
  var comprovacao11 = $(".comprovacao11").val();
  var comprovacao12 = $(".comprovacao12").val();
  var comprovacao13= $(".comprovacao13").val();
  var comprovacao14 = $(".comprovacao14").val();
  var comprovacao15 = $(".comprovacao15").val();
  var comprovacao16 = $(".comprovacao16").val();
  var comprovacao17 = $(".comprovacao17").val();
  var comprovacao18 = $(".comprovacao18").val();
  var comprovacao19= $(".comprovacao19").val();
  var comprovacao20 = $(".comprovacao20").val();
  var comprovacao21 = $(".comprovacao21").val();
  var comprovacao22 = $(".comprovacao22").val();
  var comprovacao23 = $(".comprovacao23").val();
  var comprovacao24 = $(".comprovacao24").val();
  var referencia1= $(".referencia1").val();
  var referencia2 = $(".referencia2").val();
  var referencia3 = $(".referencia3").val();
  var referencia4 = $(".referencia4").val();
  var referencia5 = $(".referencia5").val();
  var referencia6 = $(".referencia6").val();
  var referencia7= $(".referencia7").val();
  var referencia8 = $(".referencia8").val();
  var referencia9 = $(".referencia9").val();
  var referencia10 = $(".referencia10").val();
  var referencia11 = $(".referencia11").val();
  var referencia12 = $(".referencia12").val();
  var referencia13= $(".referencia13").val();
  var referencia14 = $(".referencia14").val();
  var referencia15 = $(".referencia15").val();
  var referencia16 = $(".referencia16").val();
  var referencia17 = $(".referencia17").val();
  var referencia18 = $(".referencia18").val();
  var referencia19= $(".referencia19").val();
  var referencia20 = $(".referencia20").val();
  var referencia21 = $(".referencia21").val();
  var referencia22 = $(".referencia22").val();
  var referencia23 = $(".referencia23").val();
  var referencia24 = $(".referencia24").val(); 

  var resposta10 = '';
  var elemento20 = '';
  var elemento30 = '';

  var value1 = '';
  var value2 = '';
  var value3 = '';
  var value4 = '';
  var value5 = '';
  var value6 = '';
  var value7 = '';
  var value8 = '';
  var value9 = '';
  var value10 = '';
  var value11 = '';
  var value12 = '';
  var value13 = '';
  var value14 = '';
  var value15 = '';
  var value16 = '';



function count(){
  value1 = $("#argumento_um").val().length; 
  value2 = $("#introducao1").val().length; 
  value3 = $("#introducao4").val().length;
  value4 = $("#argumento_sete").val().length; 
  value5 = $("#introducao8").val().length; 
  value6 = $("#introducao11").val().length; 
  value7 = $("#argumento_dois").val().length;
  value8 = $("#argumento_tres").val().length;
  value9 = $("#argumento_quatro").val().length;
  value10 = $("#argumento_cinco").val().length;
  value11 = $("#argumento_seis").val().length;
  value12 = $("#argumento_oito").val().length;
  value13 = $("#argumento_nove").val().length;
  value14 = $("#argumento_dez").val().length;
  value15 = $("#argumento_onze").val().length;
  value16 = $("#argumento_doze").val().length;


  count4 = $(".grupo").children(".quatro .ativo").length;
  console.log(count4)
    if (count4<=5 && value2!=0 && value3!=0 && (value1!=0 || value7!=0 || value8!=0 || value9!=0 || value10!=0 || value11!=0)) {
      $('#trocabotao').removeClass('desabilita40');
    }else{
      $('#trocabotao').addClass('desabilita40');
    }
 count5 = $(".grupo3").children(".quatro .ativo").length;
 console.log(count5)
    if (count5<6 && value5!=0 && value6!=0 && (value4!=0 || value12!=0 || value13!=0 || value14!=0 || value15!=0 || value16!=0)) {
      $('#trocabotao2').removeClass('desabilita40');
    }else{
      $('#trocabotao2').addClass('desabilita40');
    }

  var campos = $("*[data-teste]");
  var vazios = campos.filter(function(){
         return !$(this).val();
     }).length;
  console.log(vazios);
  if (vazios<59 && count4<6 && value2!=0 && value3!=0) {
      $('#trocabotao').removeClass('desabilita40');
     }

  var campos2 = $("*[data-teste2]");
  var vazios2 = campos2.filter(function(){
         return !$(this).val();
     }).length;
  console.log(vazios2);
  if (vazios2<59 && count5<6 && value5!=0 && value6!=0) {
      $('#trocabotao2').removeClass('desabilita40');
     }
  }

    function kotoba() {
  value1 = $("#argumento_um").val().length; 
  value2 = $("#introducao1").val().length; 
  value3 = $("#introducao4").val().length;
  value4 = $("#argumento_sete").val().length; 
  value5 = $("#introducao8").val().length; 
  value6 = $("#introducao11").val().length; 
  value7 = $("#argumento_dois").val().length;
  value8 = $("#argumento_tres").val().length;
  value9 = $("#argumento_quatro").val().length;
  value10 = $("#argumento_cinco").val().length;
  value11 = $("#argumento_seis").val().length;
  value12 = $("#argumento_oito").val().length;
  value13 = $("#argumento_nove").val().length;
  value14 = $("#argumento_dez").val().length;
  value15 = $("#argumento_onze").val().length;
  value16 = $("#argumento_doze").val().length;

  if(value1!=0 || value7!=0 || value8!=0 || value9!=0 || value10!=0 || value11!=0 && value2!=0 && value3!=0){
      count();
    }else{
      $('#trocabotao').addClass('desabilita40');
    }

  if(value4!=0 || value12!=0 || value13!=0 || value14!=0 || value15!=0 || value16!=0 && value5!=0 && value6!=0){
      count();
    }else{
      $('#trocabotao2').addClass('desabilita40');
    }
  console.log(value1)
  console.log(value2)
  console.log(value3)
  console.log(value4)
  console.log(value5)
  console.log(value7)
}
//************************************************************************************************************

//************************************************************************************************************
$(".grupo").click(function() {
  argumento_um = $("#argumento_um").val();
  argumento_dois = $("#argumento_dois").val();
  argumento_tres = $("#argumento_tres").val();
  argumento_quatro = $("#argumento_quatro").val();
  argumento_cinco = $("#argumento_cinco").val();
  argumento_seis = $("#argumento_seis").val();

  comprovacao1= $(".comprovacao1").val();
  comprovacao2 = $(".comprovacao2").val();
  comprovacao3 = $(".comprovacao3").val();
  comprovacao4 = $(".comprovacao4").val();
  comprovacao5 = $(".comprovacao5").val();
  comprovacao6 = $(".comprovacao6").val();
  comprovacao7= $(".comprovacao7").val();
  comprovacao8 = $(".comprovacao8").val();
  comprovacao9 = $(".comprovacao9").val();
  comprovacao10 = $(".comprovacao10").val();
  comprovacao11 = $(".comprovacao11").val();
  comprovacao12 = $(".comprovacao12").val();
  comprovacao13= $(".comprovacao13").val();
  comprovacao14 = $(".comprovacao14").val();
  comprovacao15 = $(".comprovacao15").val();
  comprovacao16 = $(".comprovacao16").val();
  comprovacao17 = $(".comprovacao17").val();
  comprovacao18 = $(".comprovacao18").val();
  comprovacao19= $(".comprovacao19").val();
  comprovacao20 = $(".comprovacao20").val();
  comprovacao21 = $(".comprovacao21").val();
  comprovacao22 = $(".comprovacao22").val();
  comprovacao23 = $(".comprovacao23").val();
  comprovacao24 = $(".comprovacao24").val();
  referencia1= $(".referencia1").val();
  referencia2 = $(".referencia2").val();
  referencia3 = $(".referencia3").val();
  referencia4 = $(".referencia4").val();
  referencia5 = $(".referencia5").val();
  referencia6 = $(".referencia6").val();
  referencia7= $(".referencia7").val();
  referencia8 = $(".referencia8").val();
  referencia9 = $(".referencia9").val();
  referencia10 = $(".referencia10").val();
  referencia11 = $(".referencia11").val();
  referencia12 = $(".referencia12").val();
  referencia13= $(".referencia13").val();
  referencia14 = $(".referencia14").val();
  referencia15 = $(".referencia15").val();
  referencia16 = $(".referencia16").val();
  referencia17 = $(".referencia17").val();
  referencia18 = $(".referencia18").val();
  referencia19= $(".referencia19").val();
  referencia20 = $(".referencia20").val();
  referencia21 = $(".referencia21").val();
  referencia22 = $(".referencia22").val();
  referencia23 = $(".referencia23").val();
  referencia24 = $(".referencia24").val();

  value1 = $("#argumento_um").val().length; 
  value2 = $("#introducao1").val().length; 
  value3 = $("#introducao4").val().length;
  value4 = $("#argumento_sete").val().length; 
  value5 = $("#introducao8").val().length; 
  value6 = $("#introducao11").val().length; 
  value7 = $("#argumento_dois").val().length;
  value8 = $("#argumento_tres").val().length;
  value9 = $("#argumento_quatro").val().length;
  value10 = $("#argumento_cinco").val().length;
  value11 = $("#argumento_seis").val().length;
  value12 = $("#argumento_oito").val().length;
  value13 = $("#argumento_nove").val().length;
  value14 = $("#argumento_dez").val().length;
  value15 = $("#argumento_onze").val().length;
  value16 = $("#argumento_doze").val().length;



  console.log(argumento_um)
  console.log(argumento_dois)
  console.log(argumento_tres)
  console.log(argumento_quatro)
  console.log(argumento_cinco)
  console.log(argumento_seis)

  resposta10 = $(this).attr("id").substring(8,10);
  elemento20 = $(this).attr('class').split(' ')[1].substring(0,8);
  elemento30 = $(this).attr('class').split(' ')[2];

  console.log(resposta10);
  console.log(elemento20);
  console.log(elemento30);


  if (elemento30=='um') {
    $(".um").removeClass('ativo');
  }
  if (elemento30=='dois') {
    $(".dois").removeClass('ativo');
  }
  if (elemento30=='tres') {
    $(".tres").removeClass('ativo');
  }

  $("."+elemento20).removeClass('ativo');
  $("."+elemento30).removeClass('ativo');
  $(".bolinha"+resposta10).addClass('ativo');



  if (elemento20=="escolha4") {
      teste1 = elemento30;
  }

    if (elemento20=="escolha5") {
      teste2 = elemento30;
  }

      if (elemento20=="escolha6") {
      teste3 = elemento30;
  }

      if (elemento20=="escolha7") {
      teste4 = elemento30;
  }

      if (elemento20=="escolha8") {
      teste5 = elemento30;
  }

      if (elemento20=="escolha9") {
      teste6 = elemento30;
  }



  if (!$('.escolha4').hasClass('ativo')) {
    $(".bolinha16").addClass('ativo');
  }
  if (!$('.escolha5').hasClass('ativo')) {
    $(".bolinha20").addClass('ativo');
  }
  if (!$('.escolha6').hasClass('ativo')) {
    $(".bolinha24").addClass('ativo');
  }
  if (!$('.escolha7').hasClass('ativo')) {
    $(".bolinha28").addClass('ativo');
  }
  if (!$('.escolha8').hasClass('ativo')) {
    $(".bolinha32").addClass('ativo');
  }
  if (!$('.escolha9').hasClass('ativo')) {
    $(".bolinha36").addClass('ativo');
  }
count();
});

function verifica(){
    if($(".bolinha").hasClass("ativo")) {
    $(".ativo").trigger('click');
}
}
//****************************************************//
  $('.troca').click(function() {
  var valor = $('#introducao90').val();
  var valor2 = $('#introducao100').val();
  $('#introducao100').val('');
  $('#introducao90').val('');
  $('#introducao100').val(valor);
  $('#introducao90').val(valor2);
})

 $('.troca2').click(function() {
  var valor3 = $('#introducao100').val();
  var valor4 = $('#introducao110').val();
  $('#introducao110').val('');
  $('#introducao100').val('');
  $('#introducao110').val(valor3);
  $('#introducao100').val(valor4);
})


$('.troca3').click(function() {
  var valor5 = $('#aintroducao90').val();
  var valor6 = $('#aintroducao100').val();
  $('#aintroducao100').val('');
  $('#aintroducao90').val('');
  $('#aintroducao100').val(valor5);
  $('#aintroducao90').val(valor6);
})

 $('.troca4').click(function() {
  var valor7 = $('#aintroducao100').val();
  var valor8 = $('#aintroducao110').val();
  $('#aintroducao110').val('');
  $('#aintroducao100').val('');
  $('#aintroducao110').val(valor7);
  $('#aintroducao100').val(valor8);
})

 
//**************************************************$('#introducao100').show();***************************************
$('#trocabotao').click(function() {
    verifica();
    if (teste1=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_um);
    $('.span_1').text(comprovacao1);
    $('.span_2').text(comprovacao2);
    $('.span_3').text(comprovacao3);
    $('.span_4').text(comprovacao4);
    $('.span_5').text(referencia1);
    $('.span_6').text(referencia2);
    $('.span_7').text(referencia3);
    $('.span_8').text(referencia4);
    }
    if (teste1=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_um);
    $('.span_9').text(comprovacao1);
    $('.span_10').text(comprovacao2);
    $('.span_11').text(comprovacao3);
    $('.span_12').text(comprovacao4);
    $('.span_13').text(referencia1);
    $('.span_14').text(referencia2);
    $('.span_15').text(referencia3);
    $('.span_16').text(referencia4);
    }
    if (teste1=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_um);
    $('.span_17').text(comprovacao1);
    $('.span_18').text(comprovacao2);
    $('.span_19').text(comprovacao3);
    $('.span_20').text(comprovacao4);
    $('.span_21').text(referencia1);
    $('.span_22').text(referencia2);
    $('.span_23').text(referencia3);
    $('.span_24').text(referencia4);
    }

    if (teste2=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_dois);
    $('.span_1').text(comprovacao5);
    $('.span_2').text(comprovacao6);
    $('.span_3').text(comprovacao7);
    $('.span_4').text(comprovacao8);
    $('.span_5').text(referencia5);
    $('.span_6').text(referencia6);
    $('.span_7').text(referencia7);
    $('.span_8').text(referencia8);
    }
    if (teste2=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_dois);
    $('.span_9').text(comprovacao5);
    $('.span_10').text(comprovacao6);
    $('.span_11').text(comprovacao7);
    $('.span_12').text(comprovacao8);
    $('.span_13').text(referencia5);
    $('.span_14').text(referencia6);
    $('.span_15').text(referencia7);
    $('.span_16').text(referencia8);
    }
    if (teste2=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_dois);
    $('.span_17').text(comprovacao5);
    $('.span_18').text(comprovacao6);
    $('.span_19').text(comprovacao7);
    $('.span_20').text(comprovacao8);
    $('.span_21').text(referencia5);
    $('.span_22').text(referencia6);
    $('.span_23').text(referencia7);
    $('.span_24').text(referencia8);
    }

    if (teste3=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_tres);
    $('.span_1').text(comprovacao9);
    $('.span_2').text(comprovacao10);
    $('.span_3').text(comprovacao11);
    $('.span_4').text(comprovacao12);
    $('.span_5').text(referencia9);
    $('.span_6').text(referencia10);
    $('.span_7').text(referencia11);
    $('.span_8').text(referencia12);
    }
    if (teste3=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_tres);
    $('.span_9').text(comprovacao9);
    $('.span_10').text(comprovacao10);
    $('.span_11').text(comprovacao11);
    $('.span_12').text(comprovacao12);
    $('.span_13').text(referencia9);
    $('.span_14').text(referencia10);
    $('.span_15').text(referencia11);
    $('.span_16').text(referencia12);
    }
    if (teste3=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_tres);
    $('.span_17').text(comprovacao9);
    $('.span_18').text(comprovacao10);
    $('.span_19').text(comprovacao11);
    $('.span_20').text(comprovacao12);
    $('.span_21').text(referencia9);
    $('.span_22').text(referencia10);
    $('.span_23').text(referencia11);
    $('.span_24').text(referencia12);
    }

    if (teste4=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_quatro);
    $('.span_1').text(comprovacao13);
    $('.span_2').text(comprovacao14);
    $('.span_3').text(comprovacao15);
    $('.span_4').text(comprovacao16);
    $('.span_5').text(referencia13);
    $('.span_6').text(referencia14);
    $('.span_7').text(referencia15);
    $('.span_8').text(referencia16);
    }
    if (teste4=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_quatro);
    $('.span_9').text(comprovacao13);
    $('.span_10').text(comprovacao14);
    $('.span_11').text(comprovacao15);
    $('.span_12').text(comprovacao16);
    $('.span_13').text(referencia13);
    $('.span_14').text(referencia14);
    $('.span_15').text(referencia15);
    $('.span_16').text(referencia16);
    }
    if (teste4=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_quatro);
    $('.span_17').text(comprovacao13);
    $('.span_18').text(comprovacao14);
    $('.span_19').text(comprovacao15);
    $('.span_20').text(comprovacao16);
    $('.span_21').text(referencia13);
    $('.span_22').text(referencia14);
    $('.span_23').text(referencia15);
    $('.span_24').text(referencia16);
    }

    if (teste5=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_cinco);
    $('.span_1').text(comprovacao17);
    $('.span_2').text(comprovacao18);
    $('.span_3').text(comprovacao19);
    $('.span_4').text(comprovacao20);
    $('.span_5').text(referencia17);
    $('.span_6').text(referencia18);
    $('.span_7').text(referencia19);
    $('.span_8').text(referencia20);
    }
    if (teste5=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_cinco);
    $('.span_9').text(comprovacao17);
    $('.span_10').text(comprovacao18);
    $('.span_11').text(comprovacao19);
    $('.span_12').text(comprovacao20);
    $('.span_13').text(referencia17);
    $('.span_14').text(referencia18);
    $('.span_15').text(referencia19);
    $('.span_16').text(referencia20);
    }
    if (teste5=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_cinco);
    $('.span_17').text(comprovacao17);
    $('.span_18').text(comprovacao18);
    $('.span_19').text(comprovacao19);
    $('.span_20').text(comprovacao20);
    $('.span_21').text(referencia17);
    $('.span_22').text(referencia18);
    $('.span_23').text(referencia19);
    $('.span_24').text(referencia20);
    }

    if (teste6=="um") {
    $('#caixa_argumento1').show();
    $('#copia_argumento_um').text(argumento_seis);
    $('.span_1').text(comprovacao21);
    $('.span_2').text(comprovacao22);
    $('.span_3').text(comprovacao23);
    $('.span_4').text(comprovacao24);
    $('.span_5').text(referencia21);
    $('.span_6').text(referencia22);
    $('.span_7').text(referencia23);
    $('.span_8').text(referencia24);
    }
    if (teste6=="dois") {
    $('#caixa_argumento2').show();
    $('#copia_argumento_dois').text(argumento_seis);
    $('.span_9').text(comprovacao21);
    $('.span_10').text(comprovacao22);
    $('.span_11').text(comprovacao23);
    $('.span_12').text(comprovacao24);
    $('.span_13').text(referencia21);
    $('.span_14').text(referencia22);
    $('.span_15').text(referencia23);
    $('.span_16').text(referencia24);
    }
    if (teste6=="tres") {
    $('#caixa_argumento3').show();
    $('#copia_argumento_tres').text(argumento_seis);
    $('.span_17').text(comprovacao21);
    $('.span_18').text(comprovacao22);
    $('.span_19').text(comprovacao23);
    $('.span_20').text(comprovacao24);
    $('.span_21').text(referencia21);
    $('.span_22').text(referencia22);
    $('.span_23').text(referencia23);
    $('.span_24').text(referencia24);
    }

  var introducao1 = document.getElementById("introducao1").value;
  var introducao2 = document.getElementById("introducao2").value;
  var introducao3 = document.getElementById("introducao3").value;
  var introducao4 = document.getElementById("introducao4").value;
  var introducao5 = document.getElementById("introducao5").value;
  var introducao6 = document.getElementById("introducao6").value;
  var introducao7 = document.getElementById("introducao7").value;

  console.log(introducao1)
  console.log(introducao2)
  console.log(introducao3)
  console.log(introducao4)
  console.log(introducao5)
  console.log(introducao6)
  console.log(introducao7)

   if (introducao1!=0) {
    $('#copia_introducao1').text(introducao1);

  }else{
    $('#copia_introducao1').text("");
  }

   if (introducao2!=0) {
    $('#copia_introducao2').text(introducao2);
  }else{
    $('#copia_introducao2').text("");
  }
   if (introducao3!=0) {
    $('#copia_introducao3').text(introducao3);
  }else{
    $('#copia_introducao3').text("");
  }
   if (introducao4!=0) {
    $('#copia_introducao4').text(introducao4);
  }else{
    $('#copia_introducao4').text("");
  }
   if (introducao5!=0) {
    $('#copia_introducao5').text(introducao5);
  }else{
    $('#copia_introducao5').text("");
  }
   if (introducao6!=0) {
    $('#copia_introducao6').text(introducao6);
  }else{
    $('#copia_introducao6').text("");
  }
   if (introducao7!=0) {
    $('#copia_introducao7').text(introducao7);
  }else{
    $('#copia_introducao7').text("");
  }

});
//*****************************************************************************************
  var comprovacao25 = $(".comprovacao25").val();
  var comprovacao26 = $(".comprovacao26").val();
  var comprovacao27 = $(".comprovacao27").val();
  var comprovacao28 = $(".comprovacao28").val();
  var comprovacao29 = $(".comprovacao29").val();
  var comprovacao30 = $(".comprovacao30").val();
  var comprovacao31 = $(".comprovacao31").val();
  var comprovacao32 = $(".comprovacao32").val();
  var comprovacao33 = $(".comprovacao33").val();
  var comprovacao34 = $(".comprovacao34").val();
  var comprovacao35 = $(".comprovacao35").val();
  var comprovacao36 = $(".comprovacao36").val();
  var comprovacao37 = $(".comprovacao37").val();
  var comprovacao38 = $(".comprovacao38").val();
  var comprovacao39 = $(".comprovacao39").val();
  var comprovacao40 = $(".comprovacao40").val();
  var comprovacao41 = $(".comprovacao41").val();
  var comprovacao42 = $(".comprovacao42").val();
  var comprovacao43 = $(".comprovacao43").val();
  var comprovacao44 = $(".comprovacao44").val();
  var comprovacao45 = $(".comprovacao45").val();
  var comprovacao46 = $(".comprovacao46").val();
  var comprovacao47 = $(".comprovacao47").val();
  var comprovacao48 = $(".comprovacao48").val();
 var referencia25 = $(".referencia25").val();
 var referencia26 = $(".referencia26").val();
 var referencia27 = $(".referencia27").val();
 var referencia28 = $(".referencia28").val();
 var referencia29 = $(".referencia29").val();
 var referencia30 = $(".referencia30").val();
 var referencia31 = $(".referencia31").val();
 var referencia32 = $(".referencia32").val();
 var referencia33 = $(".referencia33").val();
 var referencia34 = $(".referencia34").val();
 var referencia35 = $(".referencia35").val();
 var referencia36 = $(".referencia36").val();
 var referencia37 = $(".referencia37").val();
 var referencia38 = $(".referencia38").val();
 var referencia39 = $(".referencia39").val();
 var referencia40 = $(".referencia40").val();
 var referencia41 = $(".referencia41").val();
 var referencia42 = $(".referencia42").val();
 var referencia43 = $(".referencia43").val();
 var referencia44 = $(".referencia44").val();
 var referencia45 = $(".referencia45").val();
 var referencia46 = $(".referencia46").val();
 var referencia47 = $(".referencia47").val();
 var referencia48 = $(".referencia48").val();



$(".grupo3").click(function() {

  argumento_sete = $("#argumento_sete").val();
  argumento_oito = $("#argumento_oito").val();
  argumento_nove = $("#argumento_nove").val();
  argumento_dez = $("#argumento_dez").val();
  argumento_onze = $("#argumento_onze").val();
  argumento_doze = $("#argumento_doze").val();

  comprovacao25 = $(".comprovacao25").val();
  comprovacao26 = $(".comprovacao26").val();
  comprovacao27 = $(".comprovacao27").val();
  comprovacao28 = $(".comprovacao28").val();
  comprovacao29 = $(".comprovacao29").val();
  comprovacao30 = $(".comprovacao30").val();
  comprovacao31 = $(".comprovacao31").val();
  comprovacao32 = $(".comprovacao32").val();
  comprovacao33 = $(".comprovacao33").val();
  comprovacao34 = $(".comprovacao34").val();
  comprovacao35 = $(".comprovacao35").val();
  comprovacao36 = $(".comprovacao36").val();
  comprovacao37 = $(".comprovacao37").val();
  comprovacao38 = $(".comprovacao38").val();
  comprovacao39 = $(".comprovacao39").val();
  comprovacao40 = $(".comprovacao40").val();
  comprovacao41 = $(".comprovacao41").val();
  comprovacao42 = $(".comprovacao42").val();
  comprovacao43 = $(".comprovacao43").val();
  comprovacao44 = $(".comprovacao44").val();
  comprovacao45 = $(".comprovacao45").val();
  comprovacao46 = $(".comprovacao46").val();
  comprovacao47 = $(".comprovacao47").val();
  comprovacao48 = $(".comprovacao48").val();
  referencia25 = $(".referencia25").val();
  referencia26 = $(".referencia26").val();
  referencia27 = $(".referencia27").val();
  referencia28 = $(".referencia28").val();
  referencia29 = $(".referencia29").val();
  referencia30 = $(".referencia30").val();
  referencia31 = $(".referencia31").val();
  referencia32 = $(".referencia32").val();
  referencia33 = $(".referencia33").val();
  referencia34 = $(".referencia34").val();
  referencia35 = $(".referencia35").val();
  referencia36 = $(".referencia36").val();
  referencia37 = $(".referencia37").val();
  referencia38 = $(".referencia38").val();
  referencia39 = $(".referencia39").val();
  referencia40 = $(".referencia40").val();
  referencia41 = $(".referencia41").val();
  referencia42 = $(".referencia42").val();
  referencia43 = $(".referencia43").val();
  referencia44 = $(".referencia44").val();
  referencia45 = $(".referencia45").val();
  referencia46 = $(".referencia46").val();
  referencia47 = $(".referencia47").val();
  referencia48 = $(".referencia48").val();

  console.log(argumento_sete)
  console.log(argumento_oito)
  console.log(argumento_nove)
  console.log(argumento_dez)
  console.log(argumento_onze)
  console.log(argumento_doze)

  resposta15 = $(this).attr("id").substring(8,10);
  elemento25 = $(this).attr('class').split(' ')[1].substring(0,9);
  elemento35 = $(this).attr('class').split(' ')[2];
      console.log(resposta15);
      console.log(elemento25);
      console.log(elemento35);
  if (elemento35=='um') {
    $(".um").removeClass('ativo');
  }
  if (elemento35=='dois') {
    $(".dois").removeClass('ativo');
  }
  if (elemento35=='tres') {
    $(".tres").removeClass('ativo');
  }

  $("."+elemento25).removeClass('ativo');
  $("."+elemento35).removeClass('ativo');
  $(".bolinha"+resposta15).addClass('ativo');


if (!$('.escolha40').hasClass('ativo')) {
    $(".bolinha40").addClass('ativo');
  }
  if (!$('.escolha50').hasClass('ativo')) {
    $(".bolinha44").addClass('ativo');
  }
  if (!$('.escolha60').hasClass('ativo')) {
    $(".bolinha48").addClass('ativo');
  }
  if (!$('.escolha70').hasClass('ativo')) {
    $(".bolinha52").addClass('ativo');
  }
  if (!$('.escolha80').hasClass('ativo')) {
    $(".bolinha56").addClass('ativo');
  }
  if (!$('.escolha90').hasClass('ativo')) {
    $(".bolinha60").addClass('ativo');
  }


    if (elemento25=="escolha40") {
      teste7 = elemento35;
  }

    if (elemento25=="escolha50") {
      teste8 = elemento35;
  }

      if (elemento25=="escolha60") {
      teste9 = elemento35;
  }

      if (elemento25=="escolha70") {
      teste10 = elemento35;
  }

      if (elemento25=="escolha80") {
      teste11 = elemento35;
  }

      if (elemento25=="escolha90") {
      teste12 = elemento35;
  }

count();
});




//************************teste*******************************//
  $("#trocabotao2").click(function() {
 verifica();
 if (teste7=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_sete);
    $('.aspan_1').text(comprovacao25);
    $('.aspan_2').text(comprovacao26);
    $('.aspan_3').text(comprovacao27);
    $('.aspan_4').text(comprovacao28);
    $('.aspan_5').text(referencia25);
    $('.aspan_6').text(referencia26);
    $('.aspan_7').text(referencia27);
    $('.aspan_8').text(referencia28);
    }
    if (teste7=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_sete);
    $('.aspan_9').text(comprovacao25);
    $('.aspan_10').text(comprovacao26);
    $('.aspan_11').text(comprovacao27);
    $('.aspan_12').text(comprovacao28);
    $('.aspan_13').text(referencia25);
    $('.aspan_14').text(referencia26);
    $('.aspan_15').text(referencia27);
    $('.aspan_16').text(referencia28);
    }
    if (teste7=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_sete);
    $('.aspan_17').text(comprovacao25);
    $('.aspan_18').text(comprovacao26);
    $('.aspan_19').text(comprovacao27);
    $('.aspan_20').text(comprovacao28);
    $('.aspan_21').text(referencia25);
    $('.aspan_22').text(referencia26);
    $('.aspan_23').text(referencia27);
    $('.aspan_24').text(referencia28);
    }

    if (teste8=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_oito);
    $('.aspan_1').text(comprovacao29);
    $('.aspan_2').text(comprovacao30);
    $('.aspan_3').text(comprovacao31);
    $('.aspan_4').text(comprovacao32);
    $('.aspan_5').text(referencia29);
    $('.aspan_6').text(referencia30);
    $('.aspan_7').text(referencia31);
    $('.aspan_8').text(referencia32);
    }
    if (teste8=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_oito);
    $('.aspan_9').text(comprovacao29);
    $('.aspan_10').text(comprovacao30);
    $('.aspan_11').text(comprovacao31);
    $('.aspan_12').text(comprovacao32);
    $('.aspan_13').text(referencia29);
    $('.aspan_14').text(referencia30);
    $('.aspan_15').text(referencia31);
    $('.aspan_16').text(referencia32);
    }
    if (teste8=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_oito);
    $('.aspan_17').text(comprovacao29);
    $('.aspan_18').text(comprovacao30);
    $('.aspan_19').text(comprovacao31);
    $('.aspan_20').text(comprovacao32);
    $('.aspan_21').text(referencia29);
    $('.aspan_22').text(referencia30);
    $('.aspan_23').text(referencia31);
    $('.aspan_24').text(referencia32);
    }

    if (teste9=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_nove);
    $('.aspan_1').text(comprovacao33);
    $('.aspan_2').text(comprovacao34);
    $('.aspan_3').text(comprovacao35);
    $('.aspan_4').text(comprovacao36);
    $('.aspan_5').text(referencia33);
    $('.aspan_6').text(referencia34);
    $('.aspan_7').text(referencia35);
    $('.aspan_8').text(referencia36);
    }
    if (teste9=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_nove);
    $('.aspan_9').text(comprovacao33);
    $('.aspan_10').text(comprovacao34);
    $('.aspan_11').text(comprovacao35);
    $('.aspan_12').text(comprovacao36);
    $('.aspan_13').text(referencia33);
    $('.aspan_14').text(referencia34);
    $('.aspan_15').text(referencia35);
    $('.aspan_16').text(referencia36);
    }
    if (teste9=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_nove);
    $('.aspan_17').text(comprovacao33);
    $('.aspan_18').text(comprovacao34);
    $('.aspan_19').text(comprovacao35);
    $('.aspan_20').text(comprovacao36);
    $('.aspan_21').text(referencia33);
    $('.aspan_22').text(referencia34);
    $('.aspan_23').text(referencia35);
    $('.aspan_24').text(referencia36);
    }

    if (teste10=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_dez);
    $('.aspan_1').text(comprovacao37);
    $('.aspan_2').text(comprovacao38);
    $('.aspan_3').text(comprovacao39);
    $('.aspan_4').text(comprovacao40);
    $('.aspan_5').text(referencia37);
    $('.aspan_6').text(referencia38);
    $('.aspan_7').text(referencia39);
    $('.aspan_8').text(referencia40);
    }
    if (teste10=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_dez);
    $('.aspan_9').text(comprovacao37);
    $('.aspan_10').text(comprovacao38);
    $('.aspan_11').text(comprovacao39);
    $('.aspan_12').text(comprovacao40);
    $('.aspan_13').text(referencia37);
    $('.aspan_14').text(referencia38);
    $('.aspan_15').text(referencia39);
    $('.aspan_16').text(referencia40);
    }
    if (teste10=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_dez);
    $('.aspan_17').text(comprovacao37);
    $('.aspan_18').text(comprovacao38);
    $('.aspan_19').text(comprovacao39);
    $('.aspan_20').text(comprovacao40);
    $('.aspan_21').text(referencia37);
    $('.aspan_22').text(referencia38);
    $('.aspan_23').text(referencia39);
    $('.aspan_24').text(referencia40);
    }

    if (teste11=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_onze);
    $('.aspan_1').text(comprovacao41);
    $('.aspan_2').text(comprovacao42);
    $('.aspan_3').text(comprovacao43);
    $('.aspan_4').text(comprovacao44);
    $('.aspan_5').text(referencia41);
    $('.aspan_6').text(referencia42);
    $('.aspan_7').text(referencia43);
    $('.aspan_8').text(referencia44);
    }
    if (teste11=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_onze);
    $('.aspan_9').text(comprovacao41);
    $('.aspan_10').text(comprovacao42);
    $('.aspan_11').text(comprovacao43);
    $('.aspan_12').text(comprovacao44);
    $('.aspan_13').text(referencia41);
    $('.aspan_14').text(referencia42);
    $('.aspan_15').text(referencia43);
    $('.aspan_16').text(referencia44);
    }
    if (teste11=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_onze);
    $('.aspan_17').text(comprovacao41);
    $('.aspan_18').text(comprovacao42);
    $('.aspan_19').text(comprovacao43);
    $('.aspan_20').text(comprovacao44);
    $('.aspan_21').text(referencia41);
    $('.aspan_22').text(referencia42);
    $('.aspan_23').text(referencia43);
    $('.aspan_24').text(referencia44);
    }

    if (teste12=="um") {
    $('#acaixa_argumento1').show();
    $('#acopia_argumento_um').text(argumento_doze);
    $('.aspan_1').text(comprovacao45);
    $('.aspan_2').text(comprovacao46);
    $('.aspan_3').text(comprovacao47);
    $('.aspan_4').text(comprovacao48);
    $('.aspan_5').text(referencia45);
    $('.aspan_6').text(referencia46);
    $('.aspan_7').text(referencia47);
    $('.aspan_8').text(referencia48);
    }
    if (teste12=="dois") {
    $('#acaixa_argumento2').show();
    $('#acopia_argumento_dois').text(argumento_doze);
    $('.aspan_9').text(comprovacao45);
    $('.aspan_10').text(comprovaca46);
    $('.aspan_11').text(comprovacao47);
    $('.aspan_12').text(comprovacao48);
    $('.aspan_13').text(referencia45);
    $('.aspan_14').text(referencia46);
    $('.aspan_15').text(referencia47);
    $('.aspan_16').text(referencia48);
    }
    if (teste12=="tres") {
    $('#acaixa_argumento3').show();
    $('#acopia_argumento_tres').text(argumento_doze);
    $('.aspan_17').text(comprovacao45);
    $('.aspan_18').text(comprovacao46);
    $('.aspan_19').text(comprovacao47);
    $('.aspan_20').text(comprovacao48);
    $('.aspan_21').text(referencia45);
    $('.aspan_22').text(referencia46);
    $('.aspan_23').text(referencia47);
    $('.aspan_24').text(referencia48);
    }

  var introducao8 = document.getElementById("introducao8").value;
  var introducao9 = document.getElementById("introducao9").value;
  var introducao10 = document.getElementById("introducao10").value;
  var introducao11 = document.getElementById("introducao11").value;
  var introducao12 = document.getElementById("introducao12").value;
  var introducao13 = document.getElementById("introducao13").value;
  var introducao14 = document.getElementById("introducao14").value;

  console.log(introducao8)
  console.log(introducao9)
  console.log(introducao10)
  console.log(introducao11)
  console.log(introducao12)
  console.log(introducao13)
  console.log(introducao14)


  console.log(argumento_sete)
  console.log(argumento_oito)
  console.log(argumento_nove)
  console.log(argumento_dez)
  console.log(argumento_onze)
  console.log(argumento_doze)


   if (introducao8!=0) {
    $('#acopia_introducao1').text(introducao8);
  }else{
    $('#acopia_introducao1').text("");
  }

   if (introducao9!=0) {
    $('#acopia_introducao2').text(introducao9);
  }else{
    $('#acopia_introducao2').text("");
  }
   if (introducao10!=0) {
    $('#acopia_introducao3').text(introducao10);
  }else{
    $('#acopia_introducao3').text("");
  }
   if (introducao11!=0) {
    $('#acopia_introducao4').text(introducao11);
  }else{
    $('#acopia_introducao4').text("");
  }
   if (introducao12!=0) {
    $('#acopia_introducao5').text(introducao12);
  }else{
    $('#acopia_introducao5').text("");
  }
   if (introducao13!=0) {
    $('#acopia_introducao6').text(introducao13);
  }else{
    $('#acopia_introducao6').text("");
  }
   if (introducao14!=0) {
    $('#acopia_introducao7').text(introducao14);
  }else{
    $('#acopia_introducao7').text("");
  }

});




//***********************************************************//





$(".botao_aceitar").click(function() {

    $(document).ready (function () {

      $("*[data-teste]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-teste")));
      });

      $("*[data-teste]").on("keyup", function (itm) {
        localStorage.setItem ("item-" + $(this).attr("data-teste"), $(this).val());
      })


      $("*[data-teste2]").each(function () {
        $(this).val(localStorage.getItem("item2-" + $(this).attr("data-teste2")));
      });

      $("*[data-teste2]").on("keyup", function (itm) {
        localStorage.setItem ("item2-" + $(this).attr("data-teste2"), $(this).val());
      })

      $("*[data-teste3]").each(function () {
        $(this).val(localStorage.getItem("item3-" + $(this).attr("data-teste3")));
      });

      $("*[data-teste3]").on("keyup", function (itm) {
        localStorage.setItem ("item3-" + $(this).attr("data-teste3"), $(this).val());
      })
    })
    $(".caixa_cookie").hide();
    $(".aprender").removeClass('desabilita40');
    $(".treinar").removeClass('desabilita40');
    $(".usar").removeClass('desabilita40');
});


$(".botao_recusar").click(function() {
  localStorage.clear();
    $(".caixa_cookie").hide();
    $(".aprender").removeClass('desabilita40');
    $(".treinar").removeClass('desabilita40');
    $(".usar").removeClass('desabilita40');
});

function deleteItems() {
  $('.textarea4').val('');
  $('.textarea3').val('');
  $('.area2').val('');
  $('#trocabotao').addClass('desabilita40');
  $('.bolinha').removeClass('ativo');
  $('.bolinha16').addClass('ativo');
  $('.bolinha20').addClass('ativo');
  $('.bolinha24').addClass('ativo');
  $('.bolinha28').addClass('ativo');
  $('.bolinha32').addClass('ativo');
  $('.bolinha36').addClass('ativo');
  $('#introducao800').val('');
  $('#introducao80').val('');
  $('#introducao90').val('');
  $('#introducao120').val('');
  $('#introducao110').val('');
  $('#introducao100').val('');
}

function deleteItems2() {
  $('.textarea5').val('');
  $('.textarea6').val('');
  $('.area3').val('');
  $('#trocabotao2').addClass('desabilita40');
  $('.bolinha40').addClass('ativo');
  $('.bolinha44').addClass('ativo');
  $('.bolinha48').addClass('ativo');
  $('.bolinha52').addClass('ativo');
  $('.bolinha56').addClass('ativo');
  $('.bolinha60').addClass('ativo');
  $('#aintroducao800').val('');
  $('#aintroducao80').val('');
  $('#aintroducao90').val('');
  $('#aintroducao120').val('');
  $('#aintroducao110').val('');
  $('#aintroducao100').val('');

}


function retorno(){
var campos = $("*[data-teste]");

var vazios = campos.filter(function(){
       return !$(this).val();
   }).length;

   console.log(vazios);
}


function retorno2(){
var campos2 = $("*[data-teste2]");

var vazios2 = campos2.filter(function(){
       return !$(this).val();
   }).length;

   console.log(vazios2);
}


$(".treinar").click(()=>{
retorno()
retorno2()
})

  