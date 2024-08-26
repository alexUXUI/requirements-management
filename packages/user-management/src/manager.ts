export const Run = () => {
    console.log('Manager');

    // create a div with id managerRoot
    const managerRoot = document.createElement('div');
    managerRoot.id = 'managerRoot';

    // append the div to the body
    document.body.appendChild(managerRoot);

    document.querySelector('#managerRoot')!.innerHTML = `
        <div class="content">
            <h1>🔐 Manager 0.0.2 🚀</h1>
        </div>
    `;
}