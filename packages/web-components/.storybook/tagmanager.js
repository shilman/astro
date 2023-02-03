export default function getClicks() {
    window.addEventListener('DOMContentLoaded', getIframeDoc)

    function getIframeDoc() {
        //helper function to set the stories on a component page
        function setStories(stories) {
            stories.forEach((story) => {
                //listen for the show code button to be clicked
                story.addEventListener('click', (e) => {
                    console.log(e.currentTarget)
                    //only run if the code isn't expanded
                    if (
                        e.target.classList.contains('docblock-code-toggle') &&
                        !e.target.classList.contains(
                            'docblock-code-toggle--expanded'
                        )
                    ) {
                        //get the previous h3 or h1 for title
                        let title = e.currentTarget.previousElementSibling
                        while (
                            !title.classList.contains('sbdocs-h3') &&
                            !title.classList.contains('sbdocs-h1')
                        ) {
                            title = title.previousElementSibling
                        }
                        console.log(title.textContent)
                    }
                })
            })
        }

        // root node is where the iframe will be loaded, get it for mutation observations
        const targetNode = document.getElementById('root')

        // Options for the observer (which mutations to observe)
        const config = { childList: true, subtree: true }

        // Callback function to look for the iframe being loaded
        const callback = (mutationList) => {
            for (const mutationRecord of mutationList) {
                if (!mutationRecord.type === 'childlist') return

                // the iframe exists in a sibling of the mutation record
                if (
                    mutationRecord.nextSibling &&
                    mutationRecord.nextSibling.id ===
                        'storybook-preview-wrapper'
                ) {
                    // iframe exists, get it (it is not fully loaded yet)
                    const iframe = document.querySelector(
                        'iframe#storybook-preview-iframe'
                    )
                    const iframeContent = iframe.contentDocument

                    // add a watcher on the iframe to detect when it has finished loading so content can be accessed
                    iframeContent.onreadystatechange = () => {
                        if (iframeContent.readyState === 'complete') {
                            // iframe does not reload on new page navigation
                            // create new mutation observer to watch the interior of the iframe for mutations
                            const docsRoot = iframeContent.getElementById(
                                'docs-root'
                            )

                            // get the current document title (component name)
                            let currenth1 = docsRoot.querySelector(
                                'h1:first-of-type'
                            ).id
                            console.log(currenth1)

                            const subCallback = (secondMutationList) => {
                                // check to see if mutations have occurred
                                if (secondMutationList) {
                                    console.log(secondMutationList)
                                    // if so, reset the document title (component name)
                                    let newh1 = docsRoot.querySelector(
                                        'h1:first-of-type'
                                    ).id

                                    //check to see if the new document title matches the old, if it does not, a new component page has been loaded
                                    if (newh1 !== currenth1) {
                                        //set the old doc title to the new
                                        currenth1 = newh1
                                        //get the stories and set the event listeners to watch for the show/hide code button
                                        let [
                                            ...stories
                                        ] = iframe.contentWindow.document.querySelectorAll(
                                            '.sbdocs-preview'
                                        )
                                        console.log(
                                            'here are the stories',
                                            stories
                                        )
                                        setStories(stories)
                                    }
                                }
                            }

                            // This is the observer instance watching for changes inside the iframe (watching to see if the component page is different)
                            const secondObserver = new MutationObserver(
                                subCallback
                            )
                            secondObserver.observe(docsRoot, config)

                            // get the stories with show code buttons and set the event listeners (this is for the initial page load)
                            let [
                                ...stories
                            ] = iframe.contentWindow.document.querySelectorAll(
                                '.sbdocs-preview'
                            )
                            console.log('here are the stories', stories)
                            setStories(stories)
                        }
                    }
                }
            }
        }

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback)

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config)
    }
}
