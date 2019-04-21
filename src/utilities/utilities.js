/**
 * Convert camel case strings to hyphenated lowercase strings
 * 
 * @param {string} string - camel cased string to convert
 * @return {string}
 */
export const convertToKebab = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Convert hyphenated strings to camel case strings
 * 
 * @param {string} string - hyphenated string to convert
 * @param {boolean} pascal - capitalize the first letter in the string
 * @return {string}
 */
export const convertToCamel = (string, pascal = false) => {
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
    return convertToCamel(string, pascal)
  } else if (string.match(/([a-z])([A-Z])/g)) {
    return convertToKebab(string)
  } else {
    return string;
  }
} 