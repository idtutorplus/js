//Global setting
Config.maxThreadDepth = 6;
var Cur_Cform_Hdr = '.comment_form';
var Cur_Cform_Url = $('#comment-editor')
    .attr('src');

cur_url = window.location.href;
search_formid = '#comment-form_';
search_index = cur_url.indexOf(
    search_formid);
if (search_index != -1) {
    ret_id = cur_url.substring(
        search_index + search_formid.length);
    Display_Reply_Form('#rc' + ret_id)
}
for (var i = 0; i < Items.length; i++) {
    if ('parentId' in Items[i]) {
        var par_id = Items[i].parentId;
        var par_level = parseInt($('#c' +
                par_id + ':first')
            .attr('level'));
        $('#c' + par_id +
            ' .comment_child:first')
            .html(function (index, oldhtml) {
                var child_id = Items[i].id;
                if (par_level >= Config.maxThreadDepth) {
                    $('#c' + child_id +
                        ':first .comment_reply')
                        .remove()
                }
                var child_html = $('#c' + child_id +
                    ':first')
                    .html();
                child_html =
                    '<div class="comment_wrap" id="c' +
                    child_id + '" level="' + (
                        par_level + 1) + '">' + child_html +
                    '</div>';
                $('#c' + child_id)
                    .remove();
                return (oldhtml + child_html)
            })
    }
}      
