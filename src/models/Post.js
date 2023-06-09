export default class Post {
    constructor(title) {
        this.title = title;
        this.date = new Date();
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
    get upperCaseTitle() {
        return this.title.toUpperCase()
    }
}
import('lodash').then(_ => {
    console.log('Lodash', _)
})