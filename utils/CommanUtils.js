const { default: ConfigurartionConstants } = require("./ConfigurationConstants");

export function debounce(func, timeout = ConfigurartionConstants.debounceTime) {
    let timer;
    return (...args) => {
        if (!timer) {
            func.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = undefined;
        }, timeout);
    };
}



export const validateMobileNumber = (value) => {

    let regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return value && regex.test(value)

}

export const validateOtp = (value) => {
    let regex = /^(\+\d{1,3}[- ]?)?\d{4}$/
    return value && regex.test(value)
}

export const validateSixdigitOtp = (value) => {
    let regex = /^(\+\d{1,3}[- ]?)?\d{6}$/
    return value && regex.test(value)
}

export const callOnBackFunction = (props) => {
    const navigation = props?.navigation

    if (navigation?.canGoBack()) {
        navigation?.goBack();
    }
}

export const formatMobileNumber = (number) => {
    try {
        if (number) {
            const firstThreeDigits = number?.slice(0, 3)
            const lastTwoDigits = number?.slice(-2);
            const formattedNumber = firstThreeDigits + "*****" + lastTwoDigits
            return formattedNumber
        }

    } catch (error) {
        return ""
    }

}
