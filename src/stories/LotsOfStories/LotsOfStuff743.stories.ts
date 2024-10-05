import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';

import LotsOfStuff from '../LotsOfStuff';

const meta = {
  title: 'Pages/LotsOfStuff743',
  component: LotsOfStuff,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LotsOfStuff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FormFilledOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fill out the form
    await userEvent.type(canvas.getByLabelText(/First Name/i), 'John');
    await userEvent.type(canvas.getByLabelText(/Last Name/i), 'Doe');
    await userEvent.type(canvas.getByLabelText(/Email/i), 'john.doe@example.com');
    await userEvent.type(canvas.getByLabelText(/Phone Number/i), '1234567890');
    await userEvent.type(canvas.getByLabelText(/Address/i), '123 Main St');
    await userEvent.type(canvas.getByLabelText(/City/i), 'Anytown');
    await userEvent.type(canvas.getByLabelText(/Postal Code/i), '12345');
    await userEvent.type(canvas.getByLabelText(/Additional Comments/i), 'This is a test comment');

    // Submit the form
    // const submitButton = canvas.getByRole('button', { name: /Submit/i });
    // await userEvent.click(submitButton);

    // Add assertions to verify form submission
    // Note: These assertions depend on how your form handles submission
    // You may need to adjust these based on your actual implementation
    await expect(canvas.getByLabelText(/First Name/i)).toHaveValue('John');
    await expect(canvas.getByLabelText(/Last Name/i)).toHaveValue('Doe');
    await expect(canvas.getByLabelText(/Email/i)).toHaveValue('john.doe@example.com');
    // Add more assertions as needed
  },
};

export const DrawerAndDropdownInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the drawer
    const menuButton = canvas.getByLabelText('menu');
    await userEvent.click(menuButton);

    // Check if the drawer is open
    const drawer = screen.getByTestId('drawer');
    await expect(drawer).toBeInTheDocument();

    // Close the drawer
    const closeButton = within(drawer).getByRole('button');
    await userEvent.click(closeButton);

    // Open the dropdown
    const dropdownButton = canvas.getByRole('button', { name: 'Dropdown' });
    await userEvent.click(dropdownButton);

    // Check if the dropdown menu is open
    const dropdownMenu = screen.getByRole('menu');
    await expect(dropdownMenu).toBeInTheDocument();

  },
};

