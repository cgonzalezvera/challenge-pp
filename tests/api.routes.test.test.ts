import { ITestResponseModel, ITestSumModel } from './../src/models/testModel';
import supertest from "supertest";
import { WebApiConfig } from "../src/webApi.config";
import { ENVCONFIG } from '../src/config'

const webApi = new WebApiConfig(ENVCONFIG.PORT, ENVCONFIG.NODE_ENV).setup();

describe("POST /test-sum", () => {
    it("responde con 12 cuando se envian 10 y 2", (done) => {
        const requestData: ITestSumModel = {
            "a": 10,
            "b": 2
        };
        const responseExpected = { success: true, value: 12 } as ITestResponseModel;

        supertest(webApi.app)
            .post("/test-sum")
            .send(requestData)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, responseExpected)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});