import React, { Component } from 'react'
import { Padre2, Hijos, Img, All, Content, Info, Tech, ListTech, Ultech, Title, Time } from '../styles/css'
import logo from '../img/myhome.svg'
import logo2 from '../img/photosnap.svg'
import logo3 from '../img/manage.svg'
import logo4 from '../img/faceit.svg'
import logo5 from '../img/eyecam-co.svg'
// import { Image } from 'react-bootstrap'
// import styled from 'styled-components'


export default class Home extends Component {
  render() {
    return (
      <All>

        <Padre2></Padre2>
        <Hijos>
          <Img ><img src={logo} alt='logo' /></Img>
          <Content>
            <Info>
              <Title>My Home</Title>
              <h3 style={{ color: "#64babb" }}>Junior Frontend Developer</h3>
              <Time>5d ago - Contract - USA only</Time>
            </Info>
            <Tech>
              <Ultech>
                <ListTech>
                  Front
                </ListTech>
                <ListTech>
                  Junior
                </ListTech>
                <ListTech>
                  Css
                </ListTech>
                <ListTech>
                  Javascipt
                </ListTech>
              </Ultech>
            </Tech>
          </Content>
        </Hijos>

        <Hijos>
          <Img ><img src={logo2} alt='logo2' /></Img>
          <Content>
            <Info>
              <Title>Photosnap</Title>
              <h3 style={{ color: "#64babb" }}>Senior Frontend Developer</h3>
              <Time>1d ago - Full time - USA only</Time>
            </Info>
            <Tech>
              <Ultech>
                <ListTech>
                  Front
                </ListTech>
                <ListTech>
                  Senior
                </ListTech>
                <ListTech>
                  Sass
                </ListTech>
                <ListTech>
                  React
                </ListTech>
                <ListTech>
                  Javascipt
                </ListTech>
              </Ultech>
            </Tech>
          </Content>
        </Hijos>
        <Hijos>
          <Img ><img src={logo3} alt='logo3' /></Img>
          <Content>
            <Info>
              <Title>Manage</Title>
              <h3 style={{ color: "#64babb" }}>Fullstack Developer</h3>
              <Time>1d ago - Part time - Remote</Time>
            </Info>
            <Tech>
              <Ultech>
                <ListTech>
                  Fullstack
                </ListTech>
                <ListTech>
                  Midweight
                </ListTech>
                <ListTech>
                  Python
                </ListTech>
                <ListTech>
                  React
                </ListTech>
              </Ultech>
            </Tech>
          </Content>
        </Hijos>
        <Hijos>
          <Img ><img src={logo4} alt='logo4' /></Img>
          <Content>
            <Info>
              <Title>Facelt</Title>
              <h3 style={{ color: "#64babb" }}>Junior Backend Developer</h3>
              <Time>2w ago - Full time - UK only</Time>
            </Info>
            <Tech>
              <Ultech>
                <ListTech>
                  BAckend
                </ListTech>
                <ListTech>
                  Junior
                </ListTech>
                <ListTech>
                  Ruby
                </ListTech>
                <ListTech>
                  RoR
                </ListTech>
              </Ultech>
            </Tech>
          </Content>
        </Hijos>
        <Hijos>
          <Img ><img src={logo5} alt='logo5' /></Img>
          <Content>
            <Info>
              <Title>Eyecam Co.</Title>
              <h3 style={{ color: "#64babb" }}>Fullstack Engineer</h3>
              <Time>3w ago - Full time - Worldwide</Time>
            </Info>
            <Tech>
              <Ultech>
                <ListTech>
                  Fullstack
                </ListTech>
                <ListTech>
                  Midweght
                </ListTech>
                <ListTech>
                  Python
                </ListTech>
                <ListTech>
                  Django
                </ListTech>
                <ListTech>
                  Javascipt
                </ListTech>
              </Ultech>
            </Tech>
          </Content>
        </Hijos>
      </All>
    )
  }
}
