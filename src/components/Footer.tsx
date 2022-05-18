import { styled } from '../styles/stitches.config'
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      title: 'Instagram',
      url: '#',
      icon: <FaInstagram color='#e1306c' />,
      color: '#e1306c',
    },
    {
      title: 'Youtube',
      url: '#',
      icon: <FaYoutube color='#ff0000' />,
      color: '#ff0000',
    },
    {
      title: 'Facebook',
      url: '#',
      icon: <FaFacebook color='#166fe5' />,
      color: '#166fe5',
    },
  ]

  return (
    <>
      <Container>
        {links.map((link, index) => {
          return (
            <Anchor
              css={{
                "&:hover": {
                  color: link.color,
                  "i::before": {
                    color: link.color,
                  }
                }
              }}

              key={index} href={link.url} target="_blank">
              <Title>{link.title}</Title>
              <Icon>{link.icon}</Icon>
            </Anchor>
          )
        })}
      </Container>
    </>
  )
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
  zIndex: '1',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '18px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const Anchor = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
