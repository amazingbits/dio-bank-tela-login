import { doLogin } from "./Login.tsx";

describe("do login", () => {
  const mockAlert = jest.fn();
  global.alert = mockAlert;
  it("show welcome message", () => {
    doLogin();
    expect(mockAlert).toBeCalled();
  });
});
