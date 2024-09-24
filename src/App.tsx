import { twMerge } from "tailwind-merge";
import styled from "styled-components";

const HelloWorld = styled.h1`
  font-size: 30px;
  color: #ed4848;
  text-decoration: line-through;
  &:hover{
    color:blue;
  }
`;
export default function App() {
  const isActive = true;
  return (
    <>
    <h1 
      className={twMerge(
        "text-rose-500", 
        "font-bold",
        "text-5xl",
        "text-black"
      )}
    >
      Hello World!
    </h1>
    <button
      className = {twMerge(
        "p-2 border border-gray-500 rounded-md bg-black text-white",
        isActive && "bg-blue-500 border-blue-500"
    )}
    >
      클릭
    </button>
    </>
  )
}