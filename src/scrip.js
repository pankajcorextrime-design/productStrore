const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;

    db.createObjectStore("users", {
        keyPath: "id"
    });
};

request.onsuccess = (event) => {
    const db = event.target.result;

    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");

    store.put({
        id: 1,
        name: "Pankaj"
    });

    transaction.oncomplete = () => {
        console.log("Data saved successfully");
        db.close();
    };
};