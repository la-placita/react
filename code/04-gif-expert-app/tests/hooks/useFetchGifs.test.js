import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs Hook', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        expect(result.current.images).toEqual([]);
        expect(result.current.isLoading).toBe(true);
    });
    test('should return an array of images and isLoading false after fetching', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        // Wait for the next update to ensure the fetch has completed
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            { timeout: 3000 }
        );
        
        expect(result.current.images.length).toBeGreaterThan(0);
        expect(result.current.isLoading).toBe(false);
    });
});