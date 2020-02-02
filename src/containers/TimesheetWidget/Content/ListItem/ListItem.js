import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ListItem(props) {
  const { icon, title, heading, children } = props;

  const Heading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    background-color: #ebebeb;
    span {
      margin-left: 0.5rem;
    }
  `;
  const Content = styled.div`
    padding: 1rem 0.5rem;
  `;
  const HeadingText = styled.div`
    text-align: right;
    flex: 1;
    color: rgba(0, 0, 0, 0.6);
  `;

  return (
    <div>
      <Heading>
        {icon}
        <span>{title}</span>
        {heading ? <HeadingText>{heading}</HeadingText> : null}
      </Heading>
      <Content>{children}</Content>
    </div>
  );
}

ListItem.defaultProps = {
  heading: null,
  icon: null
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default ListItem;
