import supertest from "supertest";
import { WebApiConfig } from "../src/webApi.config";
import { ENVCONFIG } from '../src/config'

const webApi = new WebApiConfig(ENVCONFIG.PORT, ENVCONFIG.NODE_ENV).setup();

describe("GET /v1/location", () => {
    it("Responde 200 para ubicacion actual", (done) => {
      
        supertest(webApi.app)
            .get("/v1/location")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});