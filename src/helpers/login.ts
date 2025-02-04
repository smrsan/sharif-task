export default function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  localStorage.setItem(
    "loginInfo",
    JSON.stringify({
      username,
      password,
    })
  );
}
