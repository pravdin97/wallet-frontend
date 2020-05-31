import api from "./api";

const getCategoriesTest = () => {
  return [
    { id: 1, name: "продукты" },
    { id: 2, name: "хоз товары" },
    {
      id: 3,
      name: "техника",
      childrens: [
        { id: 4, name: "телефоны" },
        {
          id: 5,
          name: "компьютеры",
          childrens: [{ id: 6, name: "видеокарта" }],
        },
      ],
    },
  ];
};

const getCategories = () => api.get("/categories");

export default {
  getCategories,
  getCategoriesTest,
};
