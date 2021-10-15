$(document).on('click', "button.login", function (e) {
    e.preventDefault();
    var url = "http://isapi.icu-tech.com/icutech-test.dll";
    $('#response').empty();
    console.log($('form[name=ff]').serialize());
    $.post(url, {
      method: 'Login',
      params: $('form[name=ff]').serialize()
    }, function(d) {
        console.log(d);
      if (d.error) {
        $('#response').append(
          $('<h2/>').text('Error:')
        ).append(
          $('<h5/>').text(d.error)
        );
      }
      if (d.ret) {
        $('#response').append(
          $('<h3/>').text('Return:')
        ).append(
          $('<pre/>').text(((typeof d.ret == 'string') ? d.ret : JSON.stringify(d.ret))).css('wordWrap', 'break-word')
        );
      }
      if (d.request && d.response) {
        $('#response').append(
          $('<h4/>').text('Request:')
        ).append(
          $('<pre/>').text(d.request)
        ).append(
          $('<h4/>').text('Response:')
        ).append(
          $('<pre/>').text(d.response)
        )
      } else {}
    });
});