import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

function Navbar() {
  return (
    <NavigationMenu class="grid grid-cols-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default Navbar;
