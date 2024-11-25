const url = "http://172.20.10.7:8000";

export const getDestinations = async () => {
    try {
        const response = await fetch( url+`/destinations`, {
            method: "GET",
        });

        const data = await response.json();
        
        if (!response.ok) throw new Error("Error en la respuesta");

        console.log("data response getDestinations: ", data);
        
        return data;
    } catch (error) {
        console.log("Error fetching destinations: ", error);
    }
}

export const getDestination = async (id) => {
    try {
        const response = await fetch (url+`/destinations/${id}`, {
            method: "GET"
        }) 

        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Error fetching destination:', error)
    }
}

export const addDestination = async (newDestination) => {
    try {
        const response = await fetch (url+`/destinations`, {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDestination),
        })

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error adding new destination: ', error)
    }
}

export const deleteDestination = async(id) => {
    try {
        const response = await fetch (url+`/destinations/${id}`, {
            method: "DELETE"
        })

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error deleting destination: ', error)
    }
}

export const editDestination = async(id, editedDestination) => {
    try {
        const response = await fetch (url+`/destinations/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedDestination),
        }) 

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error editing destination: ', error)
    }
}