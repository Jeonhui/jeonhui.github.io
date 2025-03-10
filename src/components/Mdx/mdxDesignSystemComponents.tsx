import { MDXComponents } from "mdx/types"
import {
  Code,
  Container,
  Divider,
  GradientText,
  Link,
  Text,
} from "@/design-system/components"

const mdxDesignSystemComponents: MDXComponents = {
  h1: ({ children }) => (
    <Text typography={"header2_bold"}>
      {children}
      <br />
    </Text>
  ),
  h2: ({ children }) => (
    <Text typography={"header5_bold"}>
      {children}
      <br />
    </Text>
  ),
  h3: ({ children }) => (
    <Text typography={"header4_bold"}>
      {children}
      <br />
    </Text>
  ),
  h4: ({ children }) => (
    <Text typography={"header5"}>
      {children}
      <br />
    </Text>
  ),
  h5: ({ children }) => (
    <Text typography={"header6"}>
      {children}
      <br />
    </Text>
  ),
  h6: ({ children }) => (
    <GradientText typography={"header6_bold"}>
      {children}
      <br />
    </GradientText>
  ),
  code: ({ children }) => <Code>{children}</Code>,
  a: ({ children, href }) => (
    <Link href={href} size={"small"} color={"text"}>
      {children}
    </Link>
  ),
  p: ({ children }) => (
    <Container alignment={"rowCenterLeft"} gap={"small"}>
      {children}
    </Container>
  ),
  hr: ({}) => <Divider />,

  // ul: ({ children }) => (
  //   <List
  //     values={([children].flat() as HTMLElement[]).map(
  //       (children) => children.innerText,
  //     )}
  //     list={(text) => {
  //       return <Text typography={"body1"}>{text}</Text>
  //     }}
  //   />
  // ),
}

export default mdxDesignSystemComponents
