import HomePage from "./home.page";

export default class Home {
    public static async loads(){
        await HomePage.available.title('ENSEK Energy Corp.');
    }
}