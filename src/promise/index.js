const somethingWilHappen = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('HEY!!!');
        }else{
            reject('WHOOOOPS!!');
        }
    });
};

somethingWilHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWilHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            },3000)
        }else{
            const error = new Error('Ooooo!!');
            reject(error);
        }
    });
}

somethingWilHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWilHappen(), somethingWilHappen2()])
    .then(response => {
        console.log('Array of resulsts', response);
    })
    .catch(err => {
        console.error(err);
    })