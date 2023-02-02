// export default function getClicks() {
//     window.addEventListener('load', getIframeDoc)

//     function getIframeDoc() {
//         const iframe = document.getElementById('storybook-preview-iframe')

//         //get the stories with show code buttons and turn into array
//         const [...stories] = iframe.contentDocument.querySelectorAll(
//             '.sbdocs-preview'
//         )

//         stories.forEach((story) => {
//             //listen for the show code button to be clicked
//             story.addEventListener('click', (e) => {
//                 console.log(e.currentTarget)
//                 //only run if the code isn't expanded
//                 if (
//                     e.target.classList.contains('docblock-code-toggle') &&
//                     !e.target.classList.contains(
//                         'docblock-code-toggle--expanded'
//                     )
//                 ) {
//                     //get the previous h3 or h1 for title
//                     let title = e.currentTarget.previousElementSibling
//                     while (
//                         !title.classList.contains('sbdocs-h3') &&
//                         !title.classList.contains('sbdocs-h1')
//                     ) {
//                         title = title.previousElementSibling
//                     }
//                     console.log(title.textContent)
//                 }
//             })
//         })
//     }
// }
