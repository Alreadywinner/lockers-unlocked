import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LocalStorageDataProvider } from '@context';
import NFLPage from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof NFLPage> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/NFLPage',
  component: NFLPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <LocalStorageDataProvider>
          <Story />
        </LocalStorageDataProvider>
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof NFLPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => <NFLPage />,
};

// Template.args = {

// };
