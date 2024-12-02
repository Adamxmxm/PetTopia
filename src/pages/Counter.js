import React, { useState } from 'react';
function Counter() {
 const [hitung, setCount] = useState(0);
 return (
 <div>
 <p>Jumlah Barang :  {hitung}  PCS</p>
 <button onClick={() => setCount(0)}>
 Reset
 </button>
 <button onClick={() => setCount(hitung - 1)}>
 -
 </button>
 <button onClick={() => setCount(hitung + 1)}>
 +
 </button>
 </div>
 );
}
export default Counter;
