export function es5Version(): Function {
  let listNames: string[] = []

  function avoidDuplicates(value: string) {
    if (!listNames.includes(value)) {
      listNames.push(value)
    }
  }

  return (event: SubmitEvent, outputElm?: HTMLElement) => {
    let result = '';
    const { target } = event
    const _ = {
      comma: ', ',
      and: ', and '
    }
    const elements = [].slice.call((target as HTMLFormElement)?.querySelectorAll('input')) as HTMLInputElement[]
    
    elements.forEach(({ value }) => {
      if (value.includes(',')) {
        value.split(',').forEach(name => avoidDuplicates(name.trim()))
      } else {
        avoidDuplicates(value.trim())
      }
      
    })

    if (outputElm) {
      listNames.forEach((name, index) => {
        if (index === 0) {
          result = result.concat(name)
        } else if (listNames.length - 1 === index) {
          result = result.concat(_.and).concat(name)
        } else {
          result = result.concat(_.comma).concat(name)
        }
      })
      outputElm.textContent = result
    }
  }
}