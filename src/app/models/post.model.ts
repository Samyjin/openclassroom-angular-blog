export class Post {
    constructor(public title: string,
                public content: string,
                public loveIts: number = 0,
                public createdAt: Date = null) {
        if (!this.createdAt) {
            this.createdAt = new Date();
        }
    }
}
