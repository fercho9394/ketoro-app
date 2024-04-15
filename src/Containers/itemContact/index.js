import DataTables                    from '@sistemas_metafinanciera/meta-componets-web/dist/components/legacy/dataTables/DataTables';
import Label                         from '@sistemas_metafinanciera/meta-componets-web/dist/components/labels/Label';
import React, {useState}             from 'react';

/* Form */
import {formFilters}         from '../../utils/Forms/FormFilters';

/* Headers */
import columnItemTable    from '../../utils/HeadersTables/columnItemTable';

export default ({props}) => {

    const columns  = React.useMemo(() =>  columnItemTable );

    return(
        <div className='flex flex-col'>
           <div>
                <div className={`flex sm:flex-col md:flex-col flex-row-reverse justify-evenly`} >
                    {
                        formFilters().map((row, i) =>
                            <div key={i} className={`${row.classNameMain} sm:mb-4`} >
                                <div className='flex sm:flex-row md:flex-row xl:flex-col xl2:flex-col xl3:flex-col justify-evenly'>
                                    <div className=''>
                                        <Label  textLabel={row.label} className={`${row.classnameLabel}`} />
                                    </div>
                                    <div className={row.classname}>
                                        {
                                            row.type === "select" ?
                                                <row.typeInput 
                                                    zIndexValue={9999}
                                                    multipleOption={true}
                                                    noOptionsMessage={""} 
                                                    loadingMessage={""} 
                                                    placeholder={""} 
                                                    options={row.options.length > 0 && row.options}
                                                    onChange={(activity) => console.log("data")}
                                                    isDisabled={false} 
                                                    valueSelected={row.value}
                                                />
                                            :
                                                <row.typeInput 
                                                    nameInput={row.name}
                                                    BtnText={row.labelButton} 
                                                    valueInput={row.value}
                                                    reverseButton={true}
                                                    className={""}
                                                    placeholderInput={"Buscar por prospecto"}
                                                    classNameMain={row.classNameMainSearch} 
                                                    classNameBtn={row.classNameButtonSearch} 
                                                    classNameGInput={""}
                                                    classNameInputGroup={"sm:w-auto"}
                                                    classNameInput={"text-negro"}
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
           </div>
           <div className='mt-2'>
                <DataTables 
                    classNameMain={0 > 2 ? "h-82" : ""} 
                    colSpanEmpty={columns.length} 
                    automaticPagination={false}
                    classNamePaginationNew={"justify-center"}
                    onlyPagination={true}
                    classNameTDEmpty={"text-center text-24"}  
                    textEmpty={"No hay información de momento"} 
                    classNameHeader={"bg-blanco"}
                    className={"whitespace-nowrap table-striped"} 
                    footerStiky={true} 
                    styleheader={`${0 > 4 ? "bg-blanco" : ""} text-16 text-negro text-center font-bold` } 
                    columns={columns.length > 0 && columns } 
                    data={[]} 
                    pagination={25} 
                    initialState={{ pageSize: 25 }} 
                    isfooter={false} 
                /> 
           </div>
        </div>
    )
}