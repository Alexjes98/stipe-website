export async function resetPassword(token: string,
    password: string): Promise<any> {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/resetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, password }),
        }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}