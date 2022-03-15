import React, { Component } from 'react';
import styled from 'styled-components'

const Info = styled.div`
width: 60%;
margin: 50px 0;
`
const Skills = styled.table`
text-align: center;
padding: 20px;
width: 90%;
margin: 30px auto;
`
const Hobbies = styled.table`
text-align: center;
    margin: 30px auto;
`
const Education = styled.table`
    margin: 30px auto;
`
class Componente2 extends Component {
    render() {
        return (
            <Info class="info">
            <div class="description">
            <div class="title">

                <h1>Edwin Vargas Ayala</h1>
                <h2>Frontend Developer</h2>
                <p>
                    Proactive professional oriented to frontend development with the most used technologies today. Willing to acquire new skills, as well as take on additional responsibilities and grow personally.
                </p>
            </div>
            <Education class="education">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <h2>Education</h2>
                            </th>
                        </tr>
                        <tr>
                            <td >
                                <h4>UnBosque</h4>
                            </td>
                            <td>
                                <h4>Master in web develop</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>Bogota</td>
                            <td rowspan="2">Develop your logic and learn programming languages to be able to solve
                                customer problems with the creation of a web page or app.
                            </td>
                        </tr>
                        <tr>
                            <td>2021</td>
                        </tr>
                    </thead>
                </Education>
                <Skills class="skills">
                    <tbody>
                        <tr>
                            <th colspan="2">
                                <h2>Skills</h2>
                            </th>
                        </tr>
                        <tr>
                            <td>Html/Css</td>
                            <td>Python</td>
                        </tr>
                        <tr>
                            <td class="porcentaje "><div class="w75">75%</div></td>
                            <td class="porcentaje"><div class="w50">50%</div></td>
                        </tr>
                        <tr>
                            <td>Git</td>
                            <td>Bootstrap</td>
                        </tr>
                        <tr>
                            <td class="porcentaje "><div class="w60">60%</div></td>
                            <td class="porcentaje"><div class="w40">40%</div></td>
                        </tr>
                    </tbody>
                </Skills>
                <Hobbies class="hobbies">
                    <tr>
                        <th>
                            <h2>Hobbies</h2>
                        </th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Photography - Programming - Cycling - Video Games</td>
                        </tr>
                    </tbody>
                </Hobbies>
                
                </div>
        </Info>
            
        );
    }
}

export default Componente2;
