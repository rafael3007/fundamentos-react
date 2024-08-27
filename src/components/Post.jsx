import { Header } from "./Header";

/* eslint-disable react/prop-types */
export default function Post(props) {
  return (
    <>
      <Header />
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
