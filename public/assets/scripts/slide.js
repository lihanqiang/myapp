//menu
$(function(){
  $('li.mainlevel').mousemove(function(event){
    //console.log(1);
    $(this).find('ul').slideDown();//you can give it a speed
    event.stopPropagation();
  });
  $('li.mainlevel').mouseleave(function(event){
    $(this).find('ul').slideUp("fast");
    event.stopPropagation();
  })
});



