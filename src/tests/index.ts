declare let describe;
declare let before;
declare let after;

import session from "supertest-session";
import { before as mainSetup } from "../tests/setup";
import { after as mainTeardown } from "../tests/setup";

import testTvSeriesDetails from "./series";

import { app } from "../";

before(done => {
  app.on("ready", () => {
    // initialize database
    mainSetup();
    done();
  });
});

describe("Running tests.index", async () => {

  const testSession = session(app);

  testTvSeriesDetails(testSession);

});

after(done => {
  mainTeardown();
  done();
});
