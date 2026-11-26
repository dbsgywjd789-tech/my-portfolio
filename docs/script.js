// 데모용 비밀번호입니다. 실제 공개 사이트에서는 서버 인증을 사용해야 합니다.
const DEMO_PASSWORD = "0831";

const lockScreen = document.querySelector("#lockScreen");
const invitation = document.querySelector("#invitation");
const passwordInput = document.querySelector("#passwordInput");
const passwordError = document.querySelector("#passwordError");

function openInvitation() {
  if (passwordInput.value === DEMO_PASSWORD) {
    lockScreen.hidden = true;
    invitation.hidden = false;
    passwordError.textContent = "";
  } else {
    passwordError.textContent = "비밀번호를 다시 확인해 주세요 💗";
  }
}

document.querySelector("#enterButton").addEventListener("click", openInvitation);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") openInvitation();
});

// 탭 메뉴 전환
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.page}`).classList.add("active");
  });
});

// 준비물 체크 진행률
const checkboxes = document.querySelectorAll("#checkItems input[type='checkbox']");
const progress = document.querySelector("#checkProgress");

function updateProgress() {
  const completed = [...checkboxes].filter((checkbox) => checkbox.checked).length;
  progress.textContent = `${completed} / ${checkboxes.length} DONE ♡`;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateProgress));
