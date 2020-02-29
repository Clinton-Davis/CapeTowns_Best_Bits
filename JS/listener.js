const myList = document.querySelector('#directionsPanel');
 

/*
1. making a new MO object
2. tell it what to observe
3. what to do with the observed changes/mutatutions
*/
/*1*/
const observer = new MutationObserver(mutations => {
    mutations.forEach(record => {
        console.log(record);

        if (record.type === 'attributes') {
            changepic();
        }else {console.log('No');
    }
    })
    console.log(mutations);
    
/*try to get it to do somethnog*/
});
function changepic() {
    document.getElementById('#back'),innerHTM = 'happy times'
}
/*2*/
observer.observe(myList, {
    attributes:true
});

