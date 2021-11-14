import supertest from "supertest";
import { WebApiConfig } from "../src/webApi.config";
import { ENVCONFIG } from '../src/config'
import { expect } from "chai";

const webApi = new WebApiConfig(ENVCONFIG.PORT, ENVCONFIG.NODE_ENV).setup();

describe("GET /v1/current/ciudadNovalida", () => {
    it("Responde con codigo distinto de 200 para ubicacion inexistente", (done) => {

        supertest(webApi.app)
            .get("/v1/current/KKll88383")
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