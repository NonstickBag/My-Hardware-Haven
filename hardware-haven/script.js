(() => {
  'use strict';
  const translations = {
    skip: 'အကြောင်းအရာသို့ သွားရန်',
    navSkills: 'ကျွမ်းကျင်မှုများ', navWorkbench: 'လေ့လာနေသောအရာများ', navAbout: 'ကျွန်တော့်အကြောင်း',
    heroEyebrow: 'PC တပ်ဆင်သူ / IT နည်းပညာရှင်',
    heroOne: 'သင့်ရဲ့ PC ကို', heroTwo: 'ဂရုတစိုက် တပ်ဆင်ပေးမယ်။',
    heroBody: 'ကျွန်တော် ညီသူရိန်ထွန်း ပါ။ PC တပ်ဆင်ပေးပြီး ကွန်ပျူတာပြဿနာတွေကို ရှာဖွေဖြေရှင်းပေးပါတယ်။ နည်းပညာကို ပိုလွယ်လွယ်ကူကူ သုံးနိုင်ဖို့လည်း ကူညီပေးပါတယ်။ သင့်တော်တဲ့ အစိတ်အပိုင်းတွေ ရွေးချယ်တာကနေ တပ်ဆင်ပြီးတဲ့အထိ အဆင့်တိုင်းကို ဂရုတစိုက် လုပ်ပေးပါတယ်။',
    heroCta: 'ကျွမ်းကျင်မှုများ ကြည့်ရန်', heroSecondary: 'ကျွန်တော့်အကြောင်း',
    heroNote: 'HARDWARE ကို အာရုံစိုက်၊ အသုံးပြုသူကို ဦးစားပေး။',
    imageCaption: 'အသေးစိတ်ကို ဂရုစိုက်ခြင်းက အရေးပါပါတယ်။', imageCredit: 'နမူနာ PC ဒီဇိုင်းပုံ',
    stripOne: 'စိတ်ကြိုက် PC တပ်ဆင်ခြင်း', stripTwo: 'HARDWARE ပံ့ပိုးမှု', stripThree: 'လက်တွေ့ ပြဿနာဖြေရှင်းခြင်း',
    skillsEyebrow: '01 / ကျွန်တော် လုပ်ဆောင်နိုင်သောအရာများ',
    skillsTitle: 'သင့်တော်တဲ့ PC။\nအသုံးဝင်တဲ့ ပံ့ပိုးမှု။',
    skillsIntro: 'ကိုက်ညီတဲ့ အစိတ်အပိုင်းတွေ ရွေးချယ်ခြင်းကနေ ကွန်ပျူတာ မဖွင့်နိုင်တဲ့ အကြောင်းရင်းကို ရှာဖွေခြင်းအထိ စိတ်ချရတဲ့ PC ဖြစ်ဖို့ လက်တွေ့ လုပ်ဆောင်ရတာကို နှစ်သက်ပါတယ်။',
    serviceOne: 'စိတ်ကြိုက် PC တပ်ဆင်ခြင်း',
    serviceOneBody: 'သင့်အသုံးပြုပုံကို ထည့်သွင်းစဉ်းစားပြီး အစိတ်အပိုင်း ရွေးချယ်ခြင်း၊ တပ်ဆင်ခြင်း၊ အအေးပေးစနစ်နဲ့ ကြိုးတွေကို စနစ်တကျ စီမံခြင်း။',
    serviceTwo: 'Hardware ပြဿနာ ရှာဖွေဖြေရှင်းခြင်း',
    serviceTwoBody: 'PC နဲ့ Laptop များရဲ့ ပြဿနာကို စစ်ဆေးပြီး လက်တွေ့ ဖြေရှင်းခြင်း။ လုပ်ဆောင်ရတဲ့အကြောင်းရင်းကိုလည်း ရှင်းရှင်းလင်းလင်း ပြောပြပေးပါတယ်။',
    serviceThree: 'အဆင့်မြှင့်တင်ခြင်းနှင့် စနစ်တပ်ဆင်ခြင်း',
    serviceThreeBody: 'RAM၊ Storage အဆင့်မြှင့်တင်ခြင်း၊ Operating System တပ်ဆင်ခြင်းနဲ့ လက်ရှိကွန်ပျူတာ ပိုကောင်းစွာ အသုံးပြုနိုင်ဖို့ ပြင်ဆင်ခြင်း။',
    serviceFour: 'နေ့စဉ် IT အကူအညီ',
    serviceFourBody: 'ကွန်ပျူတာနဲ့ Software တပ်ဆင်ခြင်း၊ နေ့စဉ် နည်းပညာပြဿနာများအတွက် ကူညီပေးခြင်း။ အင်္ဂလိပ်၊ မြန်မာ နှစ်ဘာသာနဲ့ စိတ်ရှည်စွာ ရှင်းပြပေးပါတယ်။',
    tagGaming: 'ဂိမ်းကစားရန်', tagEveryday: 'နေ့စဉ်အသုံးပြုရန်', tagDiagnostics: 'စစ်ဆေးခြင်း', tagRepair: 'ပြုပြင်ခြင်း', tagSetup: 'စနစ်တပ်ဆင်ခြင်း', tagPeople: 'အသုံးပြုသူ ဦးစားပေး', tagBilingual: 'နှစ်ဘာသာ',
    workEyebrow: '02 / လက်ရှိ လေ့လာနေသော ပရောဂျက်များ',
    workTitle: 'Hardware အပြင်\nအခြားအရာတွေလည်း လေ့လာနေပါတယ်။',
    workIntro: 'Software နဲ့ Game Development ကိုလည်း စိတ်ဝင်စားပါတယ်။ ဒီပရောဂျက်တွေက လေ့ကျင့်ဖို့၊ စမ်းသပ်ဖို့နဲ့ ကျွမ်းကျင်မှု တိုးတက်ဖို့ လုပ်ဆောင်နေတဲ့ လေ့လာရေး ပရောဂျက်တွေပါ။',
    projectStatus: 'လေ့လာရေး ပရောဂျက်',
    posTitle: 'အရောင်းစနစ် (POS)',
    posBody: 'PHP နဲ့ MySQL ကို အသုံးပြုပြီး ဝန်ထမ်း၊ ကုန်ပစ္စည်း၊ ဝယ်သူနဲ့ Invoice အချက်အလက်တွေ ချိတ်ဆက်ပုံကို လေ့လာနေပါတယ်။',
    unityTitle: 'Unity ဂိမ်း စမ်းသပ်မှုများ',
    unityBody: 'Unity နဲ့ C# ကို အသုံးပြုပြီး တင့်ကား ရွေ့လျားမှု၊ Camera ထိန်းချုပ်မှုနဲ့ ဂိမ်းလုပ်ဆောင်ချက်ငယ်တွေကို စမ်းသပ်လေ့လာနေပါတယ်။',
    clinicTitle: 'ဆေးခန်း စီမံခန့်ခွဲရေး App',
    clinicBody: 'Web-based ဆေးခန်းစနစ်တစ်ခုမှာ Sign-in၊ Database အသုံးပြုခွင့်နဲ့ Frontend၊ Backend ချိတ်ဆက်ပုံကို လေ့လာနေပါတယ်။',
    approachEyebrow: 'ကျွန်တော့် လုပ်ဆောင်ပုံ',
    approachTitle: 'နားလည်အောင်မေး။\nတပ်ဆင်။ စစ်ဆေး။',
    stepOne: 'အသုံးပြုသူကို အရင် နားလည်ပါ',
    stepOneBody: 'ကွန်ပျူတာကို ဘာအတွက် အသုံးပြုပါသလဲ။ ဘယ်လို အခက်အခဲ ရှိပါသလဲ။ အသုံးဝင်တဲ့ ဖြေရှင်းချက်က အဲဒီက စပါတယ်။',
    stepTwo: 'အသေးစိတ်ကို ဂရုစိုက်ပါ',
    stepTwoBody: 'အစိတ်အပိုင်း ကိုက်ညီမှု၊ တပ်ဆင်မှုနဲ့ စနစ်ပြင်ဆင်မှုကို သေချာစဉ်းစားပါ။ အသေးစား ဆုံးဖြတ်ချက်တွေကလည်း အရေးပါပါတယ်။',
    stepThree: 'ရှင်းရှင်းလင်းလင်း ပြောပြပါ',
    stepThreeBody: 'အသုံးပြုသူက မိမိကွန်ပျူတာအကြောင်း နားလည်ပြီး ယုံကြည်စိတ်ချစွာ အသုံးပြုနိုင်ဖို့ ရိုးရိုးရှင်းရှင်း ရှင်းပြပါ။',
    aboutEyebrow: '03 / PC နောက်ကွယ်က လူတစ်ယောက်',
    aboutTitle: 'မင်္ဂလာပါ။\nကျွန်တော် ညီသူရိန်ထွန်း ပါ။',
    aboutRole: 'PC တပ်ဆင်သူ။ IT နည်းပညာရှင်။ အမြဲ လေ့လာနေသူ။',
    aboutLead: 'PC တပ်ဆင်ခြင်းမှာ ပိုကျွမ်းကျင်လာဖို့ အမြဲ ကြိုးစားချင်ပါတယ်။',
    aboutBody: 'Computer Science နောက်ခံနဲ့ Hardware ကို လက်တွေ့ လုပ်ဆောင်ရတာ စိတ်ဝင်စားသူအနေနဲ့ အစိတ်အပိုင်းတွေကို အသုံးဝင်တဲ့ PC တစ်လုံးအဖြစ် တပ်ဆင်ရတာ နှစ်သက်ပါတယ်။ Customer Support အတွေ့အကြုံနဲ့ စိတ်ရှည်တဲ့ ချဉ်းကပ်ပုံကိုလည်း နည်းပညာအကူအညီပေးရာမှာ အသုံးချပါတယ်။',
    aboutBackground: 'ကွန်ပျူတာသင်တန်းများကို စီမံရာမှာ ကူညီခဲ့ပြီး ကျောင်းသားများအတွက် Laptop များကို ပြင်ဆင်ပေးခဲ့ပါတယ်။ ကွန်ပျူတာ အလုပ်လုပ်ဖို့သာမက လွယ်ကူစွာ အသုံးပြုနိုင်ဖို့လည်း အရေးကြီးပါတယ်။',
    factFocus: 'အဓိကအာရုံစိုက်မှု', factFocusValue: 'PC တပ်ဆင်ခြင်းနှင့် IT ပံ့ပိုးမှု',
    factLanguages: 'ဘာသာစကား', factLanguagesValue: 'အင်္ဂလိပ်နှင့် မြန်မာ',
    factLearning: 'လေ့လာနေသောအရာ', factLearningValue: 'Web Development နှင့် Unity',
    download: 'ကျွန်တော့် Profile ကို ဒေါင်းလုဒ်လုပ်ရန်',
    downloadNote: 'ကျွမ်းကျင်မှုနှင့် အတွေ့အကြုံများ အကျဉ်းချုပ် (PDF)။',
    closingOne: 'ဂရုတစိုက် တပ်ဆင်မှု။', closingTwo: 'လက်တွေ့ကျတဲ့ ဖြေရှင်းမှု။',
    closingLabel: 'ဒါက HARDWARE HAVEN ပါ။', backTop: 'အပေါ်သို့ ပြန်သွားရန်',
    themeLight: 'အလင်းပုံစံသို့ ပြောင်းရန်', themeDark: 'အမှောင်ပုံစံသို့ ပြောင်းရန်'
  };

  const nodes = Array.from(document.querySelectorAll('[data-i18n]'));
  const originals = new Map(nodes.map(node => [node, Array.from(node.childNodes, child => child.cloneNode(true))]));
  
  const themeBtn = document.querySelector('.theme-toggle');
  const metaThemeColor = document.getElementById('meta-theme-color');
  const metaColorScheme = document.getElementById('meta-color-scheme');

  function updateAriaLabels(lang, isLight) {
    if (themeBtn) {
      const textMy = isLight ? translations.themeDark : translations.themeLight;
      const textEn = isLight ? 'Switch to dark mode' : 'Switch to light mode';
      themeBtn.setAttribute('aria-label', lang === 'my' ? textMy : textEn);
    }
    document.querySelector('.header-controls').setAttribute('aria-label', lang === 'my' ? 'ဘာသာစကားနှင့် ပုံစံ' : 'Language and theme');
  }

  function applyLanguage(lang) {
    if (lang !== 'my') lang = 'en';
    document.documentElement.lang = lang;
    for (const node of nodes) {
      if (lang === 'en') {
        node.replaceChildren(...originals.get(node).map(child => child.cloneNode(true)));
      } else if (translations[node.dataset.i18n]) {
        const parts = translations[node.dataset.i18n].split('\n');
        const children = [];
        parts.forEach((part, index) => {
          if (index) children.push(document.createElement('br'));
          children.push(document.createTextNode(part));
        });
        node.replaceChildren(...children);
      }
    }
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.querySelector('.hero-visual img').alt = lang === 'my' ? 'မီးစိမ်းနုပါဝင်သော အနက်ရောင် နမူနာ PC ဒီဇိုင်းပုံ' : 'Illustrative custom PC with a dark case and soft lime lighting';
    document.querySelector('.main-nav').setAttribute('aria-label', lang === 'my' ? 'အဓိက လမ်းညွှန်' : 'Main navigation');
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    updateAriaLabels(lang, isLight);

    try { localStorage.setItem('hh-language', lang); } catch {}
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
      if (metaThemeColor) metaThemeColor.content = '#f4f6f0';
      if (metaColorScheme) metaColorScheme.content = 'light';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (metaThemeColor) metaThemeColor.content = '#111310';
      if (metaColorScheme) metaColorScheme.content = 'dark';
    }
    updateAriaLabels(document.documentElement.lang, isLight);
    try { localStorage.setItem('hh-theme', theme); } catch {}
  }

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(current);
    });
  }

  try { if (localStorage.getItem('hh-language') === 'my') applyLanguage('my'); } catch {}
  
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  updateAriaLabels(document.documentElement.lang, currentTheme === 'light');
})();