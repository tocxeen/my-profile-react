import {
  createDatasetFailed,
  createDatasetLoading,
  createDatasetSuccess,
} from "../slices/datasetSlice";

export const _createNewDataset = (data) => {
  return (dispatch, getState) => {
    dispatch(createDatasetLoading);

    try {
      const data1 = {
        id: "1234",
        name: data.name,
        icon: data.icon,
        description: data.description,
      };

      dispatch(createDatasetSuccess({ data: data1 }));
    } catch (error) {
      dispatch(
        createDatasetFailed({ errors: ["Failed to create new Dataset"] })
      );
    }
  };
};

//   export const _removeDataset = (id) => {
//     return (dispatch, getState) => {

//       dispatch(removeIte);

//       try {
//         let lineItems = cart.lineItems.map((item) => item);

//         lineItems.splice(index, 1);

//         lineItems = lineItems.map((item, index) => {
//           return { ...item, cartIndex: index };
//         });

//         Cookies.set("cartData", JSON.stringify(lineItems));

//         if (auth) {
//         }

//         dispatch(
//           removeItem({
//             ...cart,
//             lineItems,
//             status: {
//               loading: false,
//               success: true,
//             },
//           })
//         );
//       } catch (error) {
//         dispatch(
//           removeItem({
//             ...cart,
//             status: {
//               loading: false,
//               success: false,
//               error: "There is an error",
//             },
//           })
//         );
//       }

//       console.log(Cookies.get("cartData"));
//     };
//   };
