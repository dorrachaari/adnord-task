let images = [];

async function fetchData() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?limit=10&page=1', {
            headers: {
                'Origin': 'null' 
            }
        });        const data = await response.json();
        images.push(...data); 
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

export { fetchData, images };
