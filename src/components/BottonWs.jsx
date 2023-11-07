export function BottonWs () {

    return (
        <a
          href="https://api.whatsapp.com/send?phone=75331045"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 hover:animate-jump"
        >
          <img className='w-6 h-6' src="/img/whatsapp.svg" alt="Botton de whatsapp"/>
        </a>
    )
}