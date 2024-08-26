export const Run = () => {
    console.log('Library');

    // create a div with id root
    const libraryRoot = document.createElement('div');
    libraryRoot.id = 'libraryRoot';

    // append the div to the body
    document.body.appendChild(libraryRoot);

    document.querySelector('#libraryRoot')!.innerHTML = `
        <div class="content">
            <h1>📚 Library 0.0.2 🚀</h1>
        </div>
    `;
}