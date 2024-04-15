import loadable                     from '@loadable/component';
import React, {useEffect, useState} from 'react';

/* Helpers */
import {FunColorBody} from   '../../helpers/styles';

/* Wrapper */
import WrapperConsumer from '../../store';


/* Components */
const ItemCompany  = loadable(() => import('../../Containers/itemCompany'));

const Companies = (props) => {

    const [optionSelected, setOptionSelected]         = useState({
        bells:             'assign',
        viewBells:         '',
    });

    useEffect(() => {
        /// Define color background body
        FunColorBody("Ketoro");

    }, []);

    return (
        <div>
            <ItemCompany 
                props={{
                    setters: {setOptionSelected: setOptionSelected},
                    getters: {optionSelected: optionSelected}
                }}
            />
        </div>
    )
}
export default WrapperConsumer(Companies)