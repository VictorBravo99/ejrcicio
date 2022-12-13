let cont=[0,0,0]; let arr = []; let arr2 = [];

function matriz(n) {
    if(cont[2] < n) {arr[cont[2]]=[]; cont[2]++}
    
    if (n >= 3 && cont[0] < n) { let random = Math.random(); random = random * 9 + 1; random = Math.trunc(random);
        
        if(cont[1] < n){ arr[cont[0]].push(random); cont[1]++} 
        else{ cont[0] ++; cont[1] = 0}
        matriz(n)   
    } return arr
}
console.log(matriz(3));