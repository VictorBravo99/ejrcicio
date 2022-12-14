let cont=[0,0,0,0,0]; let arr = []; let arr2 = []; let arr3 = [];

function matriz(n) {
    if(cont[2] < n) {arr[cont[2]]=[]; arr2[cont[2]]=[]; arr3[cont[2]]=[]; cont[2]++}
    
    if (n >= 3 && cont[0] < n) { let random = Math.random(); random = random * 9 + 1; random = Math.trunc(random);
        let random2 = Math.random(); random2 = random2 * 9 + 1; random2 = Math.trunc(random2);
        if(cont[1] < n){ arr[cont[0]].push(random); arr2[cont[0]].push(random2); cont[1]++} 
        else{ cont[0]++; cont[1] = 0}
        matriz(n)   
    } else {sumaMatriz(n)}
}
matriz(3)
console.log(arr);
console.log(arr2);
console.log(arr3);
function sumaMatriz(n) {
    if(cont[3] < n){
        if(cont[4] < n){
        arr3[cont[3]][cont[4]]=arr[cont[3]][cont[4]]+arr2[cont[3]][cont[4]]
        cont[4]++
    } else{  
        cont[4]=0  
        cont[3]++;
        sumaMatriz(n)
    }
    sumaMatriz(n)

    }
 }