import styled from '@emotion/styled';


const S = {};

S.Nav = styled.nav`
width: 100%;
padding-left: 30px;
padding-right: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

S.Ul = styled.ul`
display: flex;
list-style: none;

li a {
      display: inline-block;
      padding: 10px 15px;
      text-decoration: none;
}
`;

export default S;
