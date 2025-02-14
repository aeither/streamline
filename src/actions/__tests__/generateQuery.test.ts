import { generateObject } from 'ai';
import { generateQuery } from '../generateQuery';

// Mock the dependencies
jest.mock('@openrouter/ai-sdk-provider');
jest.mock('ai');

describe('generateQuery', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should generate a query successfully', async () => {
        const mockQuery = 'query { streams { id name } }';
        (generateObject as jest.Mock).mockResolvedValue({
            object: { query: mockQuery }
        });

        const input = 'Get all streams with their IDs and names';
        const result = await generateQuery(input);

        expect(result).toBe(mockQuery);
        expect(generateObject).toHaveBeenCalledWith(
            expect.objectContaining({
                model: expect.any(Function),
                prompt: input,
            })
        );
    });

    // it('should throw an error when generation fails', async () => {
    //     const error = new Error('Generation failed');
    //     (generateObject as jest.Mock).mockRejectedValue(error);

    //     const input = 'Get all streams';
    //     await expect(generateQuery(input)).rejects.toThrow('Failed to generate query');
    // });
});
