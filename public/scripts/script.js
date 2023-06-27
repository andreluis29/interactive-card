$(function () {
  const cardName = $("form input#cardName");
  const cardNumber = $("form input#cardNumber");
  const cardDateMM = $("form input#cardDateMM");
  const cardDateYY = $("form input#cardDateYY");
  const cvc = $("form input#cvc");
 
  $(cardName).on("keyup", (e) => {
    const value = e.target.value;
    $("#cardNameBackground").text(value);
  });
  $(cardNumber).mask('0000 0000 0000 0000');
  $(cardDateMM).mask('00');
  $(cardDateYY).mask('00');
  $(cvc).mask('0000');
  $(cardNumber).on("keyup", (e) => {
    let value = e.target.value;
    $("#cardNumberBackground").text(value);
  });

  $(cardDateMM).on("keyup", (e) => {
    const value = e.target.value;
    $("#cardValidDate").text(value);
  });

  $(cardDateYY).on("keyup", (e) => {
    const value = cardDateMM.val();
    $("#cardValidDate").text(value + "/" + e.target.value);
  });

  $(cvc).on("keyup", (e) => {
    const value = e.target.value;
    $("#cardCvc").text(value);
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    $('main').css('display', 'none');
    $('section').css('display', 'flex');
  });

  $('button[type="button"]').on('click', function() {
    $('main').css('display', 'block');
    $('section').css('display', 'none');
  })

  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      cardNumber: {
        required: true,
      },
      dateYY: {
        required: true,
      },
      dateMM: {
        required: true,
      },
      cvc: {
        required: true,
      }
    },
    messages: {
      name: 'Campo nome sem valor atribuído.',
      cardNumber: 'Número do cartão não informado.',
      dateYY: 'Ano de validade não informado.',
      dateMM: 'Mês de validade não informado.',
      cvc: 'Código de segurança não informado.'
    }
  });
});
