'use client'

import { XIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'

const Demo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content h="100%" w="100%">
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline" width="full">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button width="full">Confirm</Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default function Page() {
  return (
    <Stack h="200vh">
      <Demo />
    </Stack>
  )
}
