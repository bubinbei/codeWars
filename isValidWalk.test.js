import { isValidWalk } from "./isValidWalk";
  describe('isValidWalk', () => {
    it('should return true for a valid walk', () => {
      const walk = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'];
      expect(isValidWalk(walk)).toBe(true);
    });

    it('should return false for an invalid walk', () => {
      const walk = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n'];
      expect(isValidWalk(walk)).toBe(false);
    });
    
  });