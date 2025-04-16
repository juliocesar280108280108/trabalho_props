import { CardFinal } from "./components/CardFinal";
import { CardInicial } from "./components/CardInicial";
import { useState } from "react";
export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmit() {
    if (rateNote !== 0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a rate button!")
 }

 function handleChangeRateNote(value) {
  setRateNote(value)
 }

  return (
      submited === false ? (
        <CardInicial handleChangeRateNote={handleChangeRateNote} handleSubmit={handleSubmit} />
      ) : (
        <CardFinal rateNote={rateNote} />
      )
  )
}