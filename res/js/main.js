// Skills Bars
$(document).ready(function () {
  $(".skill-percent").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-percent"),
      },
      "fast"
    );
  });
});
