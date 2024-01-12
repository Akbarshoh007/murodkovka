/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

 var demoJson = {
 	"hero": {
  
  "h1": {
    "ru": "Добро пожаловать на сайт Мурада Ковки",
    "en": "Welcome to Murad Kovka Site",
    "uz": "Murod Kovka Sayitiga xush kelibsiz",
  },
  "h2": {
    "ru": 'Делаем<span class="typed" data-typed-items="Красивые ворота, заборы, зонтики"></span>',
    "en": 'We make<span class="typed" data-typed-items="Beautiful Gates, Fences, Umbrellas"></span>',
    "uz": 'Biz yasaymiz<span class="typed" data-typed-items="Chiroyli Darvozalar,Panjaralar,Soyabonlar"></span>',
  },
  "span": {
    "ru": "Красивые ворота, заборы, навесы",
    "en": "Beautiful Gates, Fences, Canopies",
    "uz": "Chiroyli Darvozalar,Panjaralar,Soyabonlar",
  },
  "start": {
    "ru": "Начинать",
    "en": "Start",
    "uz": "Boshlash",
  },
  "our": {
    "ru": "Наш сервис",
    "en": "Our service",
    "uz": "Bizning xizmatimiz",
  },
},

// hero the end



// header go

"header": {
  
  "home1": {
    "ru": "Дом",
    "en": "Home",
    "uz": "Uy",
  },
  "about1": {
    "ru": "О нас",
    "en": "About",
    "uz": "Haqida",
  },
  "services1": {
    "ru": "Услуги",
    "en": "Services",
    "uz": "Xizmatlar",
  },
  "ourwork1": {
    "ru": "Наша работа",
    "en": "Our work",
    "uz": "Bizning ishlar",
  },
  "contactus1": {
    "ru": "Связаться с нами",
    "en": "Contact us",
    "uz": "Biz bilan aloqa",
  },
},  


// header the end



  // about go


"about": {
  "us2": {
    "ru": "O нас",
    "en": "About Us",
    "uz": "Biz haqimizda",
  },
  "ourmotto": {
    "ru": "Наш девиз – высочайшее качество и эффективность работы.",
    "en": "Our motto is the highest quality and work efficiency",
    "uz": "Bizning shior eng yuqori sifat va ish samaradorligi",
  },
  "weprovide": {
    "ru": "Мы предоставляем отличные услуги и идеи",
    "en": "We provide great services and ideas",
    "uz": "Biz ajoyib xizmatlar va g`oyalarni taqdim etamiz",
  },
  "ourfactory": {
    "ru": "Наша фабрика была основана в 2010 году. Поначалу были свои трудности. В дальнейшем проделанная нами работа дала результаты, и наша работа понравилась клиентам, нас стали узнавать многие, а количество заказов увеличивалось в соответствии с качеством.",
    "en": "Our factory was founded in 2010. At the beginning, there were difficulties of its own. Later, the work we did gave results and the work we did was liked by customers, many people started to recognize us, and our orders increased according to the quality.",
    "uz": "Bizning zavodimiz 2010-yilda tashkil topgan. Boshida o`ziga yarasha qiyinchiliklar bo`lgan. Keyinchalik qilingan ishlarimiz natija bergan va qilgan ishlarimiz mijozlarga ma`qul kelgan, ko`pchilik bizni taniy boshlagan, buyurtmalarimiz ham sifatiga yarasha ko`paygan",
  },
  "currently": {
    "ru": "В настоящее время наша работа находится на уровне спроса, и мы готовим, доставляем и устанавливаем качественные заказы для каждого клиента, который он хочет и любит.",
    "en": "Currently, our work is at the level of demand, and we prepare, deliver and install high-quality orders for each client that he wants and likes.",
    "uz": "Hozirda ishlarimiz talab darajasida va har bir mijozga o`zi hoxlagan, o`ziga yoqadigan, sifatli buyurtmalarni tayyorlab, yetkazib, o`rnatib beramiz.",
  },
  "inthefuture": {
    "ru": "В дальнейшем мы будем совершенствовать нашу работу, расширять количество рабочих мест и обеспечивать вас качественной продукцией.",
    "en": "In the future, we will improve our work, expand the number of jobs, and provide you with quality products",
    "uz": "Kelajakda biz olib borilayotgan ishlarimizni rivjlantirib, ish o`rinlarini kengaytirib, sifatli mahsulotlarni sizlarga taqdim qilish",
  },


},


// about the end




// services go

"services": {
  "ourservices2": {
    "ru": "Наши сервисы",
    "en": "Our services",
    "uz": "Bizning xizmatlar",
  },
  "theorder": {
    "ru": "Заказ нам отдали вовремя, качественный и красивый доставка и установка",
    "en": "The order given to us on time, high quality and beautiful delivery and installation",
    "uz": "Bizga berilgan buyurtmani o`z vaqtida,sifatli va chiroyli qilib yetkazib o`rnatib berish",
  },


},

// the end services



// subscribe go

"subscrbe": {
  "subscrbe3": {
    "ru": "Подписаться на обновления",
    "en": "Subscribe for updates",
    "uz": "Yangilanishlarga obuna bo'ling",
  },
  "join1": {
    "ru": "Присоединяйтесь к нашим более чем 1000 подписчикам и следите за нами в социальных сетях.",
    "en": "Join our 1000+ subscribers and follow us on social media",
    "uz": "1000 dan ortiq obunachilarimizga qo'shiling va bizni ijtimoiy tarmoqlarda kuzatib boring",
  },
  "now1": {
    "ru": "Подпишись сейчас",
    "en": "Subscribe now",
    "uz": "Hoziroq obuna bo'ling",
  },


},

// subscribe the end





// portfolio go


"portfolio": {
  "forupdates": {
    "ru": "Подписаться на обновления",
    "en": "Subscribe for updates",
    "uz": "Bizning ishlar",
  },
  "avery": {
    "ru": "Очень высокий уровень точности и качества.",
    "en": "A very high level of precision and quality",
    "uz": "O`ta yuqori darajadagi aniqlik va sifat uyg`unligi",
  },
  "Everything1": {
    "ru": "Все",
    "en": "Everything",
    "uz": "Hammasi",
  },
  "gates1": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "umbrellas1": {
    "ru": "Зонты",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "bars1": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars2": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars3": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars4": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars5": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars6": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "Bars7": {
    "ru": "Бары",
    "en": "Bars",
    "uz": "Panjaralar",
  },
  "gates2": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "gates3": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "gates4": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "gates5": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "gates6": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "gates7": {
    "ru": "Ворота",
    "en": "Gates",
    "uz": "Darvozalar",
  },
  "umbrellas1": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "umbrellas2": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "umbrellas3": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "umbrellas4": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "umbrellas5": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
  "umbrellas6": {
    "ru": "Зонтики",
    "en": "Umbrellas",
    "uz": "Soyabonlar",
  },
},
  // the end Portfolio


  // Contact go

"contact": {
  "ourcall": {
    "ru": "СВЯЗАТЬСЯ С НАМИ",
    "en": "CONTACT US",
    "uz": "BIZ BILAN BOG'LANISH",
  },
  "shor": {
    "ru": "Наш девиз – высочайшее качество и эффективность работы.",
    "en": "Our motto is the highest quality and work efficiency",
    "uz": "Bizning shior eng yuqori sifat va ish samaradorligi",
  },
  "sti": {
    "ru": "г.Ташкент<br>Сергелийский район,ул.Золотая долина",
    "en": "Tashkent city<br> Sergeli district, Golden valley street",
    "uz": "Toshkent shahar<br>Sergeli tumani, oltin vodiy ko`chasi",
  },
  "dowi": {
    "ru": "СВЯЗАТЬСЯ С НАМИ",
    "en": "Loading",
    "uz": "Yuklanmoqda",
  },
  "massagee": {
    "ru": "Ваше сообщение было отправлено. Спасибо!",
    "en": "Your message has been sent. Thank you!",
    "uz": "Sizning xabaringiz yuborildi. Rahmat!",
  },
  "mas": {
    "ru": "Отправить сообщение",
    "en": "Send a message",
    "uz": "Xabar yuborish",
  },
  "name": {
    "ru": "Ваше имя",
    "en": "Your name",
    "uz": "Ismingiz",
  },
   "tema": {
    "ru": "Предмет",
    "en": "Subject",
    "uz": "Mavzu",
  },
   "ax24": {
    "ru": "Сообщение",
    "en": "Message",
    "uz": "Xabar",
  },
  
  


},



// contact the end




// footer go


"footer": {
  "im": {
    "ru": "Авторские права",
    "en": "Copyright",
    "uz": "Mualliflik huquqi",
  },
  "after": {
    "ru": "Мурад Ковка",
    "en": "Murad Kovka",
    "uz": "Murod Kovka",
  },
  "ali": {
    "ru": "Все права защищены",
    "en": "All rights reserved",
    "uz": "Barcha huquqlar himoyalangan",
  },
  "solu": {
    "ru": "Следуйте за нами в социальных сетях",
    "en": "Follow us on social media",
    "uz": "Barcha huquqlar himoyalangan",
  },

},


  



 };

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'ru';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');
	
	$('.lang-picker #russian').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #uzbek').on('click', function () {
		i18n.lang('uz');
		selectLang($(this));
	})
	$('.lang-picker #iranian').on('click', function () {
		i18n.lang('ir');
		selectLang($(this));
	})
	$('.lang-picker #chinese').on('click', function () {
		i18n.lang('ch');
		selectLang($(this));
	})
	$('.lang-picker #arab').on('click', function () {
		i18n.lang('ar');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker a').removeClass('selected');
		picker.addClass('selected');
	}
});