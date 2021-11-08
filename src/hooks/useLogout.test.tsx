/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, render } from "@testing-library/react";
import {useLogout} from "./useLogout";

afterEach(cleanup);

test("display success message if it worked", () => {
  const Component = () => {
    const [status, setLogout] = useLogout({redirect:"Text"});

    return (
      <button onClick={()=>{setLogout}} data-testid="btn-example">
        {status == "successful" ? "Yes" : "Nope"}
      </button>
    );
  };

  const { getByTestId } = render(<Component />);
  const button = getByTestId("btn-example");

  expect(button.textContent).toBe("Nope");

  fireEvent.click(button);

  expect(button.textContent).toBe("Nope");
});