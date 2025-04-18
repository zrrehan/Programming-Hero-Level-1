import { ToastContainer, toast } from 'react-toastify';

function dbAdd(category, id) {
    let storageArray = dbGet(category);
    if (storageArray && storageArray.includes(id)) {
        toast.warn("The Book is already added", {
            autoClose: 2000,
        });
    } else {
        if(!storageArray) {
            storageArray = [] 
        }

        let newStorage = [...storageArray, id];
        localStorage.setItem(category, JSON.stringify(newStorage))
        toast.success('The Book has added to the list', {
            autoClose: 2000,
        });
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