import Current from "tools/current";

export default class HomePage {
    public static available = class{
        public static title = async (title) => expect(await Current.page().textContent('h1')).toBe(title);
    }
}