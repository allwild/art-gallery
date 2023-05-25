import { useCollectionData } from "react-firebase-hooks/firestore";
import store from "./firestore";
import { collection, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const galleryRef = collection(store, "pics");
const galleryQuery = query(galleryRef);
const storage = getStorage();

export default function Tile({ pageSetter, page, setDetails }) {
  const [items, loading] = useCollectionData(galleryQuery);
  const [URLs, setURLs] = useState([]);

  useEffect(() => {
    const generateURLs = async () => {
      if (items && items.length > 0) {
        const urls = await Promise.all(
          items.map((obj) => getDownloadURL(ref(storage, obj.filename)))
        );
        setURLs(urls);
      }
    };

    generateURLs();
  }, [items, storage]);


  if (loading) {
    return <div>Loading...</div>;
  }

  

  function handleClick(shorthand, url, artist, title, description) {
    pageSetter(shorthand)
    console.log(page);
    setDetails([url, artist, title, description]);
  }
  
  const mapping = items.map((obj, index) => (
    <div
      onClick={() =>
        handleClick(
          obj.shorthand,
          URLs[index],
          obj.artist,
          obj.title,
          obj.description
        )
      }
      key={index}
      className="tile"
      style={{
        backgroundImage: `url(${URLs[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to={`/${page}`}>
        <Button variant="contained">Details</Button>
      </Link>

      <span>
        {obj.artist}: {obj.title}
      </span>
      <FavoriteIcon />
    </div>
  ));

  return <div className="tile-wrapper">{mapping}</div>;
}
