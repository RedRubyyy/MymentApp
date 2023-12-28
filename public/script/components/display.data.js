function displayData (body , type) { 
    switch(type) {
        case 'basic' : {
            return function (list) {
                list.forEach(element => {
                    element.style.display ='table-row';
                    body.appendChild(element)
                });
            }
        } break;
        case 'hide' : {
            return function (list) {
                list.forEach(element => {
                    element.style.display = 'none';
                })
            };
        } break;
    }
};
