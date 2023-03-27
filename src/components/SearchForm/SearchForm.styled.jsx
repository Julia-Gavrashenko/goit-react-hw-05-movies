import styled from 'styled-components';

export const SearchBox = styled.div`
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
   
`

export const Searchbar = styled.input`
  display: inline-block;
  margin-right: 40px;
  width: 400px;
  height: 40px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;
  :placeholder {
    font: inherit;
    font-size: 18px;
  }  
`

  export const SearchBtn = styled.btn`
      display: inline-block;
  width: 60px;
  height: 40px;
  border: 1px solid black;
  `