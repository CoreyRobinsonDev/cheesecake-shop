import { Link } from "react-router-dom";
import './items.css';

const Items = () => {
  return <main>
    <Link to='/strawberry' className='strawberry'>
      <img src='/pictures/strawberry.webp' alt='Strawberry cheesecake.' className="link-img" />
      <span className='tags-container'>
        <span className="tag">Bestseller</span>
        <span className='price'>$10</span>
      </span>
    </Link>
    <Link to='/oreo' className='oreo'>
      <img src='/pictures/oreo.webp' alt='Oreo cheesecake.' className="link-img"/>
      <span className='tags-container'>
        <span className='price'>$10</span>
      </span>
    </Link>
    <Link to='/sundae' className='sundae'>
      <img src='/pictures/sundae.jpg' alt='Cheesecake sundae.' className="link-img"/>
      <span className='tags-container'>
        <span className="tag">New!</span>
        <span className='price'>$10</span>
      </span>
    </Link>
  </main>
}
export default Items;