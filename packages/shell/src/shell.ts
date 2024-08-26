export const Shell = () => {
    // create a div with id root
    const shellRoot = document.createElement('div');
    shellRoot.id = 'shellRoot';

    // append the div to the body
    document.body.appendChild(shellRoot);

    document.querySelector('#shellRoot')!.innerHTML = `
        <div class="content">
            <h1>App Shell</h1>
        </div>
    `;
}

Shell();
