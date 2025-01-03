import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

export function SgMenu({ menuButtonX = "right", menuButtonY = "top" }) {
	return (
		<Menu>
			<MenuButton
				className="fixed rounded-full border border-neutral-200 w-8 h-8 flex flex-col items-center justify-center cursor-pointer bg-white shadow-sm"
				style={{ [menuButtonX]: "12px", [menuButtonY]: "12px" }}
				data-gfe-screenshot-exclude="true">
				<span>🎨</span>
			</MenuButton>
			<MenuItems anchor="bottom">
				<MenuItem>
					<a href="/">Home</a>
				</MenuItem>
			</MenuItems>
		</Menu>
	)
}
