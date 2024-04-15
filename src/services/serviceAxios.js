import axios    from 'axios';

/* Constants */
import {ERROR_STATUS} from "../constants";

export default class ServiceAxios {

    constructor (ambient) {
        this.ambient  = ambient;

        if(typeof ServiceAxios.instance === "object"){
            return ServiceAxios.instance;
        }

        ServiceAxios.instance = this;
        return this;
    }

    async executeService(urlService, methodService, responseTypeService, bodyService, headerService){

        try {
            const responseRest = await axios({
              url:          urlService,
              method:       methodService,
              responseType: responseTypeService,
              data:         bodyService,
              headers:      headerService
            })
            return responseRest; 
        } catch (error) {

            console.log("Error mensaje")
            console.log(String(error.message))
            var code = 'error_faild';
            /// Error network
            if(String(error.message) === "Network Error"){
                code = ERROR_STATUS[2136];
            }else if(String(error.message) === "Request failed with status code 400"){
                code = ERROR_STATUS[400];
            }else if(String(error.message) === "Request failed with status code 404"){
                code = ERROR_STATUS[404];
            }else if(String(error.message) === "Request failed with status code 409"){
                code = ERROR_STATUS[409];
            }else{

            }
            return code;
        }

    }

    async serviceRest(verb, endpoint, bodyRaw){

        try {
            const responseRest = await axios({
              url:    endpoint,
              method: verb,
              data:   bodyRaw
            });
            return responseRest; 
        } catch (error) {
            //console.log(error)
            var code = 'error_faild';
            /// Error network
            if(String(error.message) === "Network Error"){
                code = ERROR_STATUS[2136];
            }else if(String(error.message) === "Request failed with status code 404"){
                code = ERROR_STATUS[404];
            }else{

            }
            return code;
        }
    }

    async serviceDocuments(verb, endpoint, bodyRaw, headers){
        try {
            const responseRest = await axios({
              url:          endpoint,
              method:       verb,
              responseType: "blob",
              data:         bodyRaw,
              headers:      headers
            });
            return responseRest; 
        } catch (error) {
            //console.log(error)
            var code = 'error_faild';
            /// Error network
            if(String(error.message) === "Network Error"){
                code = ERROR_STATUS[2136];
            }else if(String(error.message) === "Request failed with status code 404"){
                code = ERROR_STATUS[404];
            }else{

            }
            return code;
        }
    }

    async serviceRestHeaders(verb, endpoint, bodyRaw, headers){
        try {
            const responseRest = await axios({
              url:     endpoint,
              method:  verb,
              data:    bodyRaw,
              headers: headers
            });
            return responseRest; 
        } catch (error) {
            //console.log(error)
            //console.log(error.message)
            var code = 'error_faild';
            /// Error network
            if(String(error.message) === "Network Error"){
                code = ERROR_STATUS[2136];
            }else if(String(error.message) === "Request failed with status code 404"){
                code = ERROR_STATUS[404];
            }else{

            }
            return code;
        }
    }

}