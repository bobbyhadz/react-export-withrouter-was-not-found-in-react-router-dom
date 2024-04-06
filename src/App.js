import './App.css';

// 👇️ import useNavigate
import {useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ Navigate programmatically
    navigate('/about');
  };

  return (
    <div>
      <button onClick={handleClick}>Navigate to About</button>
    </div>
  );
}
