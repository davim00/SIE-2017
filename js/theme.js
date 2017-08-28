// Dynamic alternating alignment for Homepage intro items
jQuery(document).ready(function(){
  jQuery('.homepage-intro .container .row:nth-child(odd) .intro-col:first-child').addClass( 'col-sm-push-7' );
  jQuery('.homepage-intro .container .row:nth-child(odd) .intro-col:last-child').addClass( 'col-sm-pull-4' );
});
