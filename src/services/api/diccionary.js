export const diccionary = {
    catalogs:{
        URLGeneric:{
            method: "GET",
            url: `${process.env.REACT_APP_URL_MS}`,
        },
        URLGenericPOST:{
            method: "POST",
            url: `${process.env.REACT_APP_URL_MS}`,
        },
        BranchesByUser: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}branchOffice`,
        },
        Managers: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}collectionAgents`,
        },
        Groups: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_MS}sucursalesdigitales/api/groups-catalog`
        },
        obtain: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_LOWCOLLABORATOR}obtain`,
        },

    },
    reports:{
        ProgressRecovery: {
            method: "POST",
            url: `${process.env.REACT_APP_URL_NIFI}collection`,
        },
        paymentAgreement: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}payment-agreement`,
        },
        paymentAgreementPost: {
            method: "POST",
            url: `${process.env.REACT_APP_URL_COBRANZA}payment-agreement`,
        },
        dispatchExternal: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}portfolio/external-dispatch`,
        }
    },
    digitalBranches:{
        events:{
            method: "POST",
            url:    `${process.env.REACT_APP_URL_NIFI}` 
        },
        zonification: {
            method: "POST",
            url:    `${process.env.REACT_APP_URL_NIFI_DATOS}` 
        },
        detailZonification: {
            method: "GET",
            url:  `${process.env.REACT_APP_URL_MS}sucursalesdigitales/api/group-detail` 
        }
    },
    agreements:{
        Agreements:{
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}getAgreements`,
        },
        catAgreement:{
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}agreements`,
        }
    },
    agreementRTM:{
        agreementPagePOST:{
            method: "POST",
            url: `${process.env.REACT_APP_URL_MS}cobranza/recovery`,
        },
        agreementPageGET:{
            method: "GET",
            url: `${process.env.REACT_APP_URL_MS}cobranza/recovery`,
        }
    },
    collections:{
        collectionGET: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}`,
        },
        collection: {
            method: "POST",
            url: `${process.env.REACT_APP_URL_COBRANZA}`,
        },
        Collections: {
            method: "POST",
            url: `${process.env.REACT_APP_URL_COBRANZA}groupsCollectionPortfolio`,
        },
        Amortizations: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}amortizations`,
        },
        Portafolio: {
            method: "GET",
            url: `${process.env.REACT_APP_URL_COBRANZA}portfolio`,
        },
        PortafolioPost: {
            method: "POST",
            url: `${process.env.REACT_APP_URL_COBRANZA}portfolio`,
        },
        AmortizationPays: {
            method: "POST",
            url:    `${process.env.REACT_APP_URL_API_SIM}serviceToUpdateAmortizations/`,
        }
    },
    pomelo:{
        nip: {
            method: "POST",
            url:    `${process.env.REACT_APP_URL_MS}ms/pomelo/obtain/nip/card/pomelo`,
        },
        updateNip: {
            method: "PUT",
            url:    `${process.env.REACT_APP_URL_MS}ms/pomelo/update/nip/card/pomelo`,
        }
    },
    metaCard: {
        replacement: {
            method: "POST",
            url:    `${process.env.REACT_APP_URL_POMELO}replacement/card/`,
        }
    },
    references: {
        referenceSIM: {
            method: "POST",
            url:    `${process.env.REACT_APP_URL_API_SIM}generateReferenceParcial/`,
        }
    } 
};