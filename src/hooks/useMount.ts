import { useEffect } from "react";
import isFunction from "../utils/isFunction";
const useMount = (fn: () => void) => {
  if (!isFunction(fn)) console.error("useMount的参数需要是一个函数");
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
