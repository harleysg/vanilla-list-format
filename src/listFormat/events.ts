import { es5Version } from './es5'
import { es7Version } from './esNext'

const useES7 = es7Version()
const useES5 = es5Version()

export function onInput(event: Event): void {
  const button = document
    .querySelector<HTMLFormElement>('.card button')

  const value = (event.target as HTMLInputElement).value

  button?.toggleAttribute('disabled', value === '')

}

export function onSubmit(event: SubmitEvent): void {
  event.preventDefault()

  const { target } = event
  const formData = new FormData(target as HTMLFormElement)
  const name = (formData.get('names')?.toString() || '').trim()
  const button = document
  .querySelector<HTMLFormElement>('.card button')

  if (name) {
    useES7(event, (target as HTMLFormElement).querySelector('.version-es7')!)
    useES5(event, (target as HTMLFormElement).querySelector('.version-es5')!)

    ;(target as HTMLFormElement)?.reset();
    button?.setAttribute('disabled', 'true')
  }
}