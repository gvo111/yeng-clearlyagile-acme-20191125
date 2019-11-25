import {jsonGet} from "../http";
import {apiUrl} from "../constants";

describe("greetings api", function () {

    it("has a default route", async function () {
        const response = await jsonGet(`${ apiUrl }/greetings` );

        expect(response).toEqual({error:null, data: {text:"Hello, World!"}});
    });

});
