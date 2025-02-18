import { plural } from "./plural";


  test('test', () => {
      expect(plural(0)).toBe(true)
      expect(plural(1)).toBe(false)
      expect(plural(0.5)).toBe(true)
      expect(plural(20)).toBe(true)
      expect(plural(100)).toBe(true)
      expect(plural(Infinity)).toBe(true)

  })