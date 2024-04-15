import React, {useEffect, useState} from 'react';
import { useParams, useLocation  } from 'react-router-dom';

/* Styles */
import Styles from './Home.module.css';

/* Wrapper */
import WrapperConsumer from '../../store';
import { style } from '@mui/system';

const Home = (props) => {


    return (
        <div>
            Hola
        </div>
    )
}
export default WrapperConsumer(Home)