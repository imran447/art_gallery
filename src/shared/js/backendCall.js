import axios from "axios";
import environment from "./environment";
import {showToastMessage} from './showToastMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const backendCall = async (
  url,
  method = "POST",
  data,
  isNavigate = true,
  isShowErrorMessage = true,
  contentType = "application/json"
) => {
  const _headers = {
    "Content-Type": contentType,
    Authorization: "Bearer " + await AsyncStorage.getItem("token") || "",
  };

  let _response = "";
  await axios(environment.baseUrl + url, {
    method: method,
    data: data,
    headers: _headers,
  })
    .then((response) => {
      _response = response.data;
    })
    .catch((error) => {
      console.log("error herer",error)
      let _responseData = error.response.data;
      if (!_responseData.status) {
        showToastMessage("error","top", _responseData.message);
      }
      _response = _responseData;
      // if (error.response.status === 401 && isNavigate) {
      //   window.location.replace("/");
      //   localStorage.clear();
      // }
    });

  return _response;
};
