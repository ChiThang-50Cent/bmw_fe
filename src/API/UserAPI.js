import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { url as apiUrl } from "./const";

export default function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);
    const [history, setHistory] = useState([]);
    const [callback, setCallback] = useState(false);
    const [infor, setInfor] = useState([]);

    useEffect(() => {
        if (token) {
            const getUser = async() => {
                try {
                    const response = await axios.get(apiUrl + `/user/infor`, {
                        headers: { Authorization: token },
                    });
                    setIsLogged(true);
                    response.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
                    setCart(response.data.cart);
                    setInfor([
                        response.data.name,
                        response.data.mobile,
                        response.data.address,
                    ]);
                } catch (err) {
                    Swal.fire("Error", err.response.data.msg, "error");
                }
            };
            getUser();
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            const getHistory = async() => {
                if (isAdmin) {
                    const response = await axios.get(apiUrl + `/payment`, {
                        headers: { Authorization: token },
                    });
                    setHistory(response.data);
                } else {
                    const response = await axios.get(apiUrl + `/user/history`, {
                        headers: { Authorization: token },
                    });
                    setHistory(response.data);
                }
            };
            getHistory();
        }
    }, [token, isAdmin]);

    const addCart = async(product) => {
        if (!isLogged) {
            Swal.fire("Fail!", "Please login to be able to shop", "error");
        }

        const check = cart.every((item) => {
            return item._id !== product._id;
        });
        if (check) {
            setCart([...cart, {...product, quantity: 1 }]);
            await axios.patch(
                apiUrl + "/user/addcart", { cart: [...cart, {...product, quantity: 1 }] }, {
                    headers: { Authorization: token },
                }
            );
            Swal.fire(
                "Thank you!",
                "This product has been added to cart!",
                "success"
            );
        } else {
            Swal.fire("Thank you!", "This product is already in your cart!", "info");
        }
    };

    const updateInfo = async(data) => {
        const { name, phone, address } = data;
        if (!isLogged) {
            Swal.fire("Fail!", "Please login to be able to shop", "error");
        }
        setInfor([name, phone, address]);

        const _token = await getCSToken();

        try {
            await axios.post(
                apiUrl + "/user/update", {...data }, {
                    headers: { Authorization: token, _token },
                }
            );
            Swal.fire("Thank you!", "Update infor success!", "success");
        } catch (err) {
            Swal.fire({
                title: "Error",
                text: err.response.data.msg,
                icon: "error",
                button: "OK",
            });
        }
    };

    const getCSToken = async() => {
        try {
            const tk = await axios.get(apiUrl + "/user/cs_", {
                headers: { Authorization: token },
            });
            return tk.headers._token;
        } catch (err) {
            return null;
        }
    };

    return {
        getCSToken,
        updateInfo: updateInfo,
        addCart: addCart,
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        callback: [callback, setCallback],
        history: [history, setHistory],
        infor: [infor, setInfor],
        cart: [cart, setCart],
    };
}