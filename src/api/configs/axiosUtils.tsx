import { AxiosResponse } from 'axios'

export const defineCancelApiObject = (apiObject: AxiosResponse) => {
  const cancelApiObject: any = {}
  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject: any = {
      controller: undefined
    }

    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        if (cancellationControllerObject.controller) {
          cancellationControllerObject.controller.abort()
        }

        cancellationControllerObject.controller = new AbortController()

        return cancellationControllerObject.controller
      }
    }
  })

  return cancelApiObject
}
