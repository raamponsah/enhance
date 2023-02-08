// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function Element ({ html, state }) {
  return html`
  
<div>

  <p>${state.attrs.message || 'Hello World!'}</p>
</div>`
}

