import React, { useEffect, useState } from 'react';
import axios from "axios";

const Sneakers = () => {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();
  const [brand, setBrand] = useState();

  const getCat = (event) => {
    const allCat = []
    event.forEach((el) => {
      if (!allCat.find((e) => (e === el.brand)) && el.brand) {
        allCat.push(el.brand);
      }
    });
    setBrand(allCat);
    // console.log("allCat", allCat);
  }

  const filterByBrand = (e) => {
    const dataBrand = originalData.filter((el) => e === el.brand);
    setData(dataBrand);
  }

  console.log("data", data);
  useEffect(() => {
    axios.get("https://example-data.draftbit.com/sneakers")
      .then((response) => {
        // console.log(response);
        setOriginalData(response.data);
        setData(response.data);
        getCat(response.data);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <div>
        <h2>Sneakers</h2>
        <div className='row'>
          {brand?.map((el) => (
            <button onClick={() => filterByBrand(el)}>{el}</button>
          ))}
          <button onClick={() => setData(originalData)}>X</button>
        </div>
        <div className='row'>
          {data?.map((el) => (
            <div className="card">
              <img src={el.media?.smallImageUrl} />
              <h3>{el.title}</h3>
              <h3>{el.brand}</h3>
              <h3>{el.retailPrice} $</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sneakers;
