export class Article {
    author: string;
    title: string;
    description: string;
    image: string;
    author2: string;
    title2: string;
    description2: string;
    image2: string;
    //public i: number;


    deserialize(input: any): this {
        //this.i = 0;

        /* this.author = input.articles[this.i].author;
        this.title = input.articles[this.i].title;
        this.description = input.articles[this.i].description;
        return this; */

        this.author = input.articles[0].author;
        this.title = input.articles[0].title;
        this.description = input.articles[0].description;
        this.image = input.articles[0].urlToImage;

        this.author2 = input.articles[1].author;
        this.title2 = input.articles[1].title;
        this.description2 = input.articles[1].description;
        this.image2 = input.articles[1].urlToImage;
        return this;

    }
}
