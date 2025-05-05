import "./сustomArrayFilters.js";


    test('test', () => {
        const arr = [1,2,3,4,5]
        expect(arr.even()).toEqual([2,4])
        expect(arr.odd()).toEqual([1,3,5])
        expect(arr.under(4)).toEqual([1,2,3])
        expect(arr.over(4)).toEqual([5])
        expect(arr.inRange(1,3)).toEqual([1,2,3])
        
        expect([1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30)).toEqual ([18, 20, 22, 30])
        expect(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even()).toEqual ([300, 122])
    })