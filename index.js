$(function(){

$.get('https://dog.ceo/api/breeds/list');

$('button').on('click', function() {
    $(this).html('Generating Doggo....');
     $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var image = '<img src='+data.message+'>';
        $('body').append(image);
        $('button').html('Generate Doggo');
     }); 

})
});