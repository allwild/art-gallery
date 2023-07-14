
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { useNavigate } from "react-router-dom";


const storage = getStorage();



export default function Tile({ page, setDetails, items, loading }) {
  
  const [URLs, setURLs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(items)
  })

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
    navigate(`/${shorthand}`)
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
        <IconButton >
          <InfoTwoToneIcon sx={{fontSize: 30, color: "black"}}/>
        </IconButton>
      </Link>

      <span>
        <strong>
          {obj.artist} : {obj.title}
        </strong>
      </span>
      <FavoriteBorderRoundedIcon sx={{fontSize: 30}}/>
    </div>
  ));

  return <div className="tile-wrapper">{mapping}</div>;
}
