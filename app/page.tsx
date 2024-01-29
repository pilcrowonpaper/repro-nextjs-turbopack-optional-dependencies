import { hash } from "@node-rs/argon2";

export default async function () {
  const hashed = await hash("password");
  return <p>{hashed}</p>;
}
