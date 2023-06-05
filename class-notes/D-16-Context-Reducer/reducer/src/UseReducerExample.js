import { useReducer } from "react";
// import { reducer, initialState } from "./reducer";
import load from "./img/loading-loading-gif.gif";

const UseReducerExample = () => {
  // action1 alttaki fetchDog dan gelen payload
  const reducerAA = (state1, action1) => {
    switch (action1.type) {
      case "START":
        return { ...state1,  loading: true };
      case "SUCCESS":
        return { ...state1, dog: action1.payload,  loading: false };
      case "FAIL":
        return { ...state1,  error: action1.payload, loading: false };
      default:
    }
  };
  const [state, dispatch1] = useReducer(reducerAA, {
    loading: false,
    dog: "",
    error: "",
    
  });
  const { dog, loading, error } = state;

  
  const fetchDog = () => {
    dispatch1({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch1({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch1({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED!" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
         disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
      {loading && <img src={load} alt="" />}
    </div>
  );
};

export default UseReducerExample;


// import { useReducer } from "react";
// // import { reducer, initialState } from "./reducer";
// import load from "./img/loading-loading-gif.gif";

// const UseReducerExample = () => {
//   // aksiyon alttaki fetchDog dan gelen yapilacak
//   const reducerAA = (state1, aksiyon) => {
//     switch (aksiyon.type) {
//       case "START":
//         return { ...state1,  loading: true };
//       case "SUCCESS":
//         return { ...state1, dog: aksiyon.yapilacak,  loading: false };
//       case "FAIL":
//         return { ...state1,  error: aksiyon.yapilacak, loading: false };
//       default:
//     }
//   };
//   const [state, dispatch1] = useReducer(reducerAA, {
//     loading: false,
//     dog: "",
//     error: "",
    
//   });
//   const { dog, loading, error } = state;

  
//   const fetchDog = () => {
//     dispatch1({ type: "START" });
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch1({ type: "SUCCESS", yapilacak: data.message });
//       })
//       .catch(() => {
//         dispatch1({ type: "FAIL", yapilacak: "DATA CAN NOT BE FETCHED!" });
//       });
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <button
//         onClick={fetchDog}
//          disabled={loading}
//         style={{ width: "200px", margin: "1rem" }}
//       >
//         Fetch Dog
//       </button>
//       {dog && <img src={dog} alt="" />}
//       {error && <h2>{error}</h2>}
//       {loading && <img src={load} alt="" />}
//     </div>
//   );
// };

// export default UseReducerExample;
