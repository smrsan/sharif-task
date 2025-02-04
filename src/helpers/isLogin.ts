export default function isLogin() {
  return (
    !!localStorage.getItem("username") && !!localStorage.getItem("password")
  );
}
