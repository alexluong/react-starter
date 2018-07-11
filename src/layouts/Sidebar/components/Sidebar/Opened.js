import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

import Color from 'utilities/Color';
import { Icon, Button } from 'elements';
import { position } from 'config/theme';

const propTypes = {
  open: PropTypes.bool,
  onControlClick: PropTypes.func,
};

const OpenedSidebar = ({
  isOpen,
  toggleOpen,
  opacity,
  transform,
  ...props
}) => (
  <Container {...props}>
    <LogoContainer>
      <div>LOGO</div>
      <SidebarControl
        variant="icon"
        name="arrow-left"
        color="white"
        onClick={toggleOpen}
      />
    </LogoContainer>
    <LinkContainer>
      <NavLink to="/home">
        <Route path="/home">
          {({ match }) => (
            <span>
              <Icon name="home" color={match ? 'white' : 'primary'} />
              <Text>Home</Text>
            </span>
          )}
        </Route>
      </NavLink>
      <NavLink to="/facebook">
        <Route path="/facebook">
          {({ match }) => (
            <span>
              <Icon name="close" color={match ? 'white' : 'primary'} />
              <Text>Facebook</Text>
            </span>
          )}
        </Route>
      </NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/dnd">DnD</NavLink>
      <NavLink to="/upload">Upload</NavLink>
    </LinkContainer>
  </Container>
);
OpenedSidebar.propTypes = propTypes;

export default OpenedSidebar;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  height: 8rem;
  background-color: royalblue;
  position: relative;
  ${position('centerChildren')};
`;

const SidebarControl = styled(Button)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const LinkContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 7rem;
    color: ${Color.get('primary')};
    text-decoration: none;
    padding-left: 3rem;
    position: relative;
    &.active {
      background-color: ${Color.get('secondary')};
      color: ${Color.get('white')};
      &::after {
        visibility: visible;
      }
    }
    &::after {
      visibility: hidden;
      content: '';
      ${position('absolute')};
      z-index: -1;
      width: 1rem;
      height: 100%;
      background-color: #cecece;
      transition: width 0.2s ease-in;
    }
    &:hover::after {
      visibility: visible;
      width: 100%;
    }
  }
`;

const Text = styled.span`
  margin-left: 1rem;
`;
