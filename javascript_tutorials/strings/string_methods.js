let str_custom_methods = {
    concat1: function () {
        // console.log("concat1 called ")
        let res = ""
        for (let temp of arguments) {
            res += temp
        }
        return res;
    },
    append2: () => {
        console.log("append 2")
    }
}

let new_res = str_custom_methods.concat1("Hello ", " Vikash", " Deepak");

// console.log(new_res)
// str_custom_methods.concat1()

// str_custom_methods.append2()
// console.log(arguments)


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('fox');

console.log(words)