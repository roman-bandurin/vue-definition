export default VueMaterial

declare namespace VueMaterial {
	type theme = 'md-primary' | 'md-accent' | 'md-warn'
	type TODO = 'TODO'

 interface Avatar {
		theme: theme
		'avatar-icon': boolean
		icon: Icon[]
	}

	export interface BottomBar {
		theme: theme
		shift: boolean
		change(): void
		click(): void
	}

	export interface BottomBarItem {
		theme: theme
		icon: string
		iconsrc: string
		iconset: string
		active: boolean
		href: string
		disabled: boolean
	}

	export interface BottomBarItem {
		theme: theme
		icon: string
		iconsrc: string
		iconset: string
		active: boolean
		href: string
		disabled: boolean
	}

	export interface Button {
		theme: theme
		disabled: boolean
		type: string
		href: string
		click(): void

		raised: boolean
		iconbutton: boolean
		dense: boolean
		fab: boolean
		fabtype: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
	}

	export interface ButtonToggle {
		theme: theme
		single: boolean
		buttons: Button[]
	}

	// export interface Card {
	// 	theme: theme
	// 	withhover: boolean
	// 	headers: TODO
	// 	content: any
	// 	actions: TODO
	//
	// }
	//
	// export interface CardArea {
	// 	inset: boolean
	// }
	//
	// export interface CardMedia {
	// 	ratio: boolean
	// 	medium: boolean
	// 	big: boolean
	// }

	export interface Checbox {
		theme: theme
		model: string
		name: string
		id: string
		disabled: string
	}

	export interface Chip {
		theme: theme
		disabled: boolean
		delete(): void
		edit(): void

		deletable: boolean
		editable: boolean
	}

	export interface Chips {
		theme: theme
		model: any[]
		disabled: true
		'input-id': string
		'input-name': string
		'input-placeholder': string
		'input-type': string
		static: boolean
		max: number
		change(): void
	}

	// export interface Dialog {
	//
	// }

	export interface File {
		model: string
		id: string
		name: string
		disabled: boolean
		required: boolean
		accept: string
		multiple: string
		input(): void
		selected(): void
	}

	export interface Icon {
		theme: theme
		src: string
		iconset: string
	}

	export interface Image {
		theme: theme
		src: string
	}

	export interface InkRipple {
		disabled: boolean
	}

	export interface InputContainer {
		inline: boolean
		'has-password': boolean
		clearable: boolean

		'input-invalid': boolean
	}

	export interface Input {
		model: string
		type: string
		debounce: number
		disabled: boolean
		required: boolean
		placeholder: string
		maxlength: number
		readonly: boolean
	}

	export interface Autocomplete {
		model: string
		debounce: number
		fetch: Function
		list: any[]
		'filter-list': Function
		'min-chars': number,
		'prepare-responce-data': Function
		'print-attribute': string
		'query-param': string
		disabled: boolean
		required: boolean
		placeholder: string
		maxlength: number
		change(): void
		input(): void
		selected(): void
	}

	export interface Textarea {
		model: string
		debounce: number
		disabled: boolean
		required: boolean
		placeholder: string
		maxlength: number
		readonly: boolean
	}

	export interface List {
		dence: boolean
		'double-line': boolean
		'triple-line': boolean
	}

	export interface ListItem {
		href: string
		target: string
		disabled: boolean
		'expand-multiple': boolean
		inset: boolean
		click(): void
	}

	//ListExpand

	export interface Menu {
		size: number
		direction: 'top left' | 'top right' | 'bottom left' | 'bottom right'
		'align-trigger': boolean
		'offset-x': number
		'offset-y': number
		'close-on-select': boolean
	}

	//MenuContent

	export interface MenuItem {
		disabled: boolean
		selected(): void
	}

	export interface Onboarding {
		theme: theme
		auto: boolean
		infinite: boolean
		duration: number
		controls: boolean
		swipeable: boolean
		'swipe-distance': number
	}

	export interface Progress {
		theme: theme
		indeterminate: boolean
		progress: number
	}

