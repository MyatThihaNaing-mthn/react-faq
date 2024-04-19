import FaqItem from './FaqItem'
import { getImageUrl } from '../utils'

function FaqList({faqList}){
    const listFaqs = faqList.map(faq => <FaqItem question={faq.question} answer={faq.answer} key={faq.id}/>)
    const imageUrl = getImageUrl('icon-star.svg');
    console.log(imageUrl);
    return (
        <div className="flex flex-col bg-white rounded-md relative xs:h-3/4 xs:w-11/12 lg:w-5/12 md:w-5/12 lg:h-2/3 xs:px-6 overflow-y-auto w-8/12 grow-0" style={{backgroundColor: 'white'}}>
            <div className='flex items-center mb-6 mt-4'>
                <img alt='start-logo' src={imageUrl} className="xs: w-6 mr-4 " />
                <span className='font-bold text-3xl'>FAQs</span>
            </div>
            {listFaqs}
        </div>
    )
}


export default FaqList