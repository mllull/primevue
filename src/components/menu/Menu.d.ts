import { VNode } from 'vue';
import { BadgeSeverityType } from '../badge/Badge';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type MenuAppendToType = 'body' | 'self' | string | undefined | HTMLElement;
type MenuItemBadgeType = number | ((...args: any) => number) | undefined;

export interface MenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A number or a function to return a number to specify if there is a badge and its content.
     */
    badge?: MenuItemBadgeType;
    /**
     * Severity of the displayed badge.
     */
    badgeSeverity?: BadgeSeverityType;
    /**
     * Defines if menu would displayed as a popup.
     */
    popup?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @see MenuAppendToType
     * Default value is 'body'.
     */
    appendTo?: MenuAppendToType;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    'aria-labelledby'?: string | undefined;
}

export interface MenuSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: { item: MenuItem }) => VNode[];
}

export declare type MenuEmits = {
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus: (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur: (event: Event) => void;
};

declare class Menu extends ClassComponent<MenuProps, MenuSlots, MenuEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof Menu
     */
    toggle: (event: Event) => void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof Menu
     */
    show: (event: Event, target?: any) => void;
    /**
     * Hides the overlay.
     *
     * @memberof Menu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menu: GlobalComponentConstructor<Menu>;
    }
}

/**
 *
 * Menu is a navigation / command component that supports dynamic and static positioning.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [Menu](https://www.primefaces.org/primevue/menu)
 *
 */
export default Menu;
