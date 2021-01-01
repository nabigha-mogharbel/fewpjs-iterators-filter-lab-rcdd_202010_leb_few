// Code your solution here
const findMatching= (array, driver) => array.filter(string => string.toLowerCase()===driver.toLowerCase())
const fuzzyMatch=(array,driver) => array.filter(string => string.charAt(0)===driver.charAt(0))
const matchName=(array,driver) => array.filter(string => string === array.name)