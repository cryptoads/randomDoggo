$(function(){

$.get('https://dog.ceo/api/breeds/list', function (data) {
    data.message.forEach( function(breed) {
        $('select').append('<option value="'+breed+'">'+breed+'</option>')
    });
});

$('select').change(function () {
    var breeds = $('select').val();
    $.get('https://dog.ceo/api/breed/'+breeds+'/images/random', function(data){
        var image = '<img src='+data.message+'>';
        $('body').append(image);
    })
})

$('button').on('click', function() {
    $(this).html('Generating Doggo....');
     $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var image = '<img src='+data.message+'>';
        $('body').append(image);
        $('button').html('Generate Doggo');
     }); 

})
});