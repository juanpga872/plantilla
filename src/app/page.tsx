"use client"

import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/feactures/counterSlice";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <>
    <Input label="Nombre" id="name" type="text" placeholder="Daniela" name={"name"} required={true}/>
    <Button >Enviar</Button>
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <p>total: {count}</p>
    </>
  );
}
