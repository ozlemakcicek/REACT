// import React from 'react'  // sile de bilirsin bunu acik da kalabilir

const Clock = () => {
  return (
    <div>
      <h2>
        {new Date().toLocaleString()}
        
        {/* Geçerli veya belirtilen yerel ayarı kullanarak bir tarih ve saati bir
        dizeye dönüştürür */}
       
      </h2>
    </div>
  );
}

export default Clock