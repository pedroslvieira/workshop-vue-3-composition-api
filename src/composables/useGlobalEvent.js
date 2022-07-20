import { onMounted } from "vue";

export const useGlobalEvent = (event) => {



  onMounted(() => {
    document.addEventListener(event, () => {
      console.log(event);
    })
  });
};
