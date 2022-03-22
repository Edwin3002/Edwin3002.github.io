import styled from 'styled-components'
// import f from 'https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap'

export const All = styled.div`
background-color: #f0fafb;
margin: 0;
padding: 0%;
`
export const Padre2 = styled.div`
    background-color: #5da4a4;
    background-image: url(https://i.ibb.co/5TKBrPK/bg-header-desktop.png);
    height: 6rem;
    margin: 0px;
    padding: 0;
`
export const Hijos = styled.div`
display: flex;
background-color: #ffffff;
    width: 80%;
    height: 100%;
    padding: 10px;
    margin: 50px auto;
    border-left: 5px solid #5da4a4;
    font-family: sans-serif;
`
export let Img = styled.div`
    width: 80px;
    height: 80px;
    margin: auto 20px;
    align-self: center;
    @media (max-width: 700px) {
    width: 0px;
    transform: scale(0.5);
    position: relative;
    bottom: 120px;
    }
    @media (max-width: 500px) {

    bottom: 130px;
    }
`
export let Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    float: right;
    
`

//info
export let Title = styled.div`
color: #5da4a4;
font-weight: 700;
@media (max-width: 700px) {
    margin-top: 25px;
    }
`
export let Info = styled.div`
    width: 45%;
margin: auto 10px;
@media (max-width: 700px) {
    padding: 10px;
    width: 90%;
    border-bottom: 2px solid gray;
    }
`
export let Time = styled.div`
    color: gray;
    @media (max-width: 700px) {
    }
`

// lista
export let Tech = styled.div`
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: auto ;
    @media (max-width: 700px) {
        padding: 0;
    width: 95%;
    }
    `
export let Ultech = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
list-style: none;
align-items: center;
padding: 0;
`
export let ListTech = styled.li`
background-color: #f0fafb;
color: #5da4a4;
padding: 5px;
margin: 5px;
border-radius: 5px;
font-weight: 700;
&:hover{
    background-color: #5da4a4;
color: #f0fafb;
    }
`