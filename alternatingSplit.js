// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//encrypt("012345", 1)  =>  "135024"
//encrypt("012345", 2)  =>  "135024"  ->  "304152"
//encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"


export function encrypt(text, n) {
    const crypt = () => [...[...text].filter((v, index) => (index % 2)),...[...text].filter((v, index) => !(index % 2))].join('')
    if (n <= 0 || !encryptedText) return encryptedText;
    n = [...Array(n<0?0:n)].forEach(() => text = crypt())
    return text
}

// export function decrypt(encryptedText, n ) {
//     n = [...Array(n<0?0:n)].forEach(() => encryptedText = crypt(encryptedText))
//     return encryptedText
// }
export function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText) return encryptedText;
    const length = encryptedText.length;
    for (let i = 0; i < n; i++) {
        const mid = Math.floor(length / 2);
        const odd = encryptedText.slice(0, mid);
        const even = encryptedText.slice(mid);
        let decrypted = '';
        for (let j = 0; j < even.length; j++) {
            decrypted += (even[j] || '') + (odd[j] || '');
        }
        if (odd.length > even.length) {
            decrypted += odd.slice(-1);
        }
        encryptedText = decrypted;
    }
    return encryptedText;
}



// let string = "";
// for (let i = 65; i <= 122; i++) {
//     string += String.fromCharCode(i);
//     for (let l = 1; l < 30; l++){
//         if((string == decrypt( string , l))){
//             console.log(string.length + ' - ' +l)
//             break
//         }
//     }
// }

