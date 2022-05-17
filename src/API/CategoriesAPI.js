import { useEffect, useState } from "react";
import axios from "axios";
import { url as apiUrl } from "./const";

export default function CategoriesAPI() {
    const [categories, setCategories] = useState([]);
    const [callback, setCallback] = useState(false);

    useEffect(() => {
        const getCategories = async() => {
            const response = await axios.get(apiUrl + `api/api/category`);
            setCategories(response.data);
        };
        getCategories();
    }, [callback]);
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback],
    };
}