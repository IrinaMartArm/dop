import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`
const Header = styled.div`
    background-color: lightseagreen;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`
const Body = styled.div`
  display: flex;
`
const Nav = styled.div`
    background-color: white;
    height: 500px;
    width: 30%;
    color:#282c34;
    font-size: 30px;
`
const Content = styled.div`
    background-color:#282c34;
    height: 500px;
    width: 100%;
    color: white;
    font-size: 30px;
`


export const S = {
    NavWrapper,
    Header,
    Body,
    Nav,
    Content,

}
// .header {
//  
// }

// .body{
//   
// }

// .nav{
//   background-color: white;
//   height: 500px;
//   width: 30%;
//   color:#282c34;
//   font-size: 30px;

// }

// .content{
//   background-color:#282c34;
//   height: 500px;
//   width: 100%;
//   color: white;
//   font-size: 30px;
// }

// .navLink {
//   text-decoration: none;
//   color: #282c34;
// }

// .nav a.active {
//   color: #7fb8f1;
//   text-decoration: underline;
// }
