$(document).ready(function () {
    $('#button').click(function () {
        var msgAdd = $('input[name=checkListItem]').val();
        
        $('.list').append('<div class="alert alert-primary item" role="alert"><p>' + msgAdd + '</p></div>');
    });
    
    $(document).on('click', '.item', function() {
        $(this).remove();
    });


    $(document).ready(function(){
        $(".btn").click(function(){
            $(".menu").toggleClass(".show");
        });
    });


  

 
    


   
});

