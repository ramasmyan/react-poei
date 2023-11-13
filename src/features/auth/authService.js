

const register = async (userData) => {
    try {
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: userData,
        });
        const responseData = await response.json();
        if (!response.ok) {
            return rejectWithValue(responseData);
        }
        return responseData;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
export default register;