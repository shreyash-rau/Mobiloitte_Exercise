


// direct calling function i write from json placeholder

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const firstFivePosts = data.slice(0, 5);

        firstFivePosts.forEach((post) => {
            console.log(`Post ${post.id}: ${post.title}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
fetchPosts();
