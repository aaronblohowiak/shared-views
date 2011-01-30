$(function(){
  color = $('#color');
  
  $('.next').bind('click', function(){
    $.get('/random_color.json', function(data){
      color.html($templates.render('color_detail', data));
    });
  })
})
