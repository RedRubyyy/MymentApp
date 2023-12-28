const frameBlur = $('#form-blur-update');
const formUpdate = $('#form-update');
const formDelete = $('#form-delete');
const formCreate = $('#from-create');

const closeButton_up = $('#close-button-up');
const closeButton_dlt = $('#close-button-dlt');
const closeButton_crt = $('#btn-close-create');

const update_form = new FormPopUp (frameBlur , formUpdate)
    .addAnimation('translateY(-70px)');

const delete_form = new FormPopUp (frameBlur , formDelete)
    .addAnimation('translateY(-70px)');

const create_form = new FormPopUp (frameBlur , formCreate)
    .addAnimation('translateY(-70px)');

const createButton = $('#create-button');

createButton.on('click' , function () {
    create_form.display()
});

closeButton_crt.on('click' , function () {
    create_form.hide()
})


function addListenerButtonOnList () {
    const buttonDeletes = $$('.button-delete');
    const buttonEdits = $$('.button-edit');
    buttonDeletes.forEach(button => {
        button.on('click' , function () {
            const headFormId = $('#id-display-dlt');
            alert('o')
            const headFormName = $('#user-display-dlt');

            const id =this.dataset.id
            const name = this.parentNode.parentNode.children[0].innerHTML;
            const headerForm = delete_form.headFormat({id , name});
            headerForm(headFormId , headFormName , {type : 'value'});
            delete_form.display();
        });
    });

    buttonEdits.forEach(button => {
        button.on('click' , function () {
            const idDisplay = $('#id-display-up');
            const nameDisplay = $('#user-display-up');

            const id = this.dataset.id;
            const name = this.parentNode.parentNode.children[0].innerHTML;
            const headerForm = update_form.headFormat({id , name});
            
            headerForm(idDisplay , nameDisplay , {type : 'value'});
            update_form.display();
        });
    });
};
closeButton_dlt.on('click' , function () {
    delete_form.hide()
})

closeButton_up.on('click' ,  function () {
    update_form.hide()
})

