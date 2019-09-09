import React from "react"
import { storiesOf } from "@storybook/react"
import { Header } from "./Header"

storiesOf("Header", module)
	.add("with text", () => <Header>Hello Button</Header>)
	.add("with some emoji", () => <Header><span role="img" aria-label="emoji">😀 😎 👍 💯</span></Header>)
