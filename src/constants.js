import messages_mx from './translations/es-MX.json';
import messages_es from './translations/en-MX.json';

/// Messages
export const messages = {
  'es-MX': messages_mx,
  'en-MX': messages_es
};

export const ERROR_STATUS = {
  500  : "error_server",
  2136 : "error_network",
  400  : "error_badrequest",
  404  : "error_notFound",
  409  : "error_conflict"
};