import React, { useReducer } from 'react'

// Q.1  {count:20, age:20}

// const handelReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//         console.log(state.age);
        
//        if (action.subtype === 'count') {
//         return { ...state, count: state.count + 1 };
//       } else {
//         return { ...state, age: state.age + 1 };
//       }
//     case 'decrement':
//         if (action.subtype === 'count') {
//         return { ...state, count: Math.max(0, state.count - 1) };
//       } else {
//         return { ...state, age: Math.max(20, state.age - 1) };
//       }
//     case 'reset':
//    if (action.subtype === 'count') {
//         return { ...state, count: 0};
//       } else {
//         return { ...state, age:20 };
//       }
//     default:
//       return state;
//   }
// };
// function UseReducerState() {
//   const [data, dispatch] = useReducer(handelReducer, { count: 0, age: 20 });
//   return (
//     <div>
//         <h1>Count :{data.count}</h1>
//         <h1>Age :{data.age}</h1>
//      <button onClick={() => dispatch({ type: 'increment', subtype:"count"})} style={{ padding: '4px', margin: '3px' }}>
//         Increment Count
//       </button>
//         <button onClick={() => dispatch({ type: 'decrement', subtype:"count"})} style={{padding:'4px', margin:'3px'}} >decrement Count</button>
//         <button onClick={() => dispatch({ type: 'reset' ,subtype:"count"})} style={{padding:'4px', margin:'3px'}}>reset Count</button>


//         <div>
//              <button onClick={() => dispatch({ type: 'increment', subtype:"Age"})} style={{ padding: '4px', margin: '3px' }}>
//         Increment Age
//       </button>
//         <button onClick={() => dispatch({ type: 'decrement', subtype:"Age" })} style={{padding:'4px', margin:'3px'}} >decrement Age</button>
//         <button onClick={() => dispatch({ type: 'reset', subtype:"Age" })} style={{padding:'4px', margin:'3px'}}>reset Age</button>
//         </div>
//     </div>
//   )
// }
// export default UseReducerState

// Q.2  [{count:20, age:20}[]


const handelReducer2 = (state, action) => {
  switch (action.type) {
    case 'increment':
      if (action.subtype === 'count') {
        return [{ ...state[0], count: state[0].count + 1 }];
      } else {
        return [{ ...state[0], age: state[0].age + 1 }];
      }
    case 'decrement':
      if (action.subtype === 'count') {
        return [{ ...state[0], count: Math.max(0, state[0].count - 1) }];
      } else {
        return [{ ...state[0], age: Math.max(20, state[0].age - 1) }];
      }
    case 'reset':
      if (action.subtype === 'count') {
        return [{ ...state[0], count: 0 }];
      } else {
        return [{ ...state[0], age: 20 }];
      }
    default:
      return state;
  }
};

function UseReducerState() {
  const [data, dispatch] = useReducer(handelReducer2, [{ count: 0, age: 20 }]);
  return (
    <div>
        <h1>Count :{data[0].count}</h1>
        <h1>Age :{data[0].age}</h1>
     <button onClick={() => dispatch({ type: 'increment', subtype:"count"})} style={{ padding: '4px', margin: '3px' }}>
        Increment Count
      </button>
        <button onClick={() => dispatch({ type: 'decrement', subtype:"count"})} style={{padding:'4px', margin:'3px'}} >decrement Count</button>
        <button onClick={() => dispatch({ type: 'reset' ,subtype:"count"})} style={{padding:'4px', margin:'3px'}}>reset Count</button>


        <div>
             <button onClick={() => dispatch({ type: 'increment', subtype:"Age"})} style={{ padding: '4px', margin: '3px' }}>
        Increment Age
      </button>
        <button onClick={() => dispatch({ type: 'decrement', subtype:"Age" })} style={{padding:'4px', margin:'3px'}} >decrement Age</button>
        <button onClick={() => dispatch({ type: 'reset', subtype:"Age" })} style={{padding:'4px', margin:'3px'}}>reset Age</button>
        </div>
    </div>
  )
}
export default UseReducerState