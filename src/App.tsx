import { Button } from '@/components/ui/button'

export function App() {
  return (
    <>
      <div>
        <Button variant={'primary'}>Hello</Button>
      </div>
      <div>
        <Button as={'a'} href={'/'} variant={'primary'}>
          Hello
        </Button>
      </div>
    </>
  )
}
