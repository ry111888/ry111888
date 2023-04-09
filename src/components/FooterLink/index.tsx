type FooterLinkProps = {
  href: string,
  linkName: string
}

function FooterLink(props: FooterLinkProps){
  return (
    <a href={props.href} target='_blank' style={{
      margin: '0 5px'
    }}>{props.linkName}</a>
  )
}

export default FooterLink