import {keys} from '../var.mjs'
const loginKeys = keys['admin-login'];

export function loginMatching (dataSend , database) {
    const sendKeys = Object.keys(dataSend);
    const result = {
        loginData : dataSend,
        status : false,
        message : 'Admin user tidak terdaftar'
    };
    
    if ( !sendKeys.every((key , index ) => key == loginKeys[index]) ){
        return {
            loginData : dataSend,
            status : false,
            message : "Data telah dimodifikasi",
        };
    };
    
    dataLoop : 
    for (let index = 0 ; index < database.length ; index++) {
        let { username , _id , unixcode} = database[index];
        let matchingUser = dataSend.username;
        if (username == matchingUser) {
            const matching = loginKeys.every(key => dataSend[key] == database[index][key])
            if (matching) {
                result.status = true;
                result.message = 'Login berhasil';
                result.loginData._id = _id;
                result.loginData.unixcode =  unixcode; 
                break dataLoop;
            };
            const message = createMessage (dataSend , database[index]); 
            result.message = message;
        };
    };
    return result;
};

function createMessage (dataSend , trueData) {
    let resultMatch = false;

    matchingloop :
    for (let index = 0; index < loginKeys.length; index++) {
        let key = loginKeys[index];
        if (dataSend[key] != trueData[key]) {
            resultMatch = `Gagal login , ${key.toUpperCase()} tidak valid.`;
            break matchingloop ;
        };
        index == 2 ? 
            resultMatch = true : 
            resultMatch = false;
    
    };
    
    return resultMatch;
};