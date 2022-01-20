import { storage } from '../utils/storage';

describe('storage', () => {
    test('fails', () => {
        storage.get('test to fail');
        expect(storage.get('test to fail')).toBe(null);
    });

    test('success', () => {
        storage.set('test to success', 'test');
        expect(storage.get('test to success')).toBe('test');
    });
});