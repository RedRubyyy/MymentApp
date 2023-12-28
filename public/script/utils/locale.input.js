const numeric = '0123456789';
function inputRupiah ( input ) {
    if (!numeric.includes(input.value[input.value.length-1])) return input.value.slice(0 , input.value.length -1);
    const trueValue = Number(input.value.replaceAll('.', '').replace(',00' , ''));
    return trueValue.toLocaleString('id-ID');
};