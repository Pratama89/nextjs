import { describe } from "node:test"
import AboutPage from "@/pages/about"
import { render, screen } from "@testing-library/react"

describe("About Page", () => {
    it("should render the About Page", () => {
        const page = render(<AboutPage />)
        expect(screen.getByTestId("title").textContent).toBe("About Pages")
        expect(page).toMatchSnapshot()
    })
})