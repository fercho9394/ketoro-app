import Card                         from '@sistemas_metafinanciera/meta-componets-web/dist/components/legacy/cards/Card';
import CardToolbar                  from '@sistemas_metafinanciera/meta-componets-web/dist/components/legacy/cards/CardToolbar';
import loadable                     from '@loadable/component';
import React,{useState}             from 'react';

/* Options */
import {optionsCollections} from '../../utils/Options/optionsBells';

/* Controller */
import {titleCard} from './controller';

/* Components */
const ItemAssign    = loadable(() => import('../itemAssign'));
const ItemRegister  = loadable(() => import('../itemRegister'));
const ItemContact   = loadable(() => import('../itemContact'));
const ItemActivity  = loadable(() => import('../itemActivity'));
const ItemConvsersation  = loadable(() => import('../itemConversation'));

export default ({props}) => {

    const { setters, getters } = props;

    function TitleCard(){
        return titleCard();
    }

    return(
        <div className='mt-8 p-10'>
             <Card 
                classNameIHeader={"relative"} 
                canRenderIconHeder={false}
                iconHeader={""} 
                sizeIcon={23}
                textTitle={<TitleCard />} 
                element={""}
                elementHBody={
                    <CardToolbar 
                        titleTabs={""} 
                        classNameTabTitle={"text-colorWhiteFF font-normal"} 
                        className={"mt-1"} 
                        classNameTabs={"bg-colorPrimaryKetoro"} 
                        optionMenuTabs={optionsCollections(getters.optionSelected, setters.setOptionSelected)}
                        elementBody={
                            getters.optionSelected.bells === "assign" ?
                                <ItemAssign />
                            :
                            getters.optionSelected.bells === "register" ?
                                <ItemRegister />
                            :
                            getters.optionSelected.bells === "contact" ?
                                <ItemContact />
                            :
                            getters.optionSelected.bells === "activity" ?
                                <ItemActivity />
                            :
                            getters.optionSelected.bells === "conversation" ?
                                <ItemConvsersation />
                            :
                                ''
                        }
                    />
                }
            />
        </div>
    )
}