import { useState, useEffect } from 'react';

/*const Bio = ({ delay }) => {
    const [bioText, setBiotext] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {mode: 'cors'})
            .then((response) => response.json())
            .then((response) => setBiotext('Loading Profile Bio...'),)
            .catch((error) => console.error('Error fetching bio:', error));
        }, delay);
    }, []);

    return (
        bioText && (
            <>
                <p>{bioText}</p>
            </>
        )
    )
};*/

const Bio = ({ bioText}) => {
    return (
        bioText && (
            <div>
                <p>{bioText}</p>
            </div>
        )
    )
};

export default Bio;