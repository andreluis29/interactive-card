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
    $("#cardNameBackground").text(value);
  });
});
