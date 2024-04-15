
/// formatter query 
export const formatterQuery = (objectQuery) => {

  var queries = "";

  for (var i = 0; i < objectQuery.length; i++) {
    queries += `${objectQuery[i]['aliasName']}: ${objectQuery[i]['entityName']}(${objectQuery[i]['params']}) ${objectQuery[i]['reponse']}`;
  }
  
  return queries;
};

/// formatter mutation
export const formatterMutation = (objectMutation) => {

  var mutations = "";

  for (var i = 0; i < objectMutation.length; i++) {
    mutations += `${objectMutation[i]['aliasName']}: ${objectMutation[i]['entityName']}(${objectMutation[i]['params']}) ${objectMutation[i]['reponse']}`;
  }
  
  return mutations;
};

/// Clear cache to app 
export const clearCacheData = () => {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
};

/// Clear acentors
export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const clearSpaces = (str) => {
  return str.replace(/\s/g,'');
}

export const convertFirstCharacterToUppercaseEx = (stringToConvert) => {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);

  return firstCharacter.toUpperCase() + restString;
};

export const convertToLowerCase = (stringToConvert) => {
  return stringToConvert.toLowerCase();
};

const convertFirstCharacterToUppercase = (stringToConvert) => {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);

  return firstCharacter.toUpperCase() + restString;
};

export const convertFirstCharacterAllWordsToUppercase = (stringToConvert) => {
  const wordsArray = stringToConvert.split(" ");
  const convertedWordsArray = wordsArray.map((word) => {
    return convertFirstCharacterToUppercase(word);
  });

  return convertedWordsArray.join(" ");
};

export const convertNumberToCurrency = (valueNumber) => {

  return  !isNaN(String(valueNumber).replace(",", "")) === true ? 
            "$" + String(
                    new Intl.NumberFormat("es-MX", {
                      minimumFractionDigits: 2,
                    }).format(
                      String(valueNumber).replace(",", "")
                    )
                  )
          : 
            "0.00";
};

export const convertPorcentNumber = (valueNumber) => {
  return  !isNaN(String(valueNumber).replace(",", "")) === true ? 
             String(
                    new Intl.NumberFormat("es-MX", {
                      minimumFractionDigits: 2,
                    }).format(
                      String(valueNumber).replace(",", "")
                    )
                  ) + "%" 
          : 
            "0%";
};

export const flattenMessages = (nestedMessages, prefix = "") => {
    if (!nestedMessages || nestedMessages === null) {
      return {};
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
          const value = nestedMessages[key];
          const prefixedKey = prefix ? `${prefix}.${key}` : key;
      
          if (typeof value === "string") {
            Object.assign(messages, { [prefixedKey]: value });
          } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
          }
      
          return messages;
    }, {});
};