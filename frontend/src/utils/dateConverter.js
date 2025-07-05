function convertDateToWords(dateString) {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString('en-US', options); // 'en-US' for English (United States) locale
}

// const dateInYYYYMMDD = "2023-10-27";
// const dateInWords = convertDateToWords(dateInYYYYMMDD);
// console.log(dateInWords); // Output: October 27, 2023

export default convertDateToWords;