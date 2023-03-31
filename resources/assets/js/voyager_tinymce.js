// Theme
import 'tinymce/themes/silver/theme';

  // Plugins
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/preview'; 
import 'tinymce/plugins/importcss'; 
import 'tinymce/plugins/searchreplace'; 
import 'tinymce/plugins/autolink'; 
import 'tinymce/plugins/autosave'; 
import 'tinymce/plugins/save'; 
import 'tinymce/plugins/directionality'; 
import 'tinymce/plugins/visualblocks'; 
import 'tinymce/plugins/visualchars'; 
import 'tinymce/plugins/fullscreen'; 
import 'tinymce/plugins/media'; 
import 'tinymce/plugins/template'; 
import 'tinymce/plugins/codesample'; 
import 'tinymce/plugins/charmap'; 
import 'tinymce/plugins/pagebreak'; 
import 'tinymce/plugins/nonbreaking'; 
import 'tinymce/plugins/anchor'; 
import 'tinymce/plugins/insertdatetime'; 
import 'tinymce/plugins/advlist'; 
import 'tinymce/plugins/wordcount'; 
import 'tinymce/plugins/help'; 
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/quickbars'; 


$(document).ready(function(){

  $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });
});
