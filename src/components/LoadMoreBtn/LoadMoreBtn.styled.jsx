import styled from 'styled-components';

export const LoadBtn = styled.button`
  display: inline-block;
  margin-left: 500px;
  margin-right: auto;
  margin-bottom: 40px;
  width: 200px;
  height: 40px;

  box-shadow: 0px 10px 25px -7px #26393c;
  background: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);
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
