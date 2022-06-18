/* 작전 지역 출력 */

const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src=`../img/${chosenImage}`;

const bg = document.querySelector("#random-bg");

bg.appendChild(bgImage);

/* 타겟 사진 출력 */

const targetsss = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png", "6.png"
]

const chosenTarget = targetsss[Math.floor(Math.random() * targetsss.length)];
console.log(chosenTarget);

const targetImage = document.createElement("img");

targetImage.src=`../img_targets/${chosenTarget}`;

const tgImage = document.querySelector("#target-img");

tgImage.appendChild(targetImage);


/* 타겟 정보 출력 */


const targetsssInfo = [
    {
        mission: "구조 / Rescue",
        name: "대위 프라이스 / Captain Price",
        affiliation: "영국 / UK, Task Force 141",
        age: "1970.03.24",
        body: "182cm / 72kg",
        etc: "왼쪽 허벅지 총상 추측 / Left thigh gunshot wound expected"
    },
    {
        mission: "제거 / Elimination",
        name: "헤르만 프레징거 / Hermann Freisinger",
        affiliation: "독일 / Germany, SS-Untersturmführer",
        age: "1981.11.17",
        body: "181cm / 80kg",
        etc: "게슈타포 감독 / Director of the Gestapo"
    }
    ,    {
        mission: "제거 / Elimination",
        name: "라울 메넨데즈 / Raúl Menéndez",
        affiliation: "니카과라 / Nicaragua, Cordis die",
        age: "1974.05.21",
        body: "175cm / 68kg",
        etc: "우측 눈 흉터 / A scar on the right eye"
    }
    ,    {
        mission: "체포 / Arrest",
        name: "살렌 코치 / Salen Kotch",
        affiliation: "미국 / US, CIA Special Agent",
        age: "1990.10.04",
        body: "186cm / 85kg",
        etc: "미국 부통령을 암살하고 도주중 / Assassinate U.S. Vice President and on the run"
    }
    ,    {
        mission: "구조 / Rescue",
        name: "케이트 라스웰 / Kate Raswell",
        affiliation: "미국 / US, Task Force 141",
        age: "1996.02.18",
        body: "164cm / 53kg",
        etc: "테러리스트에게 납치 당함, 해커 / Kidnapped by terrorist, A hacker"
    }
    ,    {
        mission: "제거 / Elimination",
        name: "페르세우스 / Perseus",
        affiliation: "러시아(소련 KGB) / Russia (Soviet Union KGB), Unknown...Spy(?)",
        age: "????",
        body: "???cm / ??kg",
        etc: "맨해튼 계획 기밀 유출 후 잠적 / Vanished after leaking Manhattan Projects"
    }
]

const tgMission = document.querySelector("#tg-mission");
const tgName = document.querySelector("#tg-name");
const tgAff = document.querySelector("#tg-affiliation");
const tgAge = document.querySelector("#tg-age");
const tgBody = document.querySelector("#tg-body");
const tgEtc = document.querySelector("#tg-etc");

console.log(chosenTarget.substring(0,1));
const chosenTargetInfo = targetsssInfo[(parseInt(chosenTarget.substring(0,1))-1)];

tgMission.innerText = chosenTargetInfo.mission;
tgName.innerText = chosenTargetInfo.name;
tgAff.innerText = chosenTargetInfo.affiliation;
tgAge.innerText = chosenTargetInfo.age;
tgBody.innerText = chosenTargetInfo.body;
tgEtc.innerText = chosenTargetInfo.etc;