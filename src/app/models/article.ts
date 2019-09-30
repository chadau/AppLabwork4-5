export class Article {
    author: string;
    title: string;
    description: string;

    deserialize(input: any): this {
        this.author = input.author;
        this.title = input.title;
        this.description = input.description;
        return this;
    }
}
