/**
 * Optional with FormData
 * @returns {Function} - This function Needs SubmitEvent
 */
export function es7Version(): Function {
  const mapNames: Set<string> = new Set()
  
  return (event: SubmitEvent, outputElm?: HTMLElement): Set<string> | void => {
    const { target } = event
    // 1. FormData
    const formData = new FormData(target as HTMLFormElement)
    const name = (formData.get('names')?.toString() || '').trim() // TODO: search any input value
    
    if (name.includes(',')) {
      name.split(',').forEach(name => mapNames.add(name.trim()))
    } else {
      mapNames.add(name)
    }

    if (outputElm) {
      outputElm.textContent = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(mapNames)
    } else {
      return mapNames
    }
  }
}