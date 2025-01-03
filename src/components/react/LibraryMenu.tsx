import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

export function LibraryMenu({ menuButtonX = "right", menuButtonY = "top" }) {
	return (
		<Menu>
			<MenuButton
				className="fixed rounded-full border border-neutral-200 w-8 h-8 flex flex-col items-center justify-center cursor-pointer bg-white shadow-sm"
				style={{ [menuButtonX]: "12px", [menuButtonY]: "12px" }}
				data-gfe-screenshot-exclude="true">
				<span>🎨</span>
			</MenuButton>
			<MenuItems
				anchor="bottom end"
				className="bg-white px-4 py-2 mt-1 flex flex-col gap-2">
				<MenuItem>
					<a href="/">Main Home</a>
				</MenuItem>
				<MenuItem>
					<a href="/library">Library Home</a>
				</MenuItem>
				<MenuItem>
					<a href="/library/testimonial-card">Testimonial Card</a>
				</MenuItem>
			</MenuItems>
		</Menu>
	)
}
