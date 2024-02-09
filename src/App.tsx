import { Button } from '@/conmponents/ui'

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
