import styled from 'styled-components';

export const SearchBox = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
`;


export const Form = styled.form`
  
  display: flex;
  align-items:  center;
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
  border-radius: 8px;
  box-shadow: 0px 10px 14px -7px #44666c;

  color: #065c7c;
  font-weight: 500;
  :placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    box-shadow: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);
  }
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 150px;
  height: 40px;

  box-shadow: 0px 10px 14px -7px #44666c;
  background: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);
  /* background-color:#599bb3; */
  border-radius: 8px;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  text-transform: uppercase;
 

  &:hover,
  &:focus {
    background: linear-gradient(to bottom, #232c2d 5%, #599bb3 100%);
    background-color: #c1c9ca;
  }
`;
