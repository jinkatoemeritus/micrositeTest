window.addEventListener('message', function(e) {
    try {
      var message = e.data;
      switch (message.subject) {
        case 'lti.hideFrame':
          $("iframe").each(function() {
              var src = $(this).attr('src');
              if(src.includes(message.subsrc) && message.hide){
                  $(this).css( "display", "none" );
                  console.log("Hide success: "+$(this).attr('title'));
              }  
          });
          break;
      }
    } catch(err) {
      console.log(err);
    }
  });






// $( document ).ready(function() {
    
    // for (var i = 0; i < 500; i++){
    //     console.log(i);
    //     $( "#application #wrapper #mydiv" ).css( "display", "none" );
    //     $( "#application #wrapper #uxdiv" ).css( "display", "none" );
    // }


    
    // try {
    //     console.log('try');
    //     $( "#mydiv" ).css( "display", "none" );
    //     $( "#uxdiv" ).css( "display", "none" );
    // } catch (exceptionVar) {
    //     console.log('catch');
    //     // catchStatements
    // } finally {
    //     console.log('final');
    //     // finallyStatements
    // }
// });


