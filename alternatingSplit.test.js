import { encrypt, decrypt } from './alternatingSplit'

test('encrypt', () => { 
    expect(encrypt("012345", 1)).toBe("135024")
    expect(encrypt("012345", 2)).toBe("304152")
    expect(encrypt("012345", 3)).toBe("012345")
    expect(encrypt("This is a test!", 0)).toBe("This is a test!")
    expect(encrypt("This is a test!", 1)).toBe("hsi  etTi sats!")
    expect(encrypt("This is a test!", 2)).toBe("s eT ashi tist!")
    expect(encrypt("This is a test!", 3)).toBe(" Tah itse sits!")
    expect(encrypt("This is a test!", 4)).toBe("This is a test!")
    expect(encrypt("This is a test!", -1)).toBe("This is a test!")  
 })

 test('decrypt', () => { 
    expect(decrypt("This is a test!", 0)).toBe("This is a test!")
    expect(decrypt("hsi  etTi sats!", 1)).toBe("This is a test!")
    expect(decrypt("s eT ashi tist!", 2)).toBe("This is a test!")
    expect(decrypt(" Tah itse sits!", 3)).toBe("This is a test!")
    expect(decrypt("This is a test!", 4)).toBe("This is a test!")
    expect(decrypt("This is a test!", -1)).toBe("This is a test!")
    expect(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)).toBe("This kata is very interesting!")
 })