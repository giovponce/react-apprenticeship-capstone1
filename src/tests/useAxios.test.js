import useAxiosFetch from "../utils/hooks/UseAxiosFetch";

describe('useAxiosFetch', () => {

    it('1+1 should be 2', () => {
        expect(1+1).toBe(2);
    });

    // it('should return axios fetch', () => {
    //     const { fetch } = useAxiosFetch();
    //     expect(fetch).toBeDefined();
    // });

    // test('it should fetch and retrieve data', async () => {
    //     const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=${process.env.REACT_APP_UNSPLASHED_KEY}&q=`;
    //     const searchTerm = 'Wizeline';
    //     const { videosList } = useAxiosFetch(
    //         `${API_URL}${searchTerm}`
    //     );
    //     expect(videosList).toBeDefined();
    // })


    // test('should return a list of videos', async () => {
    //     const { videosList } = useAxiosFetch(
    //         `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=${process.env.REACT_APP_UNSPLASHED_KEY}&q=Wizeline`
    //     );
    //     expect(videosList).toBeDefined();
    // });
});