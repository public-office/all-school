import React from 'react'
import { styled } from 'stitches.config'
import { EventsList } from 'components/EventsList'
import { Layout } from 'components/Layout'

export default function Events({ page = {} }) {

  return (
    <Layout>
      <h1>Events</h1>
      <EventsList events={page.events}/>
    </Layout>
  );
};