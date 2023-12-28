export function check ( Models ) {
    
    return async function (type  , query) {
        switch (type.toLowerCase()) {
            case 'client' : {
                const result = await Models.Client.findOne(query)
                    .then(data => data)
                    .catch(error => false);
                return result;
                
            } break;
            case 'admin' : {
                const result = await Models.Admin.findOne(query)
                    .then(data => data)
                    .catch(error => false);
        
                return result;
            } break;
        }
        
    };

};
