function dbAdd(category, id) {
    let storageArray = dbGet(category);
    if (storageArray && storageArray.includes(id)) {
        alert("The Book is already added");
    } else {
        if(!storageArray) {
            storageArray = [] 
        }

        let newStorage = [...storageArray, id];
        localStorage.setItem(category, JSON.stringify(newStorage))
        alert("Book added");
    }
}

function dbGet(category) {
    let data = JSON.parse(localStorage.getItem(category))
    if(data) {
        return data;
    } else {
        return [];
    }
}

export {dbGet, dbAdd};