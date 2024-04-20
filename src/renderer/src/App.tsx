import { Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 ">Sidebar</Sidebar>
        <Content>Content</Content>
      </RootLayout>
    </>
  )
}

export default App
