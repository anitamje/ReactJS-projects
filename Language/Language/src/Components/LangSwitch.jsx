import React, { useContext } from 'react';
import { Context } from '../Context/Products';
import sq from "../assets/albania.svg";
import en from "../assets/england.svg";


const LangSwitch = () => {
  const [state, dispatch] =  useContext(Context);

  const change = () => {
    dispatch({
      type: "LANG",
      payland: {
        language: state.language === "en" ? "sq" : "en"
      }
    })
  }

  return (
    <button onClick={() => change()}>
        {state.language === "en" ? (
          <img src={sq} />
        ) : (
          <img src={en} />
        )}
    </button>
  )
}

export default LangSwitch;
