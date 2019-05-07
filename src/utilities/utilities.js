/**
 * Convert camel case strings to hyphenated lowercase strings
 * 
 * @param {string} string - camel cased string to convert
 * @return {string}
 */
export const convertCamelToKebab = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const convertStringToKebab = (string) => {
  let stringArray = string.match(/([a-zA-Z0-9]*)/gm);
  return stringArray.filter(Boolean).join("-").toLowerCase();
};

/**
 * Convert hyphenated strings to camel case strings
 * 
 * @param {string} string - hyphenated string to convert
 * @param {boolean} pascal - capitalize the first letter in the string
 * @return {string}
 */
export const convertKebabToCamel = (string, pascal = false) => {
	const converter = (matches) => matches[1].toUpperCase();
	let result = string.replace(/(\-\w)/g, converter);

	if ( pascal === true ) {
		result = result.charAt(0).toUpperCase() + result.slice(1);
	} else {
    result = result.charAt(0).toLowerCase() + result.slice(1);
  }

	return result;
}

/**
 * Autodetect string conversion from camel case to hyphenated and vice versa
 * 
 * @param {string} string - string to convert
 * @param {boolean} pascal - capitalize the first letter in the string
 * @return {string}
 */
export const caseConverter = (string, pascal = false) => {
	if (string.match(/(\-\w)/)) {
    return convertKebabToCamel(string, pascal)
  } else if (string.match(/([a-z])([A-Z])/g)) {
    return convertCamelToKebab(string)
  } else {
    return string;
  }
}

/**
 * Convert multiple similarly named keys into a new object
 * 
 * @param {object} obj - shallow object to scan
 * @param {string} str - string to match agains keys, such as "Power Level"
 * @return {object}
 */
export const filterObj = (obj,str) => Object.keys(obj).filter((k) => k.startsWith(str)).reduce((newData, k) => {
  const key = k.replace(/.*\((.*)\)/g,'$1');
    newData[key] = obj[k];
    return newData;
}, {});