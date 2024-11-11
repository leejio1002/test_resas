import { useDispatch } from "react-redux";
import { fetchPrefectures } from "../api/resas";

export default function useResas(){
    const dispatch=useDispatch();

    const loadPrefectures=async()=>{
        await fetchPrefectures(dispatch);
    }

    return{
        loadPrefectures
    }
}