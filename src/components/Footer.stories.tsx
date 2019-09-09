import React from "react"
import { storiesOf } from "@storybook/react"
import { Footer } from "./Footer"

storiesOf("Footer", module)
	.add("with text", () => <Footer>Hello Button</Footer>)
	.add("with some emoji", () => <Footer><span role="img" aria-label="emoji">😀 😎 👍 💯</span></Footer>)
