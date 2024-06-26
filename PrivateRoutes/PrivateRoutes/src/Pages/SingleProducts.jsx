import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

const SingleProducts = () => {
  const { idja } = useParams();
  console.log("idja", idja);
  
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  console.log("data", data);

  
  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/products/${idja}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      setError(true);
      console.log(err);
    })
  }, []);

  return (
    <div>
      {
        data ? (
          <>
            <Link to="/products">Back</Link>
            <Header
              title={data.name}
              imgUrl={data.image_url}
            />

            <div>
              <p>{data.description}</p>
              <p>{data.list_price} $</p>
            </div>
          </>
        ) : (
          <div>
            {error ? (
              <p>Error <Link to="/products">Back to product</Link></p>
            ):(
              <Loading />
            )}
          </div>
        )
      }
    </div>
  )
}

export default SingleProducts;