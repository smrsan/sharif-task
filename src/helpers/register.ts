export default function register({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  console.log(password.replace(/./g, "*"));

  localStorage.setItem(
    "loginInfo",
    JSON.stringify({
      username,
      email,
    })
  );
}
