import defaultExport, { bar, foo } from "../mockPartial.js";

jest.mock("../mockPartial.js", () => {
  const originalModule = jest.requireActual("../mockPartial.js");

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

test("should do a partial mock", () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe("mocked foo");
  expect(bar(true)).toBe("bar");
  expect(bar(false)).toBe("foobar");
});
