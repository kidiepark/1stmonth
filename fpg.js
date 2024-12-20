function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    
    console.log("Before toggle, classes:", dropdown.classList);
    dropdown.classList.toggle("show");
    console.log("After toggle, classes:", dropdown.classList);
}