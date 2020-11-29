
const checkEmail = (value) => {

    var valid = true;
    
    if (value.indexOf('@') == -1) {valid = false;}
    else {
        var parts = value.split('@');
        var domain = parts[1];
        if (domain.indexOf('.') == -1) {valid = false;}
        else {
            var domainParts = domain.split('.');
            var ext = domainParts[1];
            if (ext.length > 4 || ext.length < 2) {valid = false;}
        }
    }   
    return valid;
}

const validate = (event) => {

    var val = document.getElementsByTagName('input')[0].value
    var valid = checkEmail(val);

    if (!valid) { alert('Not a valid e-mail address');} 
    else { alert('Valid e-mail address');}
}




