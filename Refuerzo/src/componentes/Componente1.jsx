import H2Styled, { AboutMe, AboutMeUl } from '../../styled/StyledComponentes';


import React, { Component } from 'react'

export default class Componente1 extends Component {
  render() {
    return (
      
        <AboutMe class="aboutMe">
            <AboutMeUl>
                <li>
                    <h3>About Me</h3>
                </li>
                    <h3>Social</h3>
                <li><i class="fa-solid fa-envelope"></i> vargas@gmail.com</li>
                <li><i class="fa-brands fa-github"></i> Edwin3002</li>
                <li><i class="fa-brands fa-linkedin"></i> ED3002</li>
                <li>
                    <h4>Adress</h4>
                </li>
                <li>Tenjo</li>
                <li>
                    <h4>Nationality</h4>
                </li>
                <li>Colombia</li>
            </AboutMeUl>
            <ul class="ulSkills">
                <h3>Skills</h3>
                
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Supervision</li>
                <li>Autodidact</li>
            </ul>
            <AboutMeUl>
                    <h3>Languages</h3>
                <li>
                    <h4>English</h4>
                </li>
                <li>Mid level</li>
                <li>
                    <h4>Spanish</h4>
                </li>
                <li>Native</li>

            </AboutMeUl>

        </AboutMe>
      
    )
  }
}
