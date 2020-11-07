
$("input[name='no1']").click(function(){
    var qa1val = $("input[name=no1]:checked");
    if(qa1val.val() !=''){
    $('.1btn').attr('disabled',false);
   }
});

$("input[name='no2']").click(function(){
    var qa1val = $("input[name=no2]:checked");
    if(qa1val.val() !=''){
    $('.2btn').attr('disabled',false);
   }
});

