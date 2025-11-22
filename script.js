document.addEventListener('DOMContentLoaded', () => {
  if(!document.documentElement.getAttribute('data-lang')) {
    document.documentElement.setAttribute('data-lang','en');
  }
  updateTexts();
});

function toggleLanguage(){
  const cur = document.documentElement.getAttribute('data-lang');
  const next = (cur === 'en') ? 'as' : 'en';
  document.documentElement.setAttribute('data-lang', next);
  updateTexts();
}

function updateTexts(){
  const lang = document.documentElement.getAttribute('data-lang');
  const btn = document.getElementById('lang-toggle');

  if(lang === 'as'){
    btn.textContent = 'Switch to English';
    document.getElementById('site-title').textContent = 'লুনিচ’লাৰ মেনছন';
    document.getElementById('slogan').textContent = 'সপোনৰ ৰূপায়ণ, জীৱনৰ পথপ্ৰদৰ্শন | ৰূপাঙ্কণ আৰু নিয়তিৰ সেতু';
    document.getElementById('design-heading').textContent = 'ঘৰ আৰু প্ৰকল্প ৰূপাঙ্কণ';
    document.getElementById('design-text').textContent = 'আমি ঘৰৰ নক্সা, স্থাপত্যিক অঙ্কনসমূহ, তিনি-মাত্ৰিক দৃশ্যায়ন, ব্যয় অনুমান, আৰু বিশদ প্ৰকল্প প্ৰতিবেদনৰ জৰিয়তে আপোনাৰ সপোনবোৰক বাস্তৱ কৰিবলৈ সহায় কৰোঁ। আমি সাজি তোলা প্ৰতিটো স্থানক কাৰ্য্যক্ষমতা, নান্দনিকতা, আৰু ধনাত্মক শক্তিৰ বাবে সুসমন্বিত কৰা হয়, যিয়ে জীৱনৰ পোষণ, বিকাশ, আৰু আশা-আকাংক্ষা প্ৰতিফলিত কৰে। আপোনাৰ সপোনৰ ঘৰৰ কল্পনা কৰাৰ পৰা আৰম্ভ কৰি নিখুঁতভাৱে পৰিকল্পনা আৰু কাৰ্য্যকৰী কৰালৈকে, আমি কল্পনাক বাস্তৱৰ সৈতে সংযোগ কৰোঁ।';
    document.getElementById('astrology-heading').textContent = 'জ্যোতিষ আৰু জীৱনৰ দিহা-পৰামৰ্শ';
    document.getElementById('astrology-text').textContent = 'একে সময়তে, ব্যক্তিগত জন্ম-পত্ৰিকা নিৰ্মাণ আৰু জ্যোতিষীয় পৰামৰ্শৰ জৰিয়তে, আমি আপোনাৰ জীৱনৰ সম্ভাৱনা, সামৰ্থ আৰু সীমাবদ্ধতাসমূহ প্ৰকাশ কৰোঁ। জ্যোতিষে আপোনাৰ লক্ষ্যত উপনীত হোৱাৰ আটাইতকৈ চমু আৰু নিৰাপদ পথ দেখুৱায়, যাৰ ফলে আপুনি সঠিক সিদ্ধান্ত ল’ব পাৰে, সুযোগসমূহক কামত লগাব পাৰে, আৰু আত্মবিশ্বাসেৰে প্ৰত্যাহ্বানসমূহ মোকাবিলা কৰিব পাৰে। সেয়া বিবাহ, সন্তান, শিক্ষা, কৰ্মজীৱন বা ব্যক্তিগত উন্নতিৰ বিষয়েই নহওক কিয়, আমি আপোনাৰ বাছনিসমূহক আপোনাৰ দৈৱিক পৰিকল্পনাৰ সৈতে মিলাবলৈ পথ দেখুৱাওঁ, নিয়তিক স্পষ্টতা আৰু সবলীকৰণৰ পথলৈ পৰিৱৰ্তন কৰোঁ।';
    document.getElementById('enclosure-heading').textContent = 'পঞ্জীয়ন আৰু সময় বুকিং';
    document.getElementById('registration-title').textContent = 'প্ৰথমে, পঞ্জীয়ন সম্পূৰ্ণ কৰক';
    document.getElementById('registration-desc').textContent = 'ব্যক্তিগত সেৱাসমূহ লাভ কৰিবলৈ প্ৰথমে পঞ্জীয়ন সম্পূৰ্ণ কৰক।';
    document.getElementById('btn-register').textContent = 'পঞ্জীয়ন সম্পূৰ্ণ কৰক';
    document.getElementById('booking-title').textContent = 'তাৰ পাছত, আপোনাৰ ভ্ৰমণৰ সময় সংৰক্ষণ কৰক।';
    document.getElementById('booking-desc').textContent = 'আপোনাৰ পঞ্জীয়ন নম্বৰ ব্যৱহাৰ কৰি ভ্ৰমণৰ বাবে এটা সুবিধাজনক সময় সংৰক্ষণ কৰক।';
    document.getElementById('btn-slot').textContent = 'ভ্ৰমণৰ সময় সংৰক্ষণ কৰক';
    document.getElementById('registration-note').textContent = "আপোনাৰ পঞ্জীয়ন নম্বৰটো আপোনাৰ ই-মেইললৈও পঠিয়োৱা হ'ব।";
    document.getElementById('booking-note').textContent = "আপোনাৰ ভ্ৰমণ সময়ৰ সংৰক্ষণ নিশ্চিতকৰণটো আপোনাৰ ই-মেইললৈও পঠিয়োৱা হ'ব।";
    document.getElementById('location-heading').textContent = 'ভৌগোলিক অৱস্থিতি';
    document.getElementById('location-text').textContent = 'লুনিচ’লাৰ মেনছন';
    document.getElementById('destiny-text').textContent = '"জীৱনৰ উদ্দেশ্য হৈছে জীয়াই থকাৰ উদ্দেশ্য আৱিষ্কাৰ কৰা। নিয়তিয়েই সকলোৰে অধিপতি। কোনেও ভাগ্যক এৰাই চলিব নোৱাৰে! কোনেও নিয়তিক ফাকি দিব নোৱাৰে। কোনেও ঈশ্বৰ, দেৱী বা গ্ৰহসমূহক ভেঁটি দিব নোৱাৰে। ব্যক্তিৰ দৈৱিক পৰিকল্পনা অপৰিৱৰ্তিতভাৱে চলি থাকিব। আমি ৰত্ন ধাৰাণ কৰোঁ, ঈশ্বৰক প্ৰাৰ্থনা কৰোঁ, আশীৰ্বাদ লাভ কৰোঁ— এই সকলোবোৰ কেৱল সময় উপযুক্ত হ’লেহে।"';
  } else {
    btn.textContent = 'Switch to Assamese';
    document.getElementById('site-title').textContent = 'LUNISOLAR MANSION';
    document.getElementById('slogan').textContent = 'Designing Dreams, Guiding Lives | Bridging Design and Destiny';
    document.getElementById('design-heading').textContent = 'Home & Project Design';
    document.getElementById('design-text').textContent = 'We help bring your dreams into the physical world with home design, architectural drawings, Vaastu layouts, 3D visualizations, cost estimates, and detailed project reports (DPRs). Every space we design is harmonized for functionality, aesthetics, and positive energy, ensuring it nurtures life, supports growth, and reflects your aspirations. From envisioning your dream home to planning and executing projects with precision, we bridge imagination with reality.';
    document.getElementById('astrology-heading').textContent = 'Astrology & Life Guidance';
    document.getElementById('astrology-text').textContent = 'At the same time, through personalized horoscope casting and astrological counselling, we reveal your life’s potential, capabilities, and limitations. Astrology points the shortest and safest route to your goals, enabling you to make informed decisions, harness opportunities, and navigate challenges with confidence. Whether it’s marriage, children, education, career, or personal growth, we guide you to align your choices with your divine plan, turning destiny into a path of clarity and empowerment.';
    document.getElementById('enclosure-heading').textContent = 'Registration & Slot Booking';
    document.getElementById('registration-title').textContent = 'First, complete the registration.';
    document.getElementById('registration-desc').textContent = 'Complete the registration first to access the personalised services.';
    document.getElementById('btn-register').textContent = 'Complete Registration';
    document.getElementById('booking-title').textContent = 'Then, book a visit';
    document.getElementById('booking-desc').textContent = 'Use your registration number to reserve a convenient time for the visit.';
    document.getElementById('btn-slot').textContent = 'Book Your Visit';
    document.getElementById('registration-note').textContent = 'Your registration number will also be sent to your email.';
    document.getElementById('booking-note').textContent = 'A confirmation of your visit time will also be sent to your email.';
    document.getElementById('location-heading').textContent = 'Geographical Location';
    document.getElementById('location-text').textContent = 'Lunisolar Mansion';
    document.getElementById('destiny-text').textContent = '"The purpose of living is to discover the purpose of living. It is destiny which is the master of everything. None can dodge fate! None can hoodwink destiny. None can bribe the God, Goddess, or planets. The native\'s divine plan will go on unchanged. We put on Gem, we pray to God, we receive blessings—all only when the time is ripe."';
  }
}
