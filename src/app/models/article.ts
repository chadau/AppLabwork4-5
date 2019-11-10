export class Article {
    author: string;
    title: string;
    description: string;
    image: string;
    //public i: number;


    deserialize(input: any): this {
        this.author = input.author;
        this.title = input.title;
        this.description = input.description;
        this.image = input.urlToImage;
        return this;
    }
}
