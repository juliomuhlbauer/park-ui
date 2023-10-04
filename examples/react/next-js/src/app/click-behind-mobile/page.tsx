'use client'

import { Portal } from '@ark-ui/react'
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  type MenuProps,
} from '~/components/ui/menu'
import { Typography } from '~/components/ui/typography'

export default function ClickBehindMobile() {
  const router = useRouter()

  return (
    <Stack>
      {Array.from({ length: 10 }).map((_, i) => (
        <Button
          key={i}
          variant="outline"
          placeholder={`Input ${i}`}
          onClick={() => {
            router.push(`/click-behind-mobile?index=${i}`)
          }}
        >
          Hello {i}
        </Button>
      ))}

      <DemoMenu />
    </Stack>
  )
}

export const DemoMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuTrigger asChild>
        <Button variant="outline" size={props.size}>
          Open menu
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItemGroup id="group-1">
              <MenuItemGroupLabel htmlFor="group-1">My Account</MenuItemGroupLabel>
              <MenuSeparator />
              <MenuItem id="profile">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <UserIcon />
                    Profile
                  </HStack>
                  <Typography as="span" color="fg.subtle" textStyle="xs">
                    ⇧⌘P
                  </Typography>
                </HStack>
              </MenuItem>
              <MenuItem id="billing">
                <HStack gap="2">
                  <CreditCardIcon /> Billing
                </HStack>
              </MenuItem>
              <MenuItem id="settings">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <SettingsIcon /> Settings
                  </HStack>
                  <Typography as="span" color="fg.subtle" textStyle="xs">
                    ⌘,
                  </Typography>
                </HStack>
              </MenuItem>

              <MenuSeparator />
              <MenuItem id="logout">
                <HStack gap="2">
                  <LogOutIcon />
                  Logout
                </HStack>
              </MenuItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
