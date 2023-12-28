class FormPopUp {
    constructor (frame , form , {action = undefined} = {}) {
        this.form = form;
        this.frame = frame;
        this.action = action;
        this.animation = undefined;
    };
    addAnimation = function (animationStyle) {
        this.animation = animationStyle;
        this.form.style.transform = animationStyle;
        return this;
    };
    headFormat = function ({id, name}) {
        return function (Eid , Ename , {type}) {
            if (type == 'content') {
                Eid.innerHTML = id.slice(0 , 10);
                Ename.innerHTML = name;
            }
            if (type == 'value') {
                Eid.value = id;
                Ename.value = name;
            };
            
        };
    };
    display = async function (delay1 = 10 , delay2 = 200) {
        this.frame.clsRemove('d-none');
        await delay(delay1);
        this.frame.style.opacity = 1;
        this.form.clsRemove('d-none')
        await delay(delay2);
        this.form.style.opacity = 1;
        if (this.animation) { this.form.style.transform = 'translateY(0px)'; };
    };
    hide = async function  (delay1 = 200 , delay2 = 300) {
        this.form.style.opacity = 0;
        if (this.animation) { this.form.style.transform = this.animation; };
        await delay (delay1);
        this.frame.style.opacity = 0;
        await delay (delay2);
        this.form.clsAdd('d-none');
        this.frame.clsAdd('d-none');
    };
};