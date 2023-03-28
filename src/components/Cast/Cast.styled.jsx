import styled from 'styled-components';

export const CastList = styled.ul`
 display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
  grid-gap: 40px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const CastItem = styled.li`
    
`



export const CastImage = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   border-radius: 4px;
  object-fit: cover;
`;

export const Actor = styled.p`
  color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  font-weight: 500;
  font-size: 25px;
  padding: 0px;
`;

export const Character = styled.p`
 color: lightskyblue;
  font-weight: 500;
  font-size: 20px;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
 
  padding: 10px;
`;


export const NoCast = styled.p`
color: white;
  font-weight: 500;
  font-size: 20px;
`