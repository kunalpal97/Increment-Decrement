// import React from "react";
// import { useState , useEffect} from "react";

// // react ke sath use state hook hai state manage karni pad thi hai

// const Home = () => {

//     // useEffect(() => {
//     //    console.log("Run");
       
//     // }, [])
    


//     const [InputVal , setInputVal] = useState(0);
    
//     const increment = () => {
//         setInputVal(InputVal+1);

//     };

//     const decrement = () => {
//         setInputVal(InputVal-1);
//     };

//     const btnstyle = {

//         padding: 20,
//         margin: 10, 
//         border:"none",
//         backgroundColor:"#f1f1f1",
//         cursor:"pointer",

//     }


//   return (
//     <div>
//       <input
//         style={{
//           padding: "10px",
//           margin: "10px 0px 0px",
//           border: "2px solid rgba(1,1,1,0.4)",
//         }}
//         type="number"
//         placeholder="Enter Anything"
//         value={InputVal}
//         readOnly
//       />

//       <button style={btnstyle}  onClick={decrement}>-</button>
//       <button style={btnstyle} onClick={increment}  >+</button>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useState  , useEffect} from "react";
import "./Home.css";


const Home = () => {

    useEffect(() => {
        console.log("Running");
      
    }, [])
    
    const [inputVal, setInputVal] = useState(0);

    

    const increment = () => {
        setInputVal(inputVal + 1);
    };

    const decrement = () => {
        setInputVal(inputVal - 1);
    };

    return (
        <>
        
        <div className="card">
            <input
                className="input-box"
                type="number"
                value={inputVal}
                readOnly
            />
            <div className="btn-container">
                <button className="btn" onClick={decrement}><span><b>-</b></span></button>
                <button className="btn" onClick={increment}><span><b>+</b></span></button>
            </div>
        </div>
        </>
    );
};

export default Home;
