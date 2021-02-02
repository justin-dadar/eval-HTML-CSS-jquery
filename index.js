// $("form").on("submit", e => {
//   e.preventDefault();
//   if (
//     $("option").val() === [1] || [2] || [3] || [4] ||
//     ([5] && $("textarea").val().length() >= 15)
//   ) {
//     $("form").hide();
//     $(".formulaire").append(
//       '<div class="valid"><p>Votre demande a bien été envoyée! <br>Nous vous répondrons dans les<br>meilleurs délais.</p></div>'
//     );
//   } else {
//     $("textarea").css("border-color", "red");
//   }
// });

$("form").on("submit", e => {
  e.preventDefault();
  if ($("select").val() && $("textarea").val().length >= 15) {
    $("form").hide();
    $(".formulaire").append(
      '<div class="valid"><p>Votre demande a bien été envoyée! <br>Nous vous répondrons dans les<br>meilleurs délais.</p></div>'
    );
  } else if ($("select").val("") && $("textarea").val().length >= 15) {
    $("select").css("border-color", "red");
  } else {
    $("textarea").css("border-color", "red");
    $("select").css("border-color", "red");
  }
});
