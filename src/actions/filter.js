import {instance} from "../api/api";
import {setFilter} from "../reducers/filterReducer";


export const getFilterAC = () => {
  return async (dispatch) => {
    const response = await instance.get('catalogues/')
    dispatch(setFilter(response.data))
  }
}