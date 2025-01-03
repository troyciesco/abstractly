import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { libraryLinks } from "../../lib/library-links"

export function LibraryMenu({ menuButtonX = "right", menuButtonY = "top" }) {
	return (
		<Menu>
			<MenuButton
				className="border-neutral-200 shadow-primary-300 flex fixed flex-col justify-center items-center w-8 h-8 bg-white rounded-full border shadow-sm cursor-pointer"
				style={{ [menuButtonX]: "12px", [menuButtonY]: "12px" }}
				data-gfe-screenshot-exclude="true">
				<span>🎨</span>
			</MenuButton>
			<MenuItems
				anchor="bottom end"
				className="border-neutral-200 shadow-primary-300 flex flex-col gap-2 px-4 py-2 mt-1 bg-white rounded-lg border shadow-sm">
				<MenuItem>
					<a href="/">Main Home</a>
				</MenuItem>
				<MenuItem>
					<a href="/library">Library Home</a>
				</MenuItem>
				<hr />
				{libraryLinks.map((link) => (
					<MenuItem key={link.slug}>
						<a href={`/library/${link.slug}`}>{link.name}</a>
					</MenuItem>
				))}
			</MenuItems>
		</Menu>
	)
}
