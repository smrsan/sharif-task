export default function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}
