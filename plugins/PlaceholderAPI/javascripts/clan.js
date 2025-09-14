var placeholder = '%clans_name_color%'
 
function placeholderCheck() {
    if (placeholder == '') {
        return '&#FB6B08Без клана';
    }
    else {
        return placeholder;
    }
}
 
placeholderCheck()