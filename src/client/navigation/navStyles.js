import styled from '@emotion/styled';


const S = {};

S.Nav = styled.nav`
background-color: white;
padding-left: 30px;
padding-right: 10px;
display: flex;
justify-content: space-between;
`;

S.Ul = styled.ul`
display: flex;
flex-direction: column;
list-style: none;

li a {
      display: inline-block;
      padding: 10px 15px;
      text-decoration: none;
      color: inherit;
}
`;

export default S;
