import './style.scss'
import './app.scss'

import tsLogo from "../public/assets/typescript.svg";
import viteLogo from "../public/assets/vite.svg";

import { tmpl, onSubmit, onInput } from './listFormat'

document.querySelector<HTMLDivElement>('#app')!
  .innerHTML = `
    <main>
      <h1>List format</h1>
      ${tmpl}
    </main>
    <footer>
      <figure class="brand">
        <picture>
          <img src="${tsLogo}" alt="Typescript logo" />
        </picture>
      </figure>
      <figure class="brand">
        <picture>
          <img src="${viteLogo}" alt="Typescript logo" />
        </picture>
      </figure>
    </footer>
  `

document
  .querySelector<HTMLFormElement>('.card')
  ?.addEventListener('submit', onSubmit)

document
  .querySelector<HTMLFormElement>('.card input')
  ?.addEventListener('keyup', onInput, { passive: true })

