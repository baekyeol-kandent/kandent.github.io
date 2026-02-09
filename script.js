// 현재 언어 설정 ('en'이 기본)
let currentLang = 'en';

// 사이트 전체 텍스트 번역 데이터
const siteTranslations = {
    en: {
        name: "KANDENT",
        bio: "Welcome to my portfolio!<br>I usually work with cinematic and video game music. <br>Feel free to look around and vibe to my creations! <br>If you want to contact me, please reach out through my social media links below. <br> <b>Commissions are closed for now.</b> <br> For now, links below are under construction. please contact via backiirz@gmail.com.",
        libraryTitle: "Music Library",
        warning: "⚠️ All tracks below are watermarked and for demo purposes only. Unauthorized use is strictly prohibited. ⚠️",
        searchPlaceholder: "Please input any names or genre...",
        noResult: "No results found."
    },
    ko: {
        name: "KANDENT",
        bio: "제 포트폴리오에 오신 것을 환영합니다!<br>저는 주로 영상 음악과 게임 음악을 작업합니다. <br>편하게 둘러보시고 제 음악을 즐겨주세요! <br>연락을 원하시면 상단의 소셜 미디어 링크를 통해 연락 주세요. <br> <b>현재 커미션은 닫혀 있습니다. </b> <br> SNS 링크는 작동을 하지 않으니, backiirz@gmail.com 으로 연락 주세요.",
        libraryTitle: "음악 보관소",
        warning: "⚠️ 아래의 모든 트랙은 워터마크가 포함된 데모용입니다. 무단 사용을 철저히 금합니다. ⚠️",
        searchPlaceholder: "원하는 곡의 제목이나 장르를 검색하세요...",
        noResult: "검색 결과가 없습니다."
    }
};

// 1. 내 음악 데이터 (설명을 한/영 객체로 변경)
const musicData = [
    {
        id: 1,
        title: "Journey of the Hero",
        description: {
            en: "Fitting track for a trailer of a hero.",
            ko: "영웅의 여정 예고편에 어울리는 웅장한 곡입니다."
        },
        genre: "Orchestral",
        tags: [ "Orchestral","Cinematic", "Emotional", "Heroic"],
        src: "./music/unnamed_1.mp3"
    },
    {
        id: 2,
        title: "March of Doom",
        description: {
            en: "Track that fits for a march of an army of evil.",
            ko: "악의 군대가 행진하는 장면에 적합한 곡입니다."
        },
        genre: "Orchestral",
        tags: [ "Orchestral", "Video Game", "Intense", "Epic"],
        src: "./music/unnamed_2.mp3"
    },
    {
        id: 3,
        title: "Quaint Town",
        description: {
            en: "Background music with a waltz vibe for a quaint town.",
            ko: "기묘한 마을의 왈츠풍 배경음악입니다."
        },
        genre: "Orchestral",
        tags: ["Orchestral", "Waltz", "Upbeat", "Chill", "Happy"],
        src: "./music/unnamed_3.mp3"
    },
    {
        id: 4,
        title: "Devil's Chase", 
        description: {
            en: "A fast-paced track with intense energy, as if a devil was chasing.",
            ko: "악마가 추격하는 듯한 긴장감 있는 곡입니다."
        },
        genre: "Orchestral",
        tags: ["Orchestral", "Video Game", "Dark", "Intense", "Bizzare"],
        src: "./music/unnamed_4.mp3"
    },
    {
        id: 5,
        title: "Final Hope", 
        description: {
            en: "An uplifting track that gives hope to the protagonist.",
            ko: "주인공에게 희망을 주는 긍정적인 음악입니다."
        },
        genre: "Rock",
        tags: ["Rock", "Video Game", "Heroic", "Energetic", "Emotional"],
        src: "./music/unnamed_5.mp3"
    },
    {
        id: 6,
        title: "Recall", 
        description: {
            en: "Quick paced piano track.",
            ko: "빠른 템포의 피아노 곡입니다."
        },
        genre: "Piano",
        tags: ["Piano", "Video Game", "Quick Paced", "Happy"],
        src: "./music/unnamed_6.mp3"
    },
    {
        id: 7,
        title: "Post Singularitatem", 
        description: {
            en: "Orchestral fusion track for a boss battle.",
            ko: "보스 전투를 위한 오케스트라 퓨전 곡입니다."
        },
        genre: "Orchestral",
        tags: ["Orchestral", "Dark", "Intense", "Epic", "Elegant"],
        src: "./music/post_singularitatem.mp3"
    },
    {
        id: 8,
        title: "Der Sonnenaufgang", 
        description: {
            en: "A grand track that feels like overcoming crisis and finally seeing the sunrise.",
            ko: "어려움을 헤쳐내고 마침내 해가 뜨는 것을 보는듯한 웅장한 곡입니다."
        },
        genre: "Orchestral",
        tags: ["Orchestral", "Cinematic", "Emotional", "Epic"],
        src: "./music/der_sonnenaufgang.mp3"
    },
    {
        id: 9,
        title: "Reconvenion", 
        description: {
            en: "An elegant yet elegiac track that fits for a reconvenion of old friends.",
            ko: "오래된 친구들이 다시 만나는 장면에 어울리는 우아하면서도 애수가 담긴 곡입니다."
        },
        genre: "Orchestral",
        tags: ["Orchestral", "Video Game", "Emotional", "Elegant", "Nostalgic"],
        src: "./music/reconvenion.mp3"
    },
    {
        id: 10,
        title: "Tearing", 
        description: {
            en: "A dark and dystopian cyberpunk-style synth track.",
            ko: "디스토피안 사이버펑크 분위기의 신디사이저 트랙입니다."
        },
        genre: "Electronic",
        tags: ["Electronic", "Video Game", "Emotional", "Dark", "Dystopian"],
        src: "./music/tearing.mp3"
    },
    {
        id: 11,
        title: "Fate Follows", 
        description: {
            en: "A joyful jazz-EDM fusion track that is reminiscent of freedom in fate.",
            ko: "운명 속에서 자유로움을 상기시키는 신나는 재즈-EDM 퓨전 곡입니다."
        },
        genre: "Electronic",
        tags: ["Electronic", "Video Game", "Fun", "Happy", "Energetic"],
        src: "./music/fate_follows.mp3"
    },
    {
        id: 12,
        title: "For The Loss", 
        description: {
            en: "A melancholic piano track that reflects on loss and remembrance.",
            ko: "상실과 추억을 반영하는 울적한 피아노 곡입니다."
        },
        genre: "Piano",
        tags: ["Piano", "Emotional", "Melancholic", "Nostalgic"],
        src: "./music/for_the_loss.mp3"
    },
    {
        id: 13,
        title: "Stoner", 
        description: {
            en: "A retro yet fusion-style track with a fun EDM feel.",
            ko: "재미있는 EDM 분위기를 가진 레트로 스타일 퓨전 곡입니다."
        },
        genre: "Retro",
        tags: ["Retro", "Video Game", "Fun", "Happy", "Energetic"],
        src: "./music/stoner.mp3"
    },
    {
        id: 14,
        title: "A Gentle Stroke", 
        description: {
            en: "A chill jazz track that you can listen to in a cafe.",
            ko: "카페에서 들을 수 있을만한 차분한 느낌의 재즈곡입니다."
        },
        genre: "Jazz",
        tags: ["Jazz", "Chill", "Happy", "Elegant"],
        src: "./music/a_gentle_stroke.mp3"
    }

];

