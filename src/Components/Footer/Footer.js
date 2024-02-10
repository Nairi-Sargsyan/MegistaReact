import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer container-fluid p-0">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 p-lg-5 footer__border">
                        <div className="footer__title">
                            <div className="footer__logo text-start mb-3">
                                <img src="./images/footer-logo.png" alt="" />
                            </div>
                            <div className="title_text">
                                <p className="footer__title-text text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-lg-5 footer__border">
                        <div className="footer__content d-flex flex-column align-items-md-center">
                            <p className="content__title">Content</p>
                            <div className="content d-flex flex-column">
                                <a href="/" className="nav-link content__link">Home</a>
                                <a href="/" className="nav-link content__link">About us</a>
                                <a href="/" className="nav-link content__link">Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-lg-5">
                        <div className="footer__contact d-flex flex-column align-items-md-center">
                            <div className="contact">
                                <p className="contact__title">Contact</p>
                                <div className="contact__text mb-3">
                                    <p className="contact__subtitle">Location</p>
                                    <p className="contact__text">Hakob Hakobyan Street, Yerevan</p>
                                </div>
                                <div className="contact__text">
                                    <p className="contact__subtitle">Phone</p>
                                    <p className="contact__text">+374 99 99 99 99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="text-center">
                            <a href="/" className="btn border-0">
                                <svg className="mg-footer-discord-btn" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.3005 7.55025C25.4163 6.67191 23.3763 6.03441 21.2513 5.66608C21.2327 5.66548 21.2141 5.66898 21.197 5.67632C21.1799 5.68367 21.1646 5.69468 21.1521 5.70858C20.8971 6.17608 20.5996 6.78525 20.4013 7.25275C18.1474 6.91275 15.8552 6.91275 13.6013 7.25275C13.403 6.77108 13.1055 6.17608 12.8363 5.70858C12.8221 5.68025 12.7796 5.66608 12.7371 5.66608C10.6121 6.03441 8.58631 6.67191 6.68797 7.55025C6.67381 7.55025 6.65964 7.56441 6.64547 7.57858C2.79214 13.3444 1.72964 18.9544 2.25381 24.5077C2.25381 24.5361 2.26797 24.5644 2.29631 24.5786C4.84631 26.4486 7.29714 27.5819 9.71964 28.3327C9.76214 28.3469 9.80464 28.3327 9.81881 28.3044C10.3855 27.5252 10.8955 26.7036 11.3346 25.8394C11.363 25.7827 11.3346 25.7261 11.278 25.7119C10.4705 25.4002 9.70547 25.0319 8.95464 24.6069C8.89797 24.5786 8.89797 24.4936 8.94047 24.4511C9.09631 24.3377 9.25214 24.2102 9.40797 24.0969C9.43631 24.0686 9.47881 24.0686 9.50714 24.0827C14.3805 26.3069 19.6363 26.3069 24.453 24.0827C24.4813 24.0686 24.5238 24.0686 24.5521 24.0969C24.708 24.2244 24.8638 24.3377 25.0196 24.4652C25.0763 24.5077 25.0763 24.5927 25.0055 24.6211C24.2688 25.0602 23.4896 25.4144 22.6821 25.7261C22.6255 25.7402 22.6113 25.8111 22.6255 25.8536C23.0788 26.7177 23.5888 27.5394 24.1413 28.3186C24.1838 28.3327 24.2263 28.3469 24.2688 28.3327C26.7055 27.5819 29.1563 26.4486 31.7063 24.5786C31.7346 24.5644 31.7488 24.5361 31.7488 24.5077C32.3721 18.0902 30.7146 12.5227 27.3571 7.57858C27.343 7.56441 27.3288 7.55025 27.3005 7.55025ZM12.0713 21.1219C10.6121 21.1219 9.39381 19.7761 9.39381 18.1186C9.39381 16.4611 10.5838 15.1152 12.0713 15.1152C13.573 15.1152 14.763 16.4752 14.7488 18.1186C14.7488 19.7761 13.5588 21.1219 12.0713 21.1219ZM21.9455 21.1219C20.4863 21.1219 19.268 19.7761 19.268 18.1186C19.268 16.4611 20.458 15.1152 21.9455 15.1152C23.4471 15.1152 24.6371 16.4752 24.623 18.1186C24.623 19.7761 23.4471 21.1219 21.9455 21.1219Z" fill="#969696" />
                                </svg>
                            </a>
                            <a href="/" className="btn border-0">
                                <svg className="mg-footer-youtube-btn" width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.2541 3.83145C29.0847 3.20071 28.7527 2.62552 28.2912 2.16344C27.8297 1.70136 27.2549 1.36859 26.6244 1.19844C24.3035 0.574219 15 0.574219 15 0.574219C15 0.574219 5.69648 0.574219 3.37559 1.19512C2.74479 1.36472 2.16973 1.6973 1.70814 2.15947C1.24656 2.62164 0.914701 3.19712 0.745898 3.82812C0.125 6.15234 0.125 11 0.125 11C0.125 11 0.125 15.8477 0.745898 18.1686C1.08789 19.4502 2.09727 20.4596 3.37559 20.8016C5.69648 21.4258 15 21.4258 15 21.4258C15 21.4258 24.3035 21.4258 26.6244 20.8016C27.9061 20.4596 28.9121 19.4502 29.2541 18.1686C29.875 15.8477 29.875 11 29.875 11C29.875 11 29.875 6.15234 29.2541 3.83145ZM12.0449 15.4492V6.55078L19.748 10.9668L12.0449 15.4492Z" fill="#969696" />
                                </svg>
                            </a>
                            <a href="/" className="btn border-0">
                                <svg className="mg-footer-facebook-btn" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5 13C25.5 6.1 19.9 0.5 13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.05 4.8 24.0875 10.5 25.25V16.75H8V13H10.5V9.875C10.5 7.4625 12.4625 5.5 14.875 5.5H18V9.25H15.5C14.8125 9.25 14.25 9.8125 14.25 10.5V13H18V16.75H14.25V25.4375C20.5625 24.8125 25.5 19.4875 25.5 13Z" fill="#969696" />
                                </svg>
                            </a>
                            <a href="/" className="btn border-0">
                                <svg className="mg-footer-twitter-btn" width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.01 2.74935C27.0154 3.20143 25.9433 3.49852 24.8325 3.6406C25.9691 2.95602 26.8475 1.87102 27.2608 0.566432C26.1887 1.21227 25.0004 1.66435 23.7474 1.92268C22.727 0.811849 21.2933 0.166016 19.6658 0.166016C16.6304 0.166016 14.1504 2.64602 14.1504 5.70727C14.1504 6.14643 14.202 6.57268 14.2924 6.9731C9.69412 6.7406 5.59953 4.53185 2.87411 1.18643C2.3962 2.00018 2.12495 2.95602 2.12495 3.96352C2.12495 5.8881 3.0937 7.5931 4.59203 8.56185C3.67495 8.56185 2.82245 8.30352 2.07328 7.91602V7.95477C2.07328 10.6414 3.98495 12.8889 6.51662 13.3927C5.7038 13.6151 4.85049 13.6461 4.0237 13.4831C4.37452 14.5842 5.0616 15.5477 5.98835 16.2381C6.91509 16.9286 8.0349 17.3112 9.19037 17.3323C7.23172 18.8828 4.80386 19.721 2.30578 19.7089C1.86661 19.7089 1.42745 19.6831 0.988281 19.6314C3.44245 21.2073 6.36162 22.1243 9.48745 22.1243C19.6658 22.1243 25.2587 13.6768 25.2587 6.3531C25.2587 6.10768 25.2587 5.87518 25.2458 5.62977C26.3308 4.85477 27.2608 3.8731 28.01 2.74935Z" fill="#969696" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="privecy container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="footer__text m-0">© 2023 MEGISTA WITH BY <span className='footer__text_style'>NAIRI</span></p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="footer__text m-0">TERM & CONDITION <span className='footer__text_style'>||</span> PRIVACY POLICY</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;