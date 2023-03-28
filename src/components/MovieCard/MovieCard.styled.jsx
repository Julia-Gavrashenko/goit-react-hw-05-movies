import styled from 'styled-components';

export const BackBtn = styled.button`
  display: inline-flex;
  margin-left: 50px;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: lightskyblue;
  }
`;

export const MovieBox = styled.section`
  padding-right: 50px;
  padding-left: 50px;
  /* padding-top: 30px; */
  padding-bottom: 10px;
`;

export const Card = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;

export const CardImg = styled.img`
  width: 280px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;
export const InfoTitle = styled.h2`
  color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  font-weight: 700;
  font-size: 35px;
`;

export const InfoTitle2 = styled.h3`
  color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  font-weight: 500;
  font-size: 25px;
`;
export const Info = styled.p`

  color: #022633;
  font-weight: 500;
  font-size: 20px;
`;
export const GenreList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const GenreItem = styled.li`
  color: #033040;
  font-weight: 500;
  font-size: 20px;
`;

export const InfoSection = styled.h4`
  display: flex;
    gap: 30px;
    align-items: baseline;
`;

export const AddInfo = styled.h4`
  color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  font-weight: 500;
  font-size: 30px;
`;

export const InfoLinks = styled.ul`
    display: flex;
    gap: 30px;
    
`
export const LinkItem = styled.li`
    color: white;
  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  font-weight: 500;
  font-size: 30px;
     text-decoration: underline;

  :focus,
  &:hover {  
   
     text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);
  }
    
`
