import { useParams } from 'react-router-dom';
const Blog = () => {
    const { title } = useParams();

    return (
      <div>
        <h1>{title.replace(/-/g, ' ')}</h1>
      </div>
    );
}

export default Blog