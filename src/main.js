const clickSound = new Audio('./assets/waves.mp3');

// 2. HTML 버튼의 onclick="playSound()"에 의해 호출될 함수를 정의합니다.
window.playSound = function() {
    
    // 3. 연속 클릭 시 소리가 겹치지 않고 처음부터 다시 나도록 재생 위치를 0초로 리셋합니다.
    clickSound.currentTime = 0; 
    
    // 4. 오디오 재생을 시도합니다.
    clickSound.play()
        .then(() => {
            console.log("클릭 사운드 재생 성공!");
        })
        .catch(error => {
            // 브라우저 정책 등으로 재생이 실패할 경우 (거의 발생하지 않음)
            console.error("오디오 재생 실패:", error);
        });
};
