import BasePage from './basePage'

const basePage = new BasePage()

const navigateDesktop = {
    navigate: basePage.navigateDesktop,
    forMobile: false,
}

const navigateMobile = {
    navigate: basePage.navigateMobile,
    forMobile: true,
}


export const navigate = [navigateDesktop, navigateMobile]
