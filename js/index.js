$("#contact_form").submit(function(e){
    e.preventDefault();
    $(".submit-btn").html('Submitting...');
    setTimeout(()=>{
        afterSubmit();
    },2000);
});

function afterSubmit(){
    $(".submit-btn").html('Send');
    $(".success_msg").removeClass('d-none')
    $('#contact_form')[0].reset();
    setTimeout(()=>{
        $(".success_msg").fadeOut('slow');
    },3000);
}