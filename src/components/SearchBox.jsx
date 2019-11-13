import React from 'react';

function SearchBox(){
  return (
    <div className="search-box">
      <style global jsx>{`
          .search-box{
            float:right;
          }
        `}</style>
      <form>
        <label htmlFor="search">SearchLabelTest</label>
        <input
          type='text'
          id='search'
          placeholder='Search'/>
      </form>
    </div>
  );
}

export default SearchBox;
