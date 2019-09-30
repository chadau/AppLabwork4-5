export class Meteo {
    public city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;

    deserialize(input: any): this {
        this.city = input.name;
        this.temperature = input.main.temp;
        this.humidity = input.main.humidity;
        this.windSpeed = input.wind.speed;
        return this;
    }
}