	export interface Radio {
		theme: theme
		model: string
		value: string
		name: string
		id: string
		disabled: boolean
		change(): void
	}

	export interface RatingBar {
		theme: theme
		'max-rating': number
		'full-icon': string
		'empty-icon': string
		'full-iconset': string
		'empty-iconset': string
		'icon-size': number
		disabled: boolean
		change(): void
		hover(): void
	}

	export interface Select {
		model: string
		name: string
		id: string
		disabled: boolean
		required: boolean
		placeholder: string
		'menu-class': string
		selected(): void
		change(): void
		opened(): void
		closed(): void
	}

	export interface Option {
		value: string
		disabled: boolean
		selected(): void
	}

	export interface Sidenav {
		swipeable: boolean
		'swipe-threshold': number
		'swipe-distance': number
		open(): void
		close(): void
		toogle(): void

		display: 'left' | 'right'
		fixed: boolean
	}

	export interface Snackbar {
		position: 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right'
		duration: number
		open(): void
		close(): void
	}

	export interface SpeedDial {
		open: 'click' | 'hover'
		mode: 'fling' | 'scale'
		direction: 'top' | 'right' | 'bottom' | 'left'
		fabtype: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
	}

	export interface Spinner {
		theme: theme
		size: number
		stroke: number
		indeterminate: boolean
		progress: number
	}

	//export interface Stepper

	export interface Subheader {
		theme: theme
		inset: boolean
	}

	export interface Switch {
		theme: theme
		model: string
		type: string
		name: string
		id: string
		disabled: boolean
		change(): void
	}

	// export interface Tabs
	//
	// export interface Table

	export interface Toolbar {
		theme: theme
		dense: boolean
		size: 'medium' | 'large'
		'account-header': boolean
	}

	export interface Tooltip {
		direction: 'top' | 'right' | 'bottom' | 'left'
		delay: number
	}

	export interface Whiteframe {
		elevation: number
		tag: string
	}

	export interface Layout {
		tag: string
		gutter: boolean | 8 | 16 | 24 | 40
		row: boolean
		'row-xsmall': boolean
		'row-small': boolean
		'row-medium': boolean
		'row-large': boolean
		'row-xlarge': boolean

		column: boolean
		'column-xsmall': boolean
		'column-small': boolean
		'column-medium': boolean
		'column-large': boolean
		'column-xlarge': boolean

		'hide-xsmall': boolean
		'hide-small': boolean
		'hide-medium': boolean
		'hide-large': boolean
		'hide-xlarge': boolean

		'hide-xsmall-and-up': boolean
		'hide-small-and-up': boolean
		'hide-medium-and-up': boolean
		'hide-large-and-up': boolean
		'hide-xlarge-and-up': boolean

		flex: boolean | number
		'flex-xsmall': boolean | number
		'flex-small': boolean | number
		'flex-medium': boolean | number
		'flex-large': boolean | number
		'flex-xlarge': boolean | number

		'md-flex-offset': number
		'md-flex-offset-xsmall': number
		'md-flex-offset-small': number
		'md-flex-offset-medium': number
		'md-flex-offset-large': number
		'md-flex-offset-xlarge': number

		align: 'start' | 'center' | 'end'
		'align-xsmall': 'start' | 'center' | 'end'
		'align-small': 'start' | 'center' | 'end'
		'align-medium': 'start' | 'center' | 'end'
		'align-large': 'start' | 'center' | 'end'
		'align-xlarge': 'start' | 'center' | 'end'

		'vertical-align': 'start' | 'center' | 'end' | 'stretch'
		'vertical-align-xsmall': 'start' | 'center' | 'end' | 'stretch'
		'vertical-align-small': 'start' | 'center' | 'end' | 'stretch'
		'vertical-align-medium': 'start' | 'center' | 'end' | 'stretch'
		'vertical-align-large': 'start' | 'center' | 'end' | 'stretch'
		'vertical-align-xlarge': 'start' | 'center' | 'end' | 'stretch'
	}

}
