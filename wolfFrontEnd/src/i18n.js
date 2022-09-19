import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { register } from 'timeago.js';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Login': 'Login',
                'Logout': 'Logout',
                'Username': 'Username',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Confirm Password': 'Confirm Password',
                'Password mismatch!': 'Password mismatch!',
                ' Unauthorized access!': ' Unauthorized access!',
                'Users': 'Users',
                'Search': 'Search',
                'search by username': 'search by username',
                ' Page failed to load!': ' Page failed to load!',
                'User not found!': 'User not found!',
                'Change Display Name': 'Change Display Name',
                'Edit': 'Edit',
                'Delete': 'Delete',
                'Save': 'Save',
                'Cancel': 'Cancel',
                'My Profile': 'My Profile',
                'Settings': 'Settings',
                'Join us!': 'Join us!',
                'Name :': 'Name :',
                'Followers': 'Followers',
                'Following': 'Following',
                'Notifications': 'Notifications',
                'Make a publication': 'Make a publication',
                'What are you thinking?': 'What are you thinking?',
                'Share': 'Share',
                'There are no posts here!': 'There are no posts here!',
                'Show more posts!': 'Show more posts!',
                'Like': 'Like',
                'Comment': 'Comment',
                'There are new posts!': 'There are new posts!',
                'Delete post': 'Delete post',
                'This post will be permanently deleted.': 'This post will be permanently deleted.',
                'Are you sure?': 'Are you sure?',
                'Warning!': 'Warning!',
                'Your account will be permanently deleted.': 'Your account will be permanently deleted.',
                'Delete My Account': 'Delete My Account',
                'About Us': 'About Us',
                'Topics': 'Topics',
                'DONATE': 'DONATE',
                'Popular post': 'Popular post', 'Tesla and SpaceX CEO Elon Musk shared an animation simulating a manned mission to the planet Mars, which is expected to launch in 2030.': 'Tesla and SpaceX CEO Elon Musk shared an animation simulating a manned mission to the planet Mars, which is expected to launch in 2030.',
                'Dumbo is developed with the contributions of the participants. Do you want to support the dumbo?': 'Dumbo is developed with the contributions of the participants. Do you want to support the dumbo?'
            }
        },
        ab: {
            translations: {
                'Sign Up': 'تسجيل',
                'Login': 'تسجيل الدخول',
                'Logout': 'تسجيل الخروج',
                'Username': 'اسم المستخدم',
                'Display Name': 'رمز المستخدم',
                'Password': 'كلمة السر',
                'Confirm Password': 'تأكيد كلمة السر',
                'Password mismatch!': 'كلمة السر غير متوافقة',
                ' Unauthorized access!': ' دخول غير مرخص',
                'Users': 'المستخدمن',
                'Search': 'البحث',
                'search by username': 'ابحث عن اسم المستخدم',
                ' Page failed to load!': ' الصفحة فشلت في التحميل',
                'User not found!': 'المستخدم غير معرف',
                'Change Display Name': 'غير اسم الرمز',
                'Edit': 'تعديل',
                'Delete': 'مسح',
                'Save': 'حفظ',
                'Cancel': 'الغاء',
                'My Profile': 'صفحتي',
                'Settings': 'الاعدادات',
                'Join us!': 'انضم الينا !',
                'Name :': 'أسم:',
                'Followers': 'المتابعين',
                'Following': 'متابع',
                'Notifications': 'التنبيهات',
                'Make a publication': 'اجعلها عامة',
                'What are you thinking?': 'بماذا تفكر؟',
                'Share': 'انشر',
                'There are no posts here!': 'لا يوجد منشورات',
                'Show more posts!': 'أظهر المنشورات',
                'Like': 'أعجاب ',
                'Comment': 'نعليق',
                'There are new posts!': 'هنالك منشور جديد',
                'Delete post': 'احذف المنشور',
                'This post will be permanently deleted.': 'سيتم حذف هذه المنشور بشكل دائم',
                'Are you sure?': 'هل انت متأكد؟',
                'Warning!': 'تحذير!',
                'Your account will be permanently deleted.': 'سيتم حذف حسابك بشكل دائم.',
                'Delete My Account': 'احذف حسابي',
                'About Us': 'معلومات عنا',
                'Trending': 'الشائع',
                'DONATE': 'تبرع',
                'Popular post': 'منشور مشهور',
                'Tesla and SpaceX CEO Elon Musk shared an animation simulating a manned mission to the planet Mars, which is expected to launch in 2030.': 'شارك الرئيس التنفيذي لشركة Tesla و SpaceX Elon Musk رسمًا متحركًا يحاكي مهمة مأهولة إلى كوكب المريخ ، والتي من المتوقع إطلاقها في عام 2030.',
                'Wolf is developed with the contributions of the participants. Do you want to support the wolf?': 'تم تطوير Wolf مع مساهمات المشاركين. هل تريد دعم الذئب؟'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

const timeageAB = (number, index) => {
    return [
        ['منذ قليل', 'حاليا'],
        ['%s منذ ثوانى', '%sفي ثوان'],
        ['1 منذ دقيقة ', '1 في دقائق'],
        ['%s منذ دقيقة', '%s في دقائق'],
        ['1 في دقائق', '1 في خلال الساعة'],
        ['%s منذ ساعات', '%s في خلال الساعة'],
        ['1 أيام مضت', '1 خلال اليوم'],
        ['%s أيام مضت', '%s خلال اليوم'],
        ['1 منذ أسابيع', '1 في أيام الأسبوع'],
        ['%s منذ أسبوع', '%s في أيام الأسبوع'],
        ['1 منذ شهر', '1 خلال الشهر'],
        ['%s منذ شهر', '%s خلال الشهر'],
        ['1 منذ عام', '1 منذ عام'],
        ['%s منذ عام', '%s في السنة']
    ][index];
};
register('tr', timeageAB);

export default i18n;