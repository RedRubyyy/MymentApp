export async function executeControl (treads , type) {
    try {
        await treads;
        return {
            message : `Data berhasil di${type}.`,
            status : true,
        };
    } catch (error) {
        return {
            message : `Data gagal di${type}.`,
            status : false
        };
    };
};