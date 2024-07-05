import { useParams } from 'react-router-dom';

export default function Country() {
  const params = useParams();
  console.log(params);

  return <div>Country : { params.code }</div>;
}
