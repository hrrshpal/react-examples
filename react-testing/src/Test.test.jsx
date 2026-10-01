import React from "react";
import { render, screen } from "@testing-library/react";
import Test from "./Test";
import { expect, test } from "vitest";

test('list contains 5 animals', ()=>{
    render(<Test/>);
    const listElements = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(listElements).toBeInTheDocument();
    expect(listElements).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
    })