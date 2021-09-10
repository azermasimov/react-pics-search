import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID rHNlrcYhPdOad7A9nLU7GOmC2-e_lpXnAHjxMnfKodM",
    },
});