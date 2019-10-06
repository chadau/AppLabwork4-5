export class Meteo {
    city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
    icon: string;

    deserialize(input: any): this {
        this.city = input.name;
        this.temperature = input.main.temp;
        this.humidity = input.main.humidity;
        this.windSpeed = input.wind.speed;
        this.icon = 'http://openweathermap.org/img/wn/' + input.weather[0].icon + '@2x.png';
        return this;
    }
}
