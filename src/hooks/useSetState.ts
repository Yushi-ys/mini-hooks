import { useCallback, useState } from "react";
import { isFunction } from "../utils";

type obj = Record<string, any>;
type SetState<S extends obj> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prev: S) => Pick<S, K> | S | null)
) => void;

const useSetState = <T extends obj>(
  initState: T | (() => T)
): [T, SetState<T>] => {
  const [state, setState] = useState<T>(initState);

  const mergeState = useCallback((param: obj | null) => {
    setState((preState) => {
      const newState = isFunction(param) ? param(preState) : preState;
      return newState;
    });
  }, []);

  return [state, mergeState];
};

export default useSetState;
