editors = {};
var iterator_lang = ["css", "html", "python"];
for (var lang_iterator_index=0; lang_iterator_index < iterator_lang.length; lang_iterator_index++) {
    var lang = iterator_lang[lang_iterator_index];
    editor = ace.edit((lang + "-editor"));
    editors[lang] = editor;
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode(("ace/mode/" + lang));
}
var compile = function() {
    jQuery.ajax({url:"/compile",type:"POST",data:{css:editors["css"].getValue(),html:editors["html"].getValue(),python:editors["python"].getValue()}});
    jQuery("iframe").src = "/compiled";
};
jQuery('[value="compile"]').click(compile);
