import { useMemo } from "react";
import useToggle from "./useToggle";

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (val: boolean) => void;
  toggle: () => void;
}
function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(defaultValue);
  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      setTrue,
      setFalse,
      set: (v) => set(!!v),
      toggle,
    };
  }, []);
  return [state, actions];
}

export default useBoolean;
