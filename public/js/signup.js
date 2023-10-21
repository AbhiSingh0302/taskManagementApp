const form = document.querySelector("form");
form.addEventListener("submit",async e => {
    try {    
        e.preventDefault();
        const resp = await axios.post("/signup",form,{
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(resp);
    } catch (error) {
        console.log(error);
    }
})