import {useDispatch} from "react-redux";
import {ThunkDispatchType} from "../redux/types";

export const useAppDispatch = () => useDispatch<ThunkDispatchType>()