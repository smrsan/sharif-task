export default function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  console.log(password.replace(/./g, "*"));

  localStorage.setItem(
    "loginInfo",
    JSON.stringify({
      username,
    })
  );
}
