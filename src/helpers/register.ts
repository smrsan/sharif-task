export default function register({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  localStorage.setItem(
    "loginInfo",
    JSON.stringify({
      username,
      email,
      password,
    })
  );
}
