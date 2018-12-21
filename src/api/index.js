import * as contentful from 'contentful'

const client = contentful.createClient({
  space: '9ph3glql7ljh',
  accessToken: '0841982f30f938f230bcae9f4c3e6f07a17516b8a71eff3221543c56e51313de'
})

export const fetchTestimonials = () => client.getEntries({
  content_type: 'coachTestimonials'
})

export const fetchCoachPage = () => client.getEntries({
  content_type: 'coach'
})

export const fetchFooter = () => client.getEntries({
  content_type: 'footer'
})

export const fetchHomePage = () => client.getEntries({
  content_type: 'homePage'
})

export const fetchTestimonialsHomePage = () => client.getEntries({
  content_type: 'testimonialsHomePage'
})
