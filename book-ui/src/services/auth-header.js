export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.basicToken) {
    return { Authorization: 'Basic ' + localStorage.getItem('basicToken') };
  } else {
    return {};
  }
}
