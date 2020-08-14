export var MergeSort = (inp) => {
    var inp_arr = []
    

    for (let i = 0; i < inp.length; i++) {
        let sum = inp[i]

        let integer = parseInt(sum, 10)
        inp_arr.push(integer)
    }
    console.log(inp_arr)

    if (inp_arr.length <= 1) {
        return inp_arr;
      }

    const mid = Math.floor(inp_arr.length / 2);

    const l = inp_arr.slice(0, mid);
    const r = inp_arr.slice(mid); 
        
    var ret =  merge(MergeSort(l), MergeSort(r)) 
    
    
    return ret
};

function merge(l,r) {
    fin_arr.push(l)
    // console.log(l)
    // console.log(r)
    let arr = []
    let left_ind = 0
    let right_ind = 0

    while (left_ind < l.length && right_ind < r.length) {
        if (l[left_ind] < r[right_ind]){
            arr.push(l[left_ind])
            left_ind++;
        }
        else{
            arr.push(r[right_ind])
            right_ind++;
        }
    } 

    return arr
    .concat(l.slice(left_ind))
    .concat(r.slice(right_ind));;
}
