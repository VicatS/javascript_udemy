const indexedDB = window.indexedDB

if (indexedDB) {
    let db
    const request = indexedDB.open('taskList', 1)
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = () => {
        db = request.result
        console.log('CREATE', db)
        const objectStore = db.createObjectStore('tasks')
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }
}