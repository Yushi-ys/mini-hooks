import { useCallback, useState } from "react";
import { isFunction } from "../utils";

type obj = Record<string, any>;
type SetState<S extends obj> = <K extends keyof S>(
  state: Pick<S, K> | ((prevState: Readonly<S>) => Pick<S, K>)
) => void;

const useSetState = <S extends obj>(
  initState: S | (() => S)
): [S, SetState<S>] => {
  const [state, setState] = useState<S>(initState);

  const setMergeState = useCallback((param: obj | null) => {
    setState((preState) => {
      console.log(preState);
      const newState = isFunction(param) ? param(preState) : param;
      return newState ? { ...preState, ...newState } : preState;
    });
  }, []);

  return [state, setMergeState];
};

export default useSetState;
