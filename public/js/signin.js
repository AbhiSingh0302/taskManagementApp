const form = document.querySelector("form");

form.addEventListener("submit",async e => {
    try {    
        e.preventDefault();
        const resp = await axios.post("/signin/user",form,{
            headers: {
                "Content-Type": "application/json"
            }
        });

        localStorage.setItem("jwt-token",resp.data.token);
        
    } catch (error) {
        console.log(error);
    }
})