import styled from '@emotion/styled';


const S = {};


S.UlElement = styled.ul`

max-width: 800px;
margin: 0 auto;
list-style-type: none;
padding: 0;

`;

S.FlexList = styled.ul`
list-style-type: none;
padding: 0;

display: flex;
flex-wrap: wrap;
align-items: center;

padding: 0 8px;


flex: 1 0 220px;

li {
  width: 100px;
}

`;

S.ListElement = styled.li`
display: flex;
flex-wrap: wrap;
align-items: center;

label,
p {
  padding: 8px;
  font-weight: 300;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  flex: 1 0 120px;
  max-width: 220px;
}

`;

S.ButtonElement = styled.button`
  padding: 8px 16px;
  border: none;
  background: #333;
  color: #f2f2f2;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
`;

export default S;
