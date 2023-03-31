/*--------------------
|
| TinyMCE default config
|
--------------------*/

var getConfig = function(options) {
    var isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;
    
    var baseTinymceConfig = {
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        toolbar_sticky_offset: isSmallScreen ? 102 : 108,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        importcss_append: true,
        height: 600,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image table',
        content_css: 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        selector: 'textarea.richTextBox',
        base_url: $('meta[name="assets-path"]').attr('content')+'?path=js/',
        skin: 'oxide',
        min_height: 600,
        resize: true,
        extended_valid_elements : 'input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
        relative_urls: false, // Necessary so uploaded images don't get a relative path but an URL instead.
        remove_script_host: false,
        file_picker_types: 'image',
        file_picker_callback: (callback, value, meta) => {
            if (meta.filetype == 'image') {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                input.onchange = function () {
                    var formdata = new FormData();
                    var csrf = document.querySelector('meta[name="csrf-token"]').content;
                    formdata.append('file', this.files[0]);
                    formdata.append('upload_path', '/tinymce/');
                    formdata.append('_token', csrf);
                    // Show loader
                    $('#voyager-loader').css('z-index', 10000);
                    $('#voyager-loader').fadeIn();
                    $.ajax({
                        type: 'post',
                        url: '/admin/tinymce/upload',
                        data: formdata,
                        enctype: 'multipart/form-data',
                        processData: false,
                        contentType: false,
                        cache: false,
                    })
                    .done((result) => {
                        callback(result.url);
                    })
                    .always(() => {
                        $('#voyager-loader').fadeOut();
                        $('#voyager-loader').css('z-index', 99);
                    });
                }
                input.click();
            }
        },
        image_title: true,
        init_instance_callback: function (editor) {
            if (typeof tinymce_init_callback !== "undefined") {
                tinymce_init_callback(editor);
            }
        },
        setup: function (editor) {
            if (typeof tinymce_setup_callback !== "undefined") {
                tinymce_setup_callback(editor);
            }
        }
    };

    return $.extend({}, baseTinymceConfig, options);
}

exports.getConfig = getConfig;
