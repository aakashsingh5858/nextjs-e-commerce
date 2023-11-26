import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const getProductDetails = async (id) => {
//   try {
//     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export async function generateStaticParams() {
//   const category = await axios.get(
//     "https://fakestoreapi.com/products/categories"
//   );

//   const path = category?.data.map((c) => ({
//     params: {
//       slug: c,
//     },
//   }));

//   return {
//     path,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ param }) {
//   console.log(param, "params");
// }
// console.log(getStaticProps());

export const getCategories = async (slug) => {
  console.log(slug);
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories?[slug]=${slug}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
