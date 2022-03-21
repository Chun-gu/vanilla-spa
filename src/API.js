const API_URL = "http://35.76.53.28:8080/";

export async function getData(END_POINT) {
  try {
    const fullURL = `${API_URL}${END_POINT}`;
    const response = await fetch(fullURL);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (error) {
    alert(error.message);
  }
}
