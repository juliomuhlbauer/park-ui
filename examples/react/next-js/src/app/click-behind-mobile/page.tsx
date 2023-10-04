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
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
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

  const searchParams = useSearchParams()

  return (
    <Stack>
      <p>{searchParams.get('index')}</p>

      {Array.from({ length: 10 }).map((_, i) => (
        <Link key={i} href={`/click-behind-mobile?index=${i}`}>
          <Button
            variant="outline"
            placeholder={`Input ${i}`}
            onClick={() => {
              router.push(`/click-behind-mobile?index=${i}`)
            }}
            w="100%"
          >
            Hello {i}
          </Button>
        </Link>
      ))}

      <DemoMenu />
    </Stack>
  )
}

const DemoMenu = (props: MenuProps) => {
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
