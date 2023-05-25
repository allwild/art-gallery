import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function SinglePage({ page, details }) {
    return (
      <div className="singlepage-wrapper">
        <Link to={`/`}>
          <Button variant="contained">Home</Button>
        </Link>
        <img src={details[0]} alt="" />
        <span>{details[1]}:{details[2]}</span>
        <p>{details[3]}</p>
        
      </div>
    );
  }

  