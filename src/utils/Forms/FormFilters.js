import Search                      from '@sistemas_metafinanciera/meta-componets-web/dist/components/inputs/Search';
import ReactSelect                 from '@sistemas_metafinanciera/meta-componets-web/dist/components/inputs/ReactSelect';

export const formFilters = () => {

    /*const selectedOptionBranch  =  valueSelected.branch.length > 0 ? valueSelected.branch : catalogs.branchs.find(
        (option) => String(option.value) === String(valueSelected.branch)
    );*/


    return [
        {
            id:             'canalSearch',
            classNameMain:  ``,
            classname:      'sm:w-full sm:-ml-5 md:-ml-6 md:mt-2 md:w-full xl:w-48 xl2:w-48 xl3:w-48 -mt-2 ml-1',
            classnameLabel: 'text-14 xl:ml-4 xl2:ml-4 xl3:ml-4 text-graySIM',
            name:           'canalSearch',
            label:          'Canal',
            type:           'select',
            value:          '',
            placeholder:    '',
            size:           14,
            maxLengh:       20,
            readOnly:       true,
            typeInput:      ReactSelect,
            variant:        '',
            error:          '',
            disabled:       true,
            focused:        true,
            options:        []

        },
        {
            id:                    'searBells',
            classNameMain:         ``,
            classname:             'md:mt-2 -mt-0.5 sm:w-full md:w-full',
            classNameMainSearch:   'sm:w-full md:w-full xl:w-72 xl2:w-72 xl3:w-72 rounded-boxer',
            classNameButtonSearch: 'bg-primarySIM',
            classnameLabel:        '',
            name:                  'searBells',
            label:                 '',
            type:                  'Buscar',
            value:                 '',
            labelButton:           'Buscar',
            placeholder:           'Seleccionar Canal',
            size:                  14,
            maxLengh:              20,
            readOnly:              true,
            typeInput:             Search,
            variant:               '',
            error:                 '',
            disabled:              true,
            focused:               true,
            options:               []

        },
    ]
}