// DOM 요소 가져오기
const musicGrid = document.getElementById('musicGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const langBtn = document.getElementById('langToggle');

// 2. 초기 화면 렌더링
window.addEventListener('DOMContentLoaded', () => {
    updateSiteLanguage(); // 언어 적용
    displayMusic(musicData);
});

// 3. 언어 전환 기능
langBtn.addEventListener('click', () => {
    // 언어 토글 (en <-> ko)
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    
    // 버튼 텍스트 변경
    langBtn.textContent = currentLang === 'en' ? '🇰🇷 한국어' : '🇺🇸 English';
    
    // 사이트 텍스트 및 음악 목록 업데이트
    updateSiteLanguage();
    
    // 검색 중이었다면 검색 결과도 언어에 맞춰 다시 보여주기
    searchInput.dispatchEvent(new Event('input'));
});

function updateSiteLanguage() {
    const texts = siteTranslations[currentLang];
    
    // data-lang-key가 있는 모든 요소의 텍스트 변경
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (texts[key]) {
            elem.innerHTML = texts[key];
        }
    });

    // 검색창 placeholder 변경
    searchInput.placeholder = texts.searchPlaceholder;
    
    // 음악 리스트 다시 그리기 (설명 언어 변경을 위해)
    // 현재 필터링 상태를 유지하려면 복잡해지므로 전체 목록을 다시 보여주거나,
    // 간단히 현재 화면에 있는 카드들의 텍스트만 바꿀 수도 있습니다. 
    // 여기서는 가장 확실한 방법인 '현재 검색어/필터 유지'를 위해 input 이벤트를 트리거하는 방식을 씁니다.
    // (위의 langBtn 클릭 이벤트에서 처리됨)
}

// 4. 음악 카드 생성 및 화면 표시 함수
function displayMusic(songs) {
    let displayMenu = songs.map(function(item) {
        
        // 태그 HTML 생성
        let tagsHtml = item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
        
        // ★ 현재 언어에 맞는 설명 가져오기
        let descText = item.description[currentLang] || item.description['en'];

        return `<article class="music-card">
            <div class="music-info">
                <h3 class="music-title">${item.title}</h3>
                <p class="music-desc">${descText}</p>
                <div class="tags">
                    <span class="tag" style="color: #fff; background: #555;">${item.genre}</span>
                    ${tagsHtml}
                </div>
            </div>
            <audio controls controlsList="nodownload">
                <source src="${item.src}" type="audio/mpeg">
                브라우저가 오디오 태그를 지원하지 않습니다.
            </audio>
        </article>`;
    });
    
    displayMenu = displayMenu.join("");
    
    if(songs.length === 0) {
        musicGrid.innerHTML = `<p style="text-align:center; width:100%; color:#888;">${siteTranslations[currentLang].noResult}</p>`;
    } else {
        musicGrid.innerHTML = displayMenu;
    }
}

// 5. 필터링 기능
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const category = e.currentTarget.dataset.filter;
        
        if (category === 'all') {
            displayMusic(musicData);
        } else {
            const menuCategory = musicData.filter(function(item) {
                return item.genre === category;
            });
            displayMusic(menuCategory);
        }
    });
});

// 6. 검색 기능 (언어 고려)
searchInput.addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    
    const filteredMusic = musicData.filter(item => {
        // 현재 선택된 언어의 설명에서 검색
        const currentDesc = item.description[currentLang].toLowerCase();
        
        return (
            item.title.toLowerCase().includes(searchText) || 
            item.genre.toLowerCase().includes(searchText) ||
            currentDesc.includes(searchText) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchText))
        );
    });
    
    displayMusic(filteredMusic);
});
