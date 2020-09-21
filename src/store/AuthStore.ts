import { observable } from 'mobx'

class AuthStore {
  @observable isSignedIn = false
}

export default new AuthStore()
