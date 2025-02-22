import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
    document.getElementById("fetchData").addEventListener("click", async () => {
        try {
            let response = await fetch("http://localhost:8000/hello");
            let data = await response.json();
            document.getElementById("response").innerText = data.message;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
});