import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
    const Loader = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    `;

    return <Loader>
        <CircularProgress />
    </Loader>;
}

export default Loader;