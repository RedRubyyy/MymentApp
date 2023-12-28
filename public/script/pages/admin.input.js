const selectMethod_up = $('#select-method');
const submitBtn_u = $('#submit-up');
const inNominal_up = $('#input-nominal-up');
const inNominal_add = $('#input-frist-savings');

selectMethod_up.on('change' , function () {
    this.value != 'Metode' 
        ? submitBtn_u.disabled = false 
        : submitBtn_u.disabled = true;
});
inNominal_up.on('input' , function () {
    this.value = inputRupiah(this);
});
inNominal_add.on('input' , function () {
    this.value = inputRupiah(this);
});