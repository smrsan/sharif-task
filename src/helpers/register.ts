export default function register({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}
