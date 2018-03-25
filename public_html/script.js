$(document).ready(function(){



  $("form").submit(function(e){
    e.preventDefault();
  $.ajax({
    url:"/api:user",
    type:"POST",
    data:{
         id : $("#id").val(),
         first_name:$("#firstname").val(),
         last_name:$("#lastname").val()
    },
    success:function(res){
      console.log(res)
    }
  })
  })
});
