Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
   
    
        var tid=0;
        jQuery("div.field--name-body table, div.view-content table").each(function() {
             
            if(jQuery(this).parent("div").hasClass("table-responsive")==false){

                
                jQuery("<div class='table-responsive table_" + tid +"'></div>").insertBefore(jQuery(this));
   //$('.table-responsive').append($(this));
   jQuery('.table_' + tid ).append(this);
   tid++;
            }
            
               
            });
      
    
   
        }
    };
(function ($) { // JavaScript should be compatible with other libraries than jQuery

 
    $(function(){ 
    var url = window.location.href;
    var host = window.location.host;
    
    var base= window.location.origin;
    var lang='en';
    var home=base+'/';
    
    if(lang=="en"){
        var formate="Format";
        var language="English";
        var size="Size";
        var languages="Language";
        var home=base+'/'
    }
    else{
        var formate="à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª";
        var languages="à¤­à¤¾à¤·à¤¾";
        var language="à¤¹à¤¿à¤¨à¥à¤¦à¥€";
        var size="à¤†à¤•à¤¾à¤°";
        var home=base+'/hi'
    }
    
    if(home!==url){
    
    $("div.field--name-body a[href$='.pdf'],div.field--name-body a[href$='.Pdf'],div.field--name-body a[href$='.PDF']").each(function() {
    var pdf="PDF";
    var url = $(this).attr('href');
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(this.hostname == location.hostname){
        links=base+ url;
        $('<span class="newsize file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="pdf-icon"></span>  <span style="font-weight:900" > '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
    }
    
    
    
       
    });
     $("div.field--name-body a[href$='.docx'],div.field--name-body a[href$='.doc'],div.field--name-body a[href$='.DOC'],a[href$='.Doc']").each(function() {
    var docx="docx";
    var url = $(this).attr('href');
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(this.hostname == location.hostname){
        links=base+ url;
    $('<span class="newsize file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="word-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
    }
    
       
    });
    $("div.field--name-body a[href$='.ppt'],div.field--name-body a[href$='.PPT'],div.field--name-body a[href$='.pptx'],div.field--name-body a[href$='.PPTX']").each(function() {
        var ppt="ppt";
        var url = $(this).attr('href');
        var filename = url.substring(url.lastIndexOf('/')+1);
        if(this.hostname == location.hostname){
            links=base+ url;
        $('<span class="newsize file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="ppt-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
        }
        
           
        });
    $("div.field--name-body a[href$='.png'],div.field--name-body a[href$='.PNG'],div.field--name-body a[href$='.jpg'],div.field--name-body a[href$='.JPG'],div.field--name-body a[href$='.JPEG'],div.field--name-body a[href$='.jpeg']").each(function() {
        var png="png";
        var url = $(this).attr('href');
        var filename = url.substring(url.lastIndexOf('/')+1);
        if(this.hostname == location.hostname){
            links=base+ url;
        $('<span class="newsize file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="image-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
        
        }
           
        });  
        $("div.field--name-body a[href$='.zip'],div.field--name-body a[href$='.ZIP'],div.field--name-body a[href$='.RAR'],div.field--name-body a[href$='.rar']").each(function() {
            var zip="zip";
            var url = $(this).attr('href');
            var filename = url.substring(url.lastIndexOf('/')+1);
            if(this.hostname == location.hostname){
                links=base+ url;
            $('<span class="newsize file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="zip-icon"></span>  <span style="font-weight:900" > '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
            }
            
               
            });   
    $("div.field--name-body embed[src$='.pdf'],div.field--name-body embed[src$='.Pdf'],div.field--name-body embed[src$='.PDF'],div.field--name-body embed[src$='.pdf']").each(function() {
        var pdf="PDF";
    var url = $(this).attr('src');
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(this.hostname == location.hostname){
        links=base+ url;
    $('<span class="file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="pdf-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
    }
});
    
    $("div.field--name-body iframe[src$='.pdf'],div.field--name-body iframe[src$='.Pdf'],div.field--name-body iframe[src$='.PDF'],div.field--name-body iframe[src$='.pdf']").each(function() {
        var pdf="PDF";
    var url = $(this).attr('src');
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(this.hostname == location.hostname){
        links=base+ url;
    $('<span class="file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="pdf-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
    }
});
    
    $("div.field--name-body a[href$='.xlsx'],div.field--name-body a[href$='.csv'],div.field--name-body a[href$='.xls']").each(function() {
    var xlsx="xlsx";
    var url = $(this).attr('href');
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(this.hostname == location.hostname){
        links=base+ url;
    $('<span class="file file--mime-application-pdf file--application-pdf"></span><div style="display:inline"> (<span style="font-weight:900"> '+formate+ '</span> - <span  class="excel-icon"></span>  <span style="font-weight:900"> '+size+ '</span> - <span >'+getFileSize(links)+  '</span>)</div>').insertAfter(this);
    }
});
    }
    });
    })(jQuery);
    
    
    function getFileSize(url)
    {
        var fileSize = '';
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false); // false = Synchronous
    
        http.send(null); // it will stop here until this http request is complete
    
        // when we are here, we already have a response, b/c we used Synchronous XHR
    
        if (http.status === 200) {
            fileSize = http.getResponseHeader('content-length');
            //console.log('fileSize = ' + fileSize);
        }
        
        
        
        return formatSizeUnits(fileSize);
    }
    function formatSizeUnits(bytes){
          if      (bytes>=1073741824) {bytes=(bytes/1073741824).toFixed(2)+'GB';}
          else if (bytes>=1048576)    {bytes=(bytes/1048576).toFixed(2)+'MB';}
          else if (bytes>=1024)       {bytes=(bytes/1024).toFixed(2)+'KB';}
          else if (bytes>1)           {bytes=bytes+'bytes';}
          else if (bytes==1)          {bytes=bytes+'byte';}
          else                        {bytes='0byte';}
          return bytes;
    }