import * as Button from '@/components/Button'

const componentsList = Button.default
const LabradaComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach( name => {
      Vue.component(name, componentsList[name])
    })
  }
}

export default LabradaComponents