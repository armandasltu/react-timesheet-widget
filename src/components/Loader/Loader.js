import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
  const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  `;

  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

export default Loader;
