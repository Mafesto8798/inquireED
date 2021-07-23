import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import type {RootState,AppDispatch} from './store'

//Typed hooks for more type control.
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector