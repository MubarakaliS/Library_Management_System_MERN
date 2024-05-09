import React from 'react'

import aboutImage from '../../Assets/aboutImage.jpg'
const AboutHome = () => {
    return (
        <div>
            <h1 data-aos="fade-right" data-aos-duration="1000" className='mx-3 mt-5' style={{ fontSize: 'clamp(30px,4vw,102px)' }}>ABOUT</h1>
            <div className='container-fluid row m-0 ' style={{ height: 'auto' }}>
                <div className='col-12 col-lg-7 col-lg-mt-5 col-lg-mb-5' >
                    <p data-aos="fade-up" data-aos-duration="1000" className='lead mt-4' style={{ textAlign: 'justify' }} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The library at Government Arts College (Autonomous) caters to the academic needs of the MCA department with a vast collection of books, journals, and digital resources. Its modern infrastructure includes computers, internet access, and study spaces conducive to both individual and group learning. Trained staff members assist users with locating materials and utilizing library services effectively. The collection encompasses textbooks, reference materials, and research papers relevant to computer science and applications. Digital resources such as e-books and online journals enhance research capabilities. Various study zones accommodate different learning preferences. Services offered include reference assistance, circulation, and interlibrary loan. The library operates during regular college hours, with extended hours during peak academic periods. Overall, it serves as a central hub for academic exploration and research within the MCA department.e</p>
                    <br />
                    <p className='lead' data-aos="fade-up" data-aos-duration="1000" style={{ textAlign: 'justify' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A book is a written or printed work consisting of pages bound together, typically with a protective cover. It serves as a medium for conveying ideas, stories, information, or arguments. Books come in various genres and formats, including fiction, non-fiction, novels, essays, and textbooks, catering to diverse interests and purposes. They play a significant role in education, entertainment, and the dissemination of knowledge across cultures and generations.</p>
                </div>
                <div  className='col-12 col-lg-5 mb-4'>
                    <img className='img-fluid' data-aos="fade-up" data-aos-duration="1000"  src={aboutImage} alt='bookImage' />
                </div>
            </div>
        </div>
    )
}

export default AboutHome