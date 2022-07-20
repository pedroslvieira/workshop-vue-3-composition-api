import { ref } from "vue";
import axios from "axios";

export const useFetchResource = (url) => {
  const data = ref([]);
  const loadingState = ref(null);

  const fetchResource = () => {
    loadingState.value = "loading";
    return axios.get(url)
      .then(response => {
        loadingState.value = "success";
        data.value = response.data.results;
      })
  }

  return { data, loadingState, fetchResource}
}
