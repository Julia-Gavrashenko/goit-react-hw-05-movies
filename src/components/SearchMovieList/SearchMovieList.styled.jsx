import styled from 'styled-components';

export const SearchList = styled.div`
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 30px;
    padding-bottom: 10px;
`


export const List = styled.ul`
    
    display: grid;
   max-width: calc(100vw - 20px); 
   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
  grid-gap: 5px;
  column-gap: 40px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const ListItem = styled.li`
color: white;
    font-size: 20px;

  :focus,
  &:hover {  
    text-decoration: underline;
     text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  }
`