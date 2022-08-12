// at the start we must show the letters buttons

// 

const array=[ "A", "B" ," C", " D","E" ,"F" , "G","H" , "I", "J","K" ,"L" , "M", "N", "O", "P", "Q","R","S" ,"T" , "U", "V","W" , "X", "Y", "Z"];



    array.forEach(e =>{
        const button = document.createElement('button')
        button.innerText=e;
    const body = document.querySelector('body');
    body.append(button);
        

        
    })