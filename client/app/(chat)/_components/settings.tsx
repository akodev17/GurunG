import { Button } from '@/components/ui/button'
import { SettingsIcon } from 'lucide-react'
import React from 'react'

const Settings = () => {
  return (
    <Button size="icon" variant={"default"}>
      <SettingsIcon />
    </Button>
)
}

export default Settings