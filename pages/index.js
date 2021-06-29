
import dynamic from 'next/dynamic';
const DymaicPage = dynamic(() => 
  import('./components/Home')
  .then((mod) => mod.Home),
  {
    loading: () =>
    <div className="lazy-loader">Please wait...</div>,
    ssr: false
    }
)

const index = () => {

  return (
    <>
      <DymaicPage />
      
    </>
  )
}
export default index;
