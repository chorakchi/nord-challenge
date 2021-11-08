import { sort } from "./sort";

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev", lab:{lablab: 1} },
        { id: 3, url: "https://www.url3.dev", lab:{lablab: 3}  },
        { id: 2, url: "https://www.link2.dev", lab:{lablab: 2} }
      ];
  
      const output = [
        { id: 1, url: "https://www.url1.dev", lab:{lablab: 1} },
        { id: 2, url: "https://www.link2.dev", lab:{lablab: 2} },
        { id: 3, url: "https://www.url3.dev", lab:{lablab: 3}  }
      ];
  
      expect(sort("lab.lablab",input)).toEqual(output);
  
    });
  });