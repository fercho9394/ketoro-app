import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext }                                       from '@apollo/client/link/context';

/* Constants */
import {ERROR_STATUS} from "../constants";

/* Helpers */
import {formatterQuery, formatterMutation}         from "../helpers/data-format";

export default class ServiceApollo {

    constructor (ambient) {
        this.ambient  = ambient;

        if(typeof ServiceApollo.instance === "object"){
            return ServiceApollo.instance;
        }

        ServiceApollo.instance = this;
        return this;
    }

    conexion(){
        
        var httpLink = createHttpLink({
            uri: "",
        });

        var authLink = setContext((_, { headers }) => {
            // return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                'X-API-KEY': "",
              },
            }
        });

        return  new ApolloClient({
            link:  authLink.concat(httpLink),
            cache: new InMemoryCache()
        });

    }

    async mqueries(namequery, queriesObject ){

        const client  = this.conexion();
        const object  = formatterQuery(queriesObject);

        const queryAppsync = gql`
            query ${namequery} {
                ${object}
            }`;

        try{
            const responseApollo = await  client.query({
                query: queryAppsync
            });
            return responseApollo.data; 
        }catch (error) {
            //console.log(error.message)
            var code = 'error_faild';
            /// Error network
            if(error.message === "Failed to fetch"){
                code = ERROR_STATUS[2136];
            }else{/// Error server appsync
                code = ERROR_STATUS[500];
            }
            return code;
        }

    }

    async mmutations(namemutation, mutationObject){

        const client  = this.conexion();
        const object  = formatterMutation(mutationObject);

        const mutarionAppsync = gql`
            mutation ${namemutation} {
                ${object}
            }`;

        try {
            const responseApollo = await client.mutate({
                mutation: mutarionAppsync
            });
            return responseApollo;
        } catch (error) {
            var code = 'error_faild';

            return code;
        }

    }
    
}