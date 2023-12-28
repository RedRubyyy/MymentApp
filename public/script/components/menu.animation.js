function Menu (className ,  ...elements) {
    this.elements = [...elements];
    this.classToggle = className;
}

Menu.prototype.display = async function (delayTime , callback) {
    const className = this.classToggle
    let index = 0;
    
    async function execute (elements) {
        elements[index].clsRemove('d-none');
        await delay(delayTime);
        elements[index].clsRemove(className);
        
        index++;
        if (index == elements.length) {
            elements = elements.reverse()
            return callback()
        }      
        execute(elements);
    };
    await execute(this.elements);
};

Menu.prototype.hide = async function (delayTime , callback) {
    const className = this.classToggle
    let index = 0;
    async function execute (elements) {
        
        
        elements[index].clsAdd(className);
        await delay(delayTime + delayTime *30 / 100);
        index++;
        if  (index == elements.length) {
            elements.forEach(element => {
                element.clsAdd('d-none')
            });
            elements = elements.reverse() 
            return callback()
        } 
        execute(elements);
    };
    await execute(this.elements);
};