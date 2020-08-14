import React from "react";

var orig_arr = []
var fin_arr = []


// let step = 0
export var MergeSort = (inp) => {
    fin_arr = []
    orig_arr = []
    // step = 0


    for (let i = 0; i < inp.length; i++) {
        let sum = inp[i]

        let integer = parseInt(sum, 10)
        orig_arr.push(integer)
    }

    makeTableRow(orig_arr)

    let arr = orig_arr.map(num => [num]);

    let curr_size = arr[0].length

    while (arr.length > 1) {
        const oddNumbered = arr.length % 2 !== 0;
        let temp = [];

        for (let i = 0 ; i < arr.length; i += 2) {
            let a = arr[i];
            let b = arr[i + 1];

            if (oddNumbered && i === (arr.length - 3)) {
                b = merge(b, arr[i + 2]);
                i++;
            }

            // console.log(i)
            console.log("arr0" + arr[0].length)
            console.log("curr_size" + curr_size)

            if (arr[0].length > curr_size){
                
                curr_size = arr[0].length
                let j = 0
                for(let k = 0; k < arr.length;k++){
                    console.log("HERE")
                    for(let p = 0; p< arr[k].length; p++){
                        orig_arr[j] = arr[k][p]
                        j++
                        
                    }
                    makeTableRow(orig_arr)
                }
                
    
            }
            
            

            let curr = merge(a, b)


            temp.push(curr);

      
        }

        arr = temp;
        
        
        
    }
    makeTableRow(arr[0])

    return (fin_arr)
}



function merge(arr1, arr2) {
    
    console.log(arr1)
    console.log(arr2)
    
    // makeTableRow(arr1)
    // makeTableRow(arr2)
    
    const merged = [];
    let j = 0;
    let k = 0;
    while (merged.length !== (arr1.length + arr2.length)) {
        if (arr2[k] === undefined || arr1[j] <= arr2[k]) {
            merged.push(arr1[j]);
            j++;
        } else if (arr1[j] === undefined || arr1[j] > arr2[k]) {
            merged.push(arr2[k]);
            k++;
        }
    }
    // console.log(merged)
    // if(step >= orig_arr.length){
    //     step = 0;
    // }

    // for (let k = 0; k < merged.length; k++){
    //     orig_arr[step] = merged[k]
    //     step ++
    // }
    
    

    return merged;
}

function makeTableRow(arr) {

    var arr_new = []

    for (let i = 0; i < arr.length; i++) {
        arr_new.push(<td>{arr[i]}</td>)
    }

    fin_arr.push(<tr>{arr_new}</tr>)


}