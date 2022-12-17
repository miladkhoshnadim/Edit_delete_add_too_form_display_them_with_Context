import { useContext, useId, useState } from "react";
import { ContextInputs } from "../ContextInputs/ContextInput";

export const InputSection = () => {
  const [Error, setError] = useState(false);
  const ContextInp = useContext(ContextInputs);
  // console.log("ContextInp", ContextInp);

  function handelInputChenge(e) {
    // console.log("!onchenge", e.target.name);
    ContextInp.setInputVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function HandelAddItem() {
    if (
      ContextInp.inputVal.name.length > 3 &&
      ContextInp.inputVal.username.length > 3
    ) {
      ContextInp.setAllInputs((prv) => [
        ...prv,
        { ...ContextInp.inputVal, id: Date.now() },
      ]);
      ContextInp.setInputVal({ id: 0, name: "", username: "" });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }

  function HandelCancel() {
    ContextInp.setInputVal({ id: 0, name: "", username: "" });
    ContextInp.setEditKey(false);
  }

  function HandelEditUser(id) {
    // console.log('id',id )
    if (
      ContextInp.inputVal.name.length > 3 &&
      ContextInp.inputVal.username.length > 3
    ) {
      const EditedInputs = ContextInp.AllInputs.filter(
        (input) => input.id === id
      );
      if (EditedInputs) {
        ContextInp.setAllInputs((prv) =>
          prv.map((item) =>
            item.id === id
              ? {
                  ...item,
                  name: ContextInp.inputVal.name,
                  username: ContextInp.inputVal.username,
                }
              : item
          )
        );
      }
    }
    ContextInp.setEditKey(false);
    ContextInp.setInputVal({ id: 0, name: "", username: "" });
  }

  return (
    <section className="SectionLeft">
      <span className="subjectSectionLeft">Edit User</span>
      <label className="Labels">Name</label>
      {Error && (
        <span className="ErrorInput">Min Character is tree and max 15</span>
      )}

      <input
        value={ContextInp.inputVal.name}
        placeholder="Name"
        className="inputs"
        name="name"
        onChange={handelInputChenge}
      />

      <label className="Labels">Username</label>
      {Error && (
        <span className="ErrorInput">Min Character is tree and max 15</span>
      )}
      <input
        value={ContextInp.inputVal.username}
        placeholder="username"
        className="inputs"
        name="username"
        onChange={handelInputChenge}
      />
      <div className="divButton">
        {ContextInp.editKey ? (
          <button
            className="bottons"
            onClick={() => HandelEditUser(ContextInp.inputVal.id)}
          >
            EditUser
          </button>
        ) : (
          <button className="bottons" onClick={HandelAddItem}>
            Add
          </button>
        )}

        <button className="bottons" onClick={HandelCancel}>
          Cancel
        </button>
      </div>
    </section>
  );
};
