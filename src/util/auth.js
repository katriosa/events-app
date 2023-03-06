export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthloader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
