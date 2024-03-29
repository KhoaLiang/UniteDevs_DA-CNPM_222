
import axios from "axios";

export const searchItem = async (input) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/searchItem/${input}`,
  });
  return res.data;
};
export const getAllProduct = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getAllProduct`,
  });
  return res.data;
};
export const getProductById = async (ID) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getProductById/${ID}`,
  });
  return res.data;
};
export const getProductByDev = async (Dev) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getProductByDev/${Dev}`,
  });
  return res.data;
};
export const getProductByCode = async (Code) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getProductById/${Code}`,
  });
  return res.data;
};
export const getProductByCategory = async (Category) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getProductByCategory/${Category}`,
  });
  return res.data;
};
export const getProductByDevAndCate = async (Dev, Category) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getProductByCategory/${Category}/${Dev}`,
  });
  return res.data;
};

export const detailProduct = async (id) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/detailProduct/${id}`,
  });
  return res.data;
};

export const getAllCategory = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getAllCategory`,
  });
  return res.data;
};

export const getAllAttribute = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getAllAttribute`,
  });
  return res.data;
};

export const signIn = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/user/signIn`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const signUp = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/user/signUp`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const getProfile = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/user/getProfile`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const editProfile = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:3001/user/editProfile`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};
export const setAvatar = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `https://jsonplaceholder.typicode.com/todos/1`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAvatar = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/user/getAvatar`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const changePassword = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:3001/user/changePassword`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const forgetPassword = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/user/forgetPassword`,
    data: formValue,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const getOrderByUser = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/order/getOrderByUser`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

export const viewDetailOrder = async (token, orderId) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/order/viewDetailOrder/${orderId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const addOrder = async (token, formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/order/addOrder`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
  return res.data;
};
export const getAllShipping = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/order/getAllShipping`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getShipping = async (token, id) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/order/getShipping/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getVoucherUserHas = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/order/getVoucherUser`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

