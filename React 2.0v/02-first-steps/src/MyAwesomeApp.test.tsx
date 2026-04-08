import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe('MyAwesomeApp', () => {
    test('should render firstname and lastname', () => {
        const { container } = render(<MyAwesomeApp />)

        screen.debug();

        const h1 = container.querySelector('h1')
        const h3 = container.querySelector('h3')

        expect(h1?.innerHTML).toContain("Carlos");
        expect(h3?.innerHTML).toContain("Flores");

    })
})