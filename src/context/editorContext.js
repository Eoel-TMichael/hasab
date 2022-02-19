import { createContext, useState } from "react";

export const EditorContext = createContext();

function EditorContextProvider({ children }) {
  const [marked, setMarked] = useState(true);

  const toggleMarked = () => setMarked((prevMarked) => !prevMarked);

  return (
    <EditorContext.Provider value={{ marked, toggleMarked }}>
      {children}
    </EditorContext.Provider>
  );
}

export default EditorContextProvider;
