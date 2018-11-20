var forms = [];

$('.duplicate-sections .form-section').each(function(){
    forms.push($(this).clone());
})

var sectionsCount = 1;

$('body').on('click', '.addsection', function() {
    var template = forms[$(this).data('section')];

    sectionsCount++;

    var section = template.clone().find(':input').each(function(){

        var newId = this.id + sectionsCount;

        $(this).prev().attr('for', newId);

        this.id = newId;

    }).end()

        .appendTo($(this).prev('.duplicate-sections'));
    return false;
});

$('.duplicate-sections').on('click', '.remove', function() {
    $(this).closest('.form-section').fadeOut(300, function(){
        $(this).closest('.form-section').empty();
    });
    return false;
}); 