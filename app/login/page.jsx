import Navbar from '../../components/navbar/Navbar'
import LoginForm from '../../components/forms/loginForm'
import FooterComponent from '@/components/home/footer'
export default function LoginPage() {

    return (
        <div>
            <Navbar />
            <div className='flex mx-auto w-full h-full  max-w-xs items-center my-40'>
                <div className='flex items-center mx-auto'>
                    <LoginForm />
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}