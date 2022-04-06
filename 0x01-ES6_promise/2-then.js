export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(Error);
    }
    console.log('Got a response from API');
  });
}
