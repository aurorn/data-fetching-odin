import { useEffect, useState } from 'react';
import Bio from './Bio.jsx';

/*const Profile = ({ delay }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, delay);
  }, [delay]);

  return (
    (imageURL && (
      <div>
        <h3>Username</h3>
        <img src={imageURL} alt={'profile'} />
        <Bio delay={1000} />
      </div>
    )) || <h1>Loading...</h1>
  );
}; */

const Profile = ({ delay }) => {
  const [imageURL, setImageURL] = useState(null);
  const [bioText, setBioText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, ); 

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => response.json())
        .then((response) =>
          setBioText("Bio here pls ")
        )
        .catch((error) => console.error(error));
    },); 
  }, [delay] );

  return (
    (imageURL && (
      <div>
        <h3>Username</h3>
        <img src={imageURL} alt={"profile"} />
        <Bio bioText={bioText} />
      </div>
    )) || <h1>Loading...</h1>
  );
};

export default Profile;