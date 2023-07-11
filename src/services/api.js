import instance from "@/plugin/axios";

const httpRequest = (url, options = { method: "GET" }) =>
  instance(url, options);

export { httpRequest };

// Testing
// import instance from "@/plugin/axios";
// import { ref } from "vue";
// export default () => {
//   const results = ref([]);
//   const loading = ref(false);
//   const errors = ref(null);

//   const call = async (url, options = { method: "GET" }) => {
//     await instance(url, options)
//       .then((data) => (results.value = data.data))
//       .catch((error) => (errors.value = error))
//       .finally(() => (loading.value = false));
//   };

//   return { results, loading, errors, call };
// };
