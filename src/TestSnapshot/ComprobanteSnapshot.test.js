import React, {useState} from 'react';
import { render }    from "@testing-library/react";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

/* Images */
import BtnBloss        from "../assets/img/btnBloss.svg";
import BtnBlossRed     from "../assets/img/BtnBloss_Red.svg";
import BtnTrash        from "../assets/img/trash.svg";
import IconExclamation from "../assets/img/exclamation-circle.svg";
import IconSuccess     from "../assets/img/check-circle.svg";
import iconZoom        from "../assets/img/zoom.svg";

function Comprobante(){

    const [errors, setErrors]           = useState({});
    const [loadWindowS, setLoadWindowS] = useState(false);
    const [messageDOM, setMessageDOM ]  = useState('');             
    const [loadImages, setLoadImages ]  = useState({
        comprobante: false
    });
    const [documentsProspect, setDocumentsProspect] = useState({
        comprobbase64:  '',
        comprobfile:    ''
    });

    return(
        <div
            className={`sm:p-5 p-10`}
        >
            
            <div className={`card shadow-sm h-auto`}>

                <div className="inline-flex ml-3 mr-2 sm:space-x-0 md:space-x-4 xl:space-x-4 xl2:space-x-4 xl3:space-x-4">
                    <div className="sm:w-28 text-12 text-bajio80 mt-3 ml-2"> Paso 3 de 5</div>
                    <div className="w-72">
                        <div className="progress h-2 mt-4 mr-3">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width:  "60%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                        </div>
                    </div>
                </div>

                
                <div>
                    <label className='mt-8 ml-4  text-16 text-left  text-primarymeta dark:text-bajio20'>
                        Comprobante de domicilio
                    </label>
                    <p className='text-bajio ml-4 text-16' >Puedes agregar tú domicilio con tu comprobante o ingresarlo manualmente.</p>
                </div>

                <div className="grid grid-cols-1 gap-1 mt-6 ">
                    <div>

                        <div className={
                            errors.DOM === "required" ?
                                'block w-36 h-36 border-dashed border-4 border-red-500 rounded-boxer m-auto bg-bajio20p'
                                :
                                'block w-36 h-36 border-dashed border-4 border-light-blue-500  rounded-boxer m-auto bg-bajio20p'
                            } >
                            {
                            documentsProspect.comprobbase64 === "" ?
                                errors.DOM === "required" ?
                                    <img src={BtnBlossRed} className='block m-auto mt-10' />
                                :
                                    <img src={BtnBloss} className='block m-auto mt-10' />
                            :
                                <img src={documentsProspect.comprobbase64} className={"w-36 h-36 mb-5 "} />
                            }
                            {
                                documentsProspect.comprobbase64 === "" ?
                                ""
                                :
                                <button
                                    className='relative btn w-8 h-8 bg-blanco shadow-buttonse rounded-fulled float-right mr-3 -mt-16'
                                    type='button'
                                >
                                    <img
                                        src={iconZoom}
                                        className='max-w-lg w-5 -ml-1.5'
                                    />
                                </button>
                            }
                            {/* MOVIL */}
                            <div  
                                className={
                                    documentsProspect.comprobbase64 != "" ?
                                        'hidden -mt-24 opacity-0 mb-4'
                                    :
                                        'sm:relative md:hidden xl:hidden xl2:hidden xl3:hidden -mt-24 opacity-0 mb-4'
                                }
                            >
                                <button className='btn bg-queretaro block w-36 h-36'>Click</button>
                            </div>
                            {/* DESKTOP */}
                            <div className={
                                documentsProspect.comprobbase64 != "" ?
                                    'hidden -mt-24 opacity-0 mb-4'
                                :
                                    'sm:hidden md:relative xl:relative xl2:relative xl3:relative  -mt-14'
                                } >
                                <Dropzone
                                    accept="image/*"
                                    inputContent={"Tomar o seleccionar fotografía"}
                                    maxFiles={1}
                                    multiple={false}
                                    styles={{ dropzone: { minHeight: 120, maxHeight: 120, zIndex: "99" , opacity: '0' } }}
                                    submitButtonContent="Subir"
                                />   
                            </div>
                            <label className='text-14 text-bajio60 text-left mb-4' >
                                {loadImages.comprobante === true ?
                                    <label>Cargando.....</label>
                                :
                                errors.DOM === "required" ?
                                    <label className='text-irapuato' > Comprobante </label>
                                :
                                    <label> 
                                        <div className="inline-flex space-x-4">
                                            <div className="">Comprobante</div>
                                            <div className="-mt-1">
                                                {documentsProspect.comprobbase64 != "" ? 
                                                        <img src={BtnTrash} className='cursor-pointer' onClick={() => deleteImage('DOMC')} />
                                                    :
                                                        <div></div>
                                                }
                                            </div>
                                        </div> 
                                    </label>
                                }
                            </label>
                        </div>
                        
                    </div>

                </div>

                <div className={
                    messageDOM === "noDataDOC" || messageDOM === "dataNoDom" || messageDOM === "noSameAdress" || messageDOM === "nogetDom" ?
                        'm-auto mt-20 ml-3 mr-3 mb-5 sm:h-auto md:h-20 xl:h-20 xl2:h-20 xl3:h-20 p-3 border-2 border-warning'
                    :
                    messageDOM === "dataDom" ?
                        'm-auto mt-20 ml-3 mr-3 mb-5 sm:h-auto md:h-20 xl:h-20 xl2:h-20 xl3:h-20 p-3 border-2 border-success'
                    :
                        ''
                    }>
                    <div className="inline-flex mt-3 ">
                        <div className="">
                            {
                                messageDOM === "noDataDOC" || messageDOM === "dataNoDom" || messageDOM === "noSameAdress" || messageDOM === "nogetDom" ?
                                    <img src={IconExclamation} className='w-7 h-7'  style={{maxWidth:'none'}}/>
                                :
                                messageDOM === "dataDom" ?
                                    <img src={IconSuccess} className='w-7 h-7' style={{maxWidth:'none'}}/>
                                :
                                    <div></div>
                            }
                        </div>
                        <div className="ml-2">
                            {
                                messageDOM === "noDataDOC" ?
                                    <label className='text-14' style={{color:"#00000099"}}>No pudimos obtener la información del comprobante, pero podrás ingresarla manualmente</label>
                                :
                                messageDOM === "dataNoDom"  || messageDOM === "nogetDom" ?
                                    <label className='text-14' style={{color:"#00000099"}}>No pudimos obtener la información del comprobante, pero podrás ingresarla manualmente o tomarlo nuevamente</label>
                                :
                                messageDOM === "noSameAdress" ?
                                    <label className='text-14' style={{color:"#00000099"}}>No encontramos la dirección,por favor intenta tomar nuevamente el comprobante</label>
                                :
                                messageDOM === "dataDom" ?
                                    <label className='text-14' style={{color:"#00000099"}}>Se obtuvieron datos del comprobante de domicilio, podrás verlos en la información de datos domiciliarios</label>
                                :
                                    <div></div>
                            }
                        </div>
                    </div>
                </div>

                {
                    errors.DOM  === "required" ? 
                    (
                        <SlideDown className={'my-dropdown-slidedown'}>
                            <label className='text-irapuato text-16 mt-5 ml-4 font-semibold'>
                                Para poder avanzar, se requiere completar toda la información
                            </label>
                        </SlideDown>
                    )
                    :
                    <div></div>
                }

                {
                    errors.DOM  === "required" ||
                    loadWindowS === true ?
                    <div className="flex flex-row-reverse sm:mt-5">
                        <div>
                            <div className="relative h-20 w-32">
                                <div className="absolute bottom-0 right-0 h-16 w-28">
                                    <button
                                        className={
                                            ' btn button-styles mb-12 mr-3 text-blanco bg-bajio20 rounded-rbutton text-16 dark:bg-aguascalientes dark:text-negro'
                                        }
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>  
                        </div>
                    </div> 
                :
                <div className="flex flex-row-reverse justify-between sm:mt-5">
                    <div>
                        <div className="relative h-20 w-32">
                            <div className="absolute bottom-0 right-0 h-16 w-28">
                                <button
                                    className={
                                        ' btn button-styles mb-12  text-blanco bg-primarymeta rounded-rbutton text-16 dark:bg-aguascalientes dark:text-negro'
                                    }
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>  
                    </div>
                    <div>
                        <div className="relative h-20 w-28 ml-1 -mt-1">
                            <div className="absolute bottom-0 right-0 h-16 w-24 cursor-pointer">
                                <button
                                    className={
                                        'mt-2 mb-12 text-primarymeta rounded-rbutton text-20 font-semibold '
                                    }
                                >
                                    Atrás
                                </button>
                            </div>
                        </div>  
                    </div>
                </div> 
                }

            </div>
        </div>
    )
}

test("Render Comprobante snapshot", () => {
    const { baseElement } = render(<Comprobante />);
    expect(baseElement).toMatchSnapshot();
});