const smmFilter : string[] = [
    'Смм',
    'Smm',
    'Cmm',
    'Визуал',
    'Продвижение'
]
const createSiteFilter: string[] = [
    "Сайт",
    "Веб-дизайнер",
    "Веб дизайнер",
    "веб дизайнер",
    "Сайтолог",
    "Сайты",
    "Верстка",
    "Тильда",
    "Wordpress",
    "Tilda",
    "joomla"
];
const designerFilter: string[] = [
    "Графический",
    "Графика",
    "UI",
    "UX",
    "Фигма",
    "figma",
    "Дизайн",
    "Дизайнер",
    "Обработка",
    "Визуал",
    "Фотошоп",
    "Photoshop",
    "Canva",
    "Канва"
];
const producerFilter: string[] = [
    "Продюсер",
    "Запустить",
    "Запуск",
    "Продюсирование",
    "Продюсерский",
    "Воронка",
    "Воронки"
];
const marketingFilter : string[] = [
    'Маркетолог',
    'Маркетинг',
    'Воронка',
]
const targetFilter : string[] = [
    "Реклама",
    "Рекламщик",
    "Таргетолог",
    "Контекст",
    "Контекстолог",
    "Директ",
    "Таргет",
    "Ads",
    "Авито",
    "Avito",
    "Трафик",
    "Траффик"
]
const copyriterFilter : string[] = [
    "Копирайт",
    "Копирайтер",
    "Копирайтинг",
    "Текст",
    "Текста",
    "Редактор",
    "Корректор",
    "Райтер"
]
const scenaristFilter : string[] = [
    "Сценарист",
    "Сценарии",
    "Сценаристика",
    "Контент план",
    "Прогрев"
]
const assistentFilter : string[] = [
    "Помощник",
    'Ассистент',
    "Личный помощник",
    "Бизнес-ассистент"
]
const realsVideoMakerFilter : string[] = [
    "Монтажер",
    "Монтаж",
    "Рилс",
    "Reels",
    "Reels мейкер",
    "Рилсмейкер",
    "Контентмейкер",
    "Контент-мейкер",
    "Сторисмейкер",
    "Stories мейкер",
    "Сторис-мейкер",
    "Stories-мейкер"
]
const categories = {
    smm: smmFilter,
    createSite: createSiteFilter,
    designer: designerFilter,
    producer: producerFilter,
    marketing: marketingFilter,
    target: targetFilter,
    copyriter: copyriterFilter,
    scenarist: scenaristFilter,
    assistent: assistentFilter,
    realsVideoMaker: realsVideoMakerFilter
};
interface CategoryFilter {
    [key: string]: string[];
}

interface Categories {
    smm: string[];
    createSite: string[];
    designer: string[];
    producer: string[];
    marketing: string[];
    target: string[];
    copyriter: string[];
    scenarist: string[];
    assistent: string[];
    realsVideoMaker: string[];
}

export function determineCategory(message: string): keyof Categories | "Не найдена" {
    for (const category in categories) {
        if (categories.hasOwnProperty(category)) {
            const filter = categories[category as keyof Categories];
            for (const keyword of filter) {
                if (message.toLowerCase().includes(keyword.toLowerCase())) {
                    return category as keyof Categories;
                }
            }
        }
    }
    return "Не найдена";
}


