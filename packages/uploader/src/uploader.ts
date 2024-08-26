export const Run = () => {
    console.log('Uploader');

    // create a div with id uploaderRoot
    const uploaderRoot = document.createElement('div');
    uploaderRoot.id = 'uploaderRoot';

    // append the div to the body
    document.body.appendChild(uploaderRoot);

    document.querySelector('#uploaderRoot')!.innerHTML = `
        <div class="content">
            <h1>⏫ Uploader 0.0.1</h1>
        </div>
    `;
}