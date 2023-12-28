function search (datasElement , input) {
    const searchResult = [];
    const notUsed = [];

    const inputLower = input.toLowerCase();
    const inputLength = inputLower.length;
    const datas = [...datasElement];
    sortByUsername(datas);

    datas.map( data => {
        const username = data.dataset.username;
        const usernameSlice = username.slice(0 , inputLength).toLowerCase();

        if (username.toLowerCase() == inputLower) return searchResult.push({data , point : 3});
        if (usernameSlice == inputLower) return searchResult.push({data , point : 2});
        if (username.toLowerCase().includes(inputLower)) return searchResult.push({data , point : 1});
        
        notUsed.push(data);
    });
    searchResult.sort( (a , b ) => b.point - a.point);
    const sortSearch_result = searchResult.map( result => {
        const {data} = result;
        return data;
    });
    return {result : sortSearch_result , notResult : notUsed};
};
function sortByUsername (datas) {
    datas.sort((a, b) => {
        let usernameA = a.dataset.username.toLowerCase();
        let usernameB = b.dataset.username.toLowerCase();
        if (usernameA < usernameB) return -1
        if (usernameA > usernameB) return 1;
        return 0;
    });
};


