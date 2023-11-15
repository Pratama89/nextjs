import { describe } from "node:test"
import { render, screen } from "@testing-library/react"
import ProductPage from "@/pages/product"

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        route: "/product",
        pathname: "",
        query: "",
        asPath: "",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
        isReady: true,
      }
    }
  }
})

describe("Product Page", () => {
    it("should render the Product Page", () => {
        const page = render(<ProductPage />)
        // expect(screen.getByTestId("title").textContent).toBe("Product Pages")
        expect(page).toMatchSnapshot()
    })
})