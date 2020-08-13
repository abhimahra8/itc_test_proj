import { checkKeys, checkLength } from "./helper";

declare let describe;
declare let it;


export default testSession => {
  describe("TV Series Unit Tests", () => {
    it("Get Tv series details", done => {
      testSession
        .get(`/tv/36`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          checkKeys(res.body, ["id", "series_name", "overview"]);
          done();
        });
    });

    it("Get Beneficiary", done => {
      testSession
        .get(`$/topTvSeries`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          checkLength(res.body, "" ,5);
          done();
        });
    });

  });
};
