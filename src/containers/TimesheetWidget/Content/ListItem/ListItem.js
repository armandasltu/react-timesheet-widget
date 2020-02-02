import React from 'react';
import styled from 'styled-components';

function ListItem(props) {
  const { icon, title, children } = props;

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

  return (
    <div>
      <Heading>
        {icon}
        <span>{title}</span>
      </Heading>
      <Content>{children}</Content>
    </div>
  );
}

export default ListItem;
