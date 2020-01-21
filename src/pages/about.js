import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  image: {
    background: '#143296',
    marginTop: '20px',
    width: '100%',
    height: '200px',
  }
}));
export default function About() {
  const classes = useStyles()
  return (
  <Layout>
    <SEO title='About' />
    <h1>About Us</h1>
    <div className={classes.image}></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum scelerisque enim. Morbi felis leo, posuere in libero eget, scelerisque mollis lorem. Donec tempor nisl et rutrum bibendum. Maecenas eget tortor at quam scelerisque finibus. Donec ex ipsum, tincidunt eget consectetur eu, vestibulum ac dolor. Phasellus sagittis commodo purus, at iaculis lorem laoreet sed. Suspendisse nec ultrices ante. Integer vestibulum, justo eget varius bibendum, dui enim malesuada metus, non facilisis justo lacus ut odio. Phasellus dignissim dolor eget laoreet sagittis. Praesent sollicitudin in neque vel facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lobortis mi et justo aliquam, vel convallis elit posuere.</p>
    <p>Aenean viverra bibendum dolor, sit amet mattis metus auctor eu. Fusce purus lacus, pulvinar et convallis vel, aliquet non risus. Phasellus purus magna, sodales in lorem ac, lobortis rutrum libero. Maecenas arcu metus, dictum vitae maximus eu, blandit nec leo. Nunc eu mi aliquet erat mattis sagittis. In ac blandit massa, sodales mattis purus. Cras at augue sapien. Nulla congue auctor massa at posuere. Etiam mollis, dui eget vehicula consequat, turpis quam accumsan tellus, vitae bibendum libero risus non est. In nisl urna, accumsan at enim id, facilisis vehicula orci. Fusce molestie neque accumsan, iaculis dui in, dignissim risus. Nulla commodo feugiat volutpat. Proin convallis nisi at dui tempor sollicitudin.</p>
    <p>Sed viverra, massa ac eleifend dapibus, sapien ligula efficitur odio, non dignissim nisl tortor a tortor. Ut ac pulvinar mauris. Proin rutrum imperdiet odio eget ultricies. Etiam dui purus, iaculis nec velit in, iaculis mollis dui. Nunc pulvinar aliquet magna rutrum sodales. Donec pellentesque et lectus vitae vehicula. Praesent ut diam id velit mollis sagittis sit amet at massa. In gravida vestibulum est, nec iaculis ex maximus ac. Aliquam arcu purus, hendrerit sed libero ut, pellentesque tempus leo.</p>
  </Layout>
)
}

