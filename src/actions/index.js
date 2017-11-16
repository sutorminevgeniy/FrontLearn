export const CHANGE_LANG = 'CHANGE_LANG';

export function changeLang(lang) {
    return {
        type: CHANGE_LANG,
        lang
    };
}
