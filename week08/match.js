function match(selector, element){
    var selectorParts = selector.split(" ").reverse();
    var currentElement = element;
    
    if(!isMatch(currentElement, selectorParts[0])){
        return false;
    } else if (selectorParts.length < 2) {
        return true;
    }

    let matched = false;
    var i = 1;
    for(; i < selectorParts.length;){
        currentElement = currentElement.parentNode;
        if (isMatch(currentElement, selectorParts[i])){
            i++;
        } else {
            break;
        }
    }

    if(i >= selectorParts.length) {
        matched = true;
    }

    return matched;
}
function isMatch(element, selectorPart){
    if(!selectorPart || !element.attributes){
        return false;
    }

    var selectors = selectorPart.split(/(?=[#.])/);

    for(var i = 0; i< selectors.length; i++) {
        if(selectors[i].charAt(0) == "#") {
            var attr = element.getAttribute("id");
            if(!(attr === selectors[i].replace("#", ''))){
                return false;
            }
        } else if(selectors[i].charAt(0) == ".") {
            var attr = element.getAttribute("class");
            if(!(attr === selectors[i].replace(".", ''))){
                return false;
            }
        } else {
            if(!(element.tagName === selectors[i].toUpperCase())) {
                return false;
            }
        }
    }
   
    return true;
}