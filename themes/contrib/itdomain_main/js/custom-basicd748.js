
jQuery(document).ready( function () {
    if(jQuery("table").hasClass("content_datatable")){
        if(jQuery("table").find('thead').length>0){
          jQuery('.content_datatable').DataTable({ "ordering": false, "pagingType": "full_numbers"});
        }else{
            jQuery('table').prepend(jQuery("<thead></thead>").append(jQuery('table').find("tr:first"))).DataTable({ "ordering": false});
  
        }
    }

} );
