import supertest from "supertest";
import { WebApiConfig } from "../src/webApi.config";
import { ENVCONFIG } from '../src/config'
import { expect } from "chai";

const webApi = new WebApiConfig(ENVCONFIG.PORT, ENVCONFIG.NODE_ENV).setup();

describe("GET /v1/forecast/ciudadNovalida", () => {
    it("El pronostico a 5 dias responde con codigo distinto de 200 para ubicacion inexistente", (done) => {

        supertest(webApi.app)
            .get("/v1/forecast/KKll88383")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((res) => {
                expect(res.statusCode).to.not.be.equal(200);

            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});