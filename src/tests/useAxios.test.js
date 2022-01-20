import useAxiosFetch from "../utils/hooks/UseAxiosFetch";
import { renderHook } from "@testing-library/react-hooks";

describe('useAxiosFetch', () => {

    it('1+1 should be 2', () => {
        expect(1+1).toBe(2);
    });

    it('should receive url when called', () => {
        const { result } = renderHook(() => useAxiosFetch("https://www.google.com"));
        expect(result.current.url).toBe("https://www.google.com");
    });
});