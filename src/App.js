import "./App.css";
import { InputSection } from "./Component/InputSection/InputSection";
import { useState } from "react";
import { ViewUser } from "./Component/ViewUser/ViewUser";
import { ContextInputs } from "./Component/ContextInputs/ContextInput";

function App() {
  const [AllInputs, setAllInputs] = useState([
    { id: 0, name: "milad", username: "khoshnadim" },
    { id: 1, name: "sajad", username: "zeraatCar" },
    { id: 2, name: "mphamad", username: "yonesi" },
  ]);
  const [inputVal, setInputVal] = useState({ id: 0, name: "", username: "" });
  const [editKey, setEditKey] = useState(false);

  return (
    <>
      <ContextInputs.Provider
        value={{
          inputVal,
          setInputVal,
          editKey,
          setEditKey,
          AllInputs,
          setAllInputs,
        }}
      >
        <div className="Mainbady">
          <div className="HeadSubject">React Crud App With Hooks</div>
          <div className="MainPage">
            <div className="TwoSection">
              <InputSection />
              <section className="SectionRight">
                <span className="subjectSectionLeft">Wiev Users</span>
                <ViewUser />
              </section>
            </div>
          </div>
        </div>
      </ContextInputs.Provider>
    </>
  );
}

export default App;
