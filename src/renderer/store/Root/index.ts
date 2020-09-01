import { observable, action } from 'mobx'

class Root {
    @observable userInfo = {
        name: ''
    }
    @observable loading = false
    @action updateName = (name: string): void => {
        this.userInfo.name = name
    }
    @action setLoading = (boolean: boolean): void => {
        this.loading = boolean
    }
}

export default new Root()
