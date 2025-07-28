// 搜尋功能診斷腳本
// 用於檢查和修復搜尋功能問題

console.log('=== 搜尋功能診斷開始 ===');

// 檢查全域搜尋元素
const globalSearch = document.getElementById('global-search');
if (globalSearch) {
    console.log('✅ 全域搜尋元素存在');
    console.log('搜尋元素類型:', globalSearch.type);
    console.log('搜尋元素 placeholder:', globalSearch.placeholder);
} else {
    console.error('❌ 全域搜尋元素不存在');
}

// 檢查搜尋資料
if (typeof allSearchData !== 'undefined') {
    console.log('✅ 搜尋資料存在');
    console.log('搜尋資料數量:', allSearchData.length);
    console.log('前 3 筆資料:', allSearchData.slice(0, 3));
} else {
    console.error('❌ 搜尋資料不存在');
}

// 檢查搜尋函數
if (typeof performGlobalSearch === 'function') {
    console.log('✅ 全域搜尋函數存在');
} else {
    console.error('❌ 全域搜尋函數不存在');
}

// 檢查顯示搜尋結果函數
if (typeof showSearchResults === 'function') {
    console.log('✅ 顯示搜尋結果函數存在');
} else {
    console.error('❌ 顯示搜尋結果函數不存在');
}

// 檢查隱藏搜尋結果函數
if (typeof hideSearchResults === 'function') {
    console.log('✅ 隱藏搜尋結果函數存在');
} else {
    console.error('❌ 隱藏搜尋結果函數不存在');
}

// 檢查主分頁元素
const mainTabs = {
    gemini: { btn: document.getElementById('main-btn-gemini'), content: document.getElementById('content-gemini') },
    claude: { btn: document.getElementById('main-btn-claude'), content: document.getElementById('content-claude') },
    shell: { btn: document.getElementById('main-btn-shell'), content: document.getElementById('content-shell') },
    windows: { btn: document.getElementById('main-btn-windows'), content: document.getElementById('content-windows') },
    hotkeys: { btn: document.getElementById('main-btn-hotkeys'), content: document.getElementById('content-hotkeys') },
    dev: { btn: document.getElementById('main-btn-dev'), content: document.getElementById('content-dev') }
};

console.log('主分頁元素檢查:');
Object.keys(mainTabs).forEach(key => {
    const tab = mainTabs[key];
    if (tab.btn && tab.content) {
        console.log(`✅ ${key}: 按鈕和內容都存在`);
    } else {
        console.error(`❌ ${key}: 按鈕或內容缺失`);
    }
});

// 測試搜尋功能
function testSearch() {
    console.log('=== 開始測試搜尋功能 ===');
    
    if (globalSearch && typeof performGlobalSearch === 'function') {
        // 測試空搜尋
        console.log('測試空搜尋...');
        performGlobalSearch('');
        
        // 測試短搜尋
        console.log('測試短搜尋...');
        performGlobalSearch('a');
        
        // 測試有效搜尋
        console.log('測試有效搜尋...');
        performGlobalSearch('git');
        
        // 測試模糊搜尋
        console.log('測試模糊搜尋...');
        performGlobalSearch('gitt');
        
        console.log('搜尋功能測試完成');
    } else {
        console.error('無法測試搜尋功能：缺少必要元素或函數');
    }
}

// 修復搜尋功能
function fixSearchIssues() {
    console.log('=== 開始修復搜尋功能 ===');
    
    // 確保全域搜尋元素有事件監聽器
    if (globalSearch) {
        // 移除舊的事件監聽器
        const newGlobalSearch = globalSearch.cloneNode(true);
        globalSearch.parentNode.replaceChild(newGlobalSearch, globalSearch);
        
        // 重新綁定事件監聽器
        newGlobalSearch.addEventListener('input', (e) => {
            console.log('搜尋輸入:', e.target.value);
            if (typeof performGlobalSearch === 'function') {
                performGlobalSearch(e.target.value);
            }
        });
        
        console.log('✅ 搜尋事件監聽器已重新綁定');
    }
    
    // 確保搜尋結果容器存在
    let searchResultsContainer = document.getElementById('search-results');
    if (!searchResultsContainer) {
        searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'search-results';
        searchResultsContainer.className = 'bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8';
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.insertBefore(searchResultsContainer, mainElement.firstChild);
            console.log('✅ 搜尋結果容器已創建');
        }
    }
    
    console.log('搜尋功能修復完成');
}

// 執行診斷
console.log('=== 診斷完成 ===');
console.log('輸入 testSearch() 來測試搜尋功能');
console.log('輸入 fixSearchIssues() 來修復搜尋問題');

// 自動執行修復
setTimeout(() => {
    console.log('自動執行搜尋功能修復...');
    fixSearchIssues();
    setTimeout(() => {
        console.log('自動執行搜尋功能測試...');
        testSearch();
    }, 1000);
}, 2000); 