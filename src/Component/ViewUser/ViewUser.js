import { useContext } from "react";
import { ContextInputs } from "../ContextInputs/ContextInput";

export const ViewUser = ({ AllInputs, setAllInputs }) => {
  const ContextInp = useContext(ContextInputs);
  //   console.log("!viweUser", AllInputs);

  function HandelDelet(id) {
    // const newInputs = AllInputs.splice(id, 1);
    const newInputs = ContextInp.AllInputs.filter((input) => input.id !== id);
    ContextInp.setAllInputs(newInputs);
    // console.log("AllInputs", newInputs);
  }

  function HandelEdit(item) {
    ContextInp.setEditKey(true);
    ContextInp.setInputVal(item);
  }

  return (
    <>
      <section className="SectionInputs">
        <div className="DivHeader">
          <span>Id</span>
          <span>Name</span>
          <span>UserName</span>
          <span>Action</span>
        </div>
        {ContextInp.AllInputs.map((item, ind) => (
          <div key={item.id} className="DivRowes">
            <span>{ind+1}</span>
            <span>{item.name}</span>
            <span>{item.username}</span>

            <div>
              <button
                className="buttonsItem"
                onClick={() => HandelDelet(item.id)}
              >
                Delete
              </button>
              <button className="buttonsItem" onClick={() => HandelEdit(item)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
