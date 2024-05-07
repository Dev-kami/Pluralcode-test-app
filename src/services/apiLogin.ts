export function Login(email: string, password: string) {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
}
