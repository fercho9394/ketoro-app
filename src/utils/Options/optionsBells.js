import IconsLabel from "@sistemas_metafinanciera/meta-componets-web/dist/components/iconActions/IconsLabel";


export const optionsCollections = (optionSelected, setOptionSelected) => {
    const listOptions = [];

    const selectOption = (option) => {

        optionSelected['bells'] = option;
        setOptionSelected((prev) => {
            return { ...prev, ...optionSelected }
        });

    }

    listOptions[1] = {
        optionMenu  : <IconsLabel classNameIcon={"ml-3 cursor-pointer"} sizeIcon={25} iconHeader={"contacts_product"} textIcon={"ASIGNADO"} classNameTextIcon={"ml-2 text-12"} iconCompress={true} />,
        isactive    : optionSelected.bells === "assign" ? true : false,
        callBack    : () => selectOption("assign")
    };

    listOptions[2] = {
        optionMenu  : <IconsLabel classNameIcon={"ml-3 cursor-pointer"} sizeIcon={25} iconHeader={"contacts_product"} textIcon={"PRIMER CONTACTO"} classNameTextIcon={"ml-2 text-12"} iconCompress={true} />,
        isactive    : optionSelected.bells === "contact" ? true : false,
        callBack    : () => selectOption("contact")
    };

    listOptions[3] = {
        optionMenu  : <IconsLabel classNameIcon={"ml-3 cursor-pointer"} sizeIcon={25} iconHeader={"contacts_product"} textIcon={"AGENDADO"} classNameTextIcon={"ml-2 text-12"} iconCompress={true} />,
        isactive    : optionSelected.bells === "agend" ? true : false,
        callBack    : () => selectOption("agend")
    };

    listOptions[4] = {
        optionMenu  : <IconsLabel classNameIcon={"ml-3 cursor-pointer"} sizeIcon={25} iconHeader={"next_plan"} textIcon={"SEGUIMIENTO"} classNameTextIcon={"ml-2 text-12"} iconCompress={true} />,
        isactive    : optionSelected.bells === "followup" ? true : false,
        callBack    : () => selectOption("followup")
    };

    listOptions[5] = {
        optionMenu  : <IconsLabel classNameIcon={"ml-3 cursor-pointer"} sizeIcon={25} iconHeader={"3p"} textIcon={"PRIMERA CONVERSIÓN"} classNameTextIcon={"ml-2 text-12"} iconCompress={true} />,
        isactive    : optionSelected.bells === "conversion" ? true : false,
        callBack    : () => selectOption("conversion")
    };

    return listOptions;
}