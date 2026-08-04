// Let's go travel — Stage 01 (집) 대사 및 팝업 텍스트 데이터

const STAGE01_DIALOGUES = {
  // 0. 인트로 화면
  intro: {
    title: "LET'S GO TRAVEL",
    desc: "내일은 여행을 떠나는 날입니다.\n준비를 마치고 자러 가세요.",
    startBtn: "▶ 시작하기"
  },

  userTypeSelect: {
    title: "성향 선택",
    desc: "당신은 어떤 유형인가요?",
    choices: [
      "▶ 꼼꼼한 계획파",
      "▶ 즉흥적인 기분파"
    ]
  },

  // 1. 시계 오브젝트
  clock: {
    title: "시간을 확인했다",
    desc: "\n현재 시간은 {hours}시 {minutes}분입니다\n"
  },

  // 2. 여권 오브젝트
  passport: {
    title: "여권을 발견했다",
    desc: "책상 위에 여권이 있네",
    choices: [
      {
        text: "▶ 가방에 넣는다",
        alertTitle: "알림",
        alertDesc: "여권을 가방에 넣자"
      },
      {
        text: "▶ 가방에 넣지 않는다",
        alertTitle: "여권을 펼쳐서 확인했다",
        alertDesc: "유효기간이 넉넉히 남아 다음 여행도 갈 수 있겠어"
      }
    ],
    alreadyChecked: {
      title: "여권",
      desc: "여권은 이미 확인했어"
    }
  },

  // 3. 휴대폰 오브젝트
  phone: {
    title: "휴대폰에 눈이 간다",
    desc: "휴대폰을 볼까?",
    choices: [
      {
        text: "▶ 다운로드 폴더를 본다",
        textDone: "▶ 다운로드 폴더 (완료)",
        alertTitle: "이티켓을 확인했다",
        alertDesc: "여권이랑 똑같은 영문명으로 잘 되어있네"
      },
      {
        text: "▶ 메일함을 본다",
        textDone: "▶ 메일함 (완료)",
        alertTitle: "여행 허가 메일이 도착했다",
        alertDesc: "여행 허가 승인 메일을 챙겨두자"
      },
      {
        text: "▶ SNS를 본다",
        textDone: "▶ SNS (완료)",
        alertTitle: "보기 시작하면 멈출 수 없어! 😱",
        alertDesc: "숏폼을 보기 시작한 당신은 알고리즘의 늪에 빠져 시간을 낭비했습니다!"
      }
    ],
    alreadyChecked: {
      title: "휴대폰",
      desc: "휴대폰은 이미 확인했어"
    }
  },

  // 4. 캐리어 오브젝트
  luggage: {
    title: "캐리어를 발견했다",
    desc: "캐리어가 열려 있어",
    choices: [
      {
        text: "▶ 캐리어를 닫는다",
        alertTitle: "알림",
        alertDesc: "캐리어를 닫아 두자"
      },
      {
        text: "▶ 캐리어를 닫지 않는다",
        alertTitle: "보조배터리를 발견했다",
        alertDesc: "잠깐, 보조배터리는 꺼내자"
      }
    ],
    alreadyChecked: {
      title: "캐리어",
      desc: "캐리어는 이미 확인했어"
    }
  },

  // 책상 오브젝트 (클리어와 무관한 조사 대상)
  desk: {
    title: "책상",
    desc: "갑자기 책상이 더러워 보이네",
    choices: [
      {
        text: "▶ 그냥 둔다",
        alertTitle: "알림",
        alertDesc: "생각해보니 늘 그랬지"
      },
      {
        text: "▶ 청소한다",
        alertTitle: "시험 기간에 청소하는 타입인가요? 🤔",
        alertDesc: "괜히 책상을 치우다 시간만 {elapsed}분 낭비했습니다"
      }
    ],
    alreadyChecked: {
      title: "책상",
      desc: "책상은 이미 확인했어"
    }
  },

  // 창문 오브젝트 (클리어와 무관한 조사 대상)
  window: {
    title: "창문",
    desc: "여행지 날씨는 맑으면 좋겠다"
  },

  // 고양이 오브젝트 (트랩)
  cat: {
    title: "고양이가 자고 있다",
    desc: "자는 모습이 너무 귀여워!",
    choices: [
      {
        text: "▶ 쓰다듬는다",
        alertTitle: "고양이 쓰다듬기 못참지! 🐾",
        alertDesc: "잘 자는 고양이를 귀찮게 하는 동안 {elapsed}분이 흘렀습니다"
      },
      {
        text: "▶ 그냥 둔다",
        alertTitle: "알림",
        alertDesc: "자는데 방해하지 말자"
      }
    ],
    alreadyChecked: {
      title: "고양이",
      desc: "고양이는 좀 그만 귀찮게 해"
    }
  },

  // 고양이 사료 그릇 (확인형)
  bowl: {
    title: "고양이 밥그릇",
    desc: "여행 간 동안 먹을 사료는 충분해"
  },

  // TV 오브젝트 (선택지형 함정)
  tv: {
    title: "TV가 꺼져있다",
    desc: "TV를 틀까?",
    choices: [
      {
        text: "▶ 틀어본다",
        alertTitle: "나도 모르게 한참 서서 본 적 있죠 📺",
        alertDesc: "하필 재미있는 방송이 나와서 {elapsed}분을 소비했습니다."
      },
      {
        text: "▶ 그냥 둔다",
        alertTitle: "알림",
        alertDesc: "출발해야 하니 TV는 꺼두자."
      }
    ],
    alreadyChecked: {
      title: "TV",
      desc: "TV는 이미 확인했어."
    }
  },

  // 카페트 오브젝트 (선택지형 함정)
  carpet: {
    title: "내 방",
    desc: "오늘따라 방이 더러워 보여",
    choices: [
      {
        text: "▶ 청소한다",
        alertTitle: "시험 기간에 청소하는 타입이죠? 🧹",
        alertDesc: "안하던 청소를 하느라 {elapsed}분이 소모되었습니다."
      },
      {
        text: "▶ 그냥 둔다",
        alertTitle: "알림",
        alertDesc: "지금은 짐을 싸는 것이 먼저야."
      }
    ],
    alreadyChecked: {
      title: "내 방",
      desc: "이 주변은 이미 확인했어."
    }
  },

  // 5. 침대 오브젝트 (자러 가기)
  bed: {
    title: "침대",
    desc: "이제 잘까?",
    choices: {
      sleep: "▶ 잔다",
      lookAround: "▶ 자지 않는다"
    },
    alreadyChecked: {
      title: "알림",
      desc: "아직 자고 싶지 않아"
    }
  },

  // 6. 실패(Game Over) 사유 텍스트
  gameOver: {
    timeOut: "너무 늦게까지 깨어있던 당신은 늦잠을 자서 비행기를 놓쳤습니다. 그래도 몸은 개운하네요.",
    passportLeftBehind: "공항에 도착해 여권이 없는 걸 알았을 땐 너무 늦었습니다.",
    passportInvalid: "여권 유효기간이 만료된 걸 공항에서 알아차려도 방법은 없습니다.",
    luggageBattery: "캐리어 안에 넣어둔 보조배터리가 폭발해 테러리스트로 체포되었습니다.",
    phoneTicketUnchecked: "항공권과 여권의 영문 철자가 달라 비행기 탑승을 거부당했습니다.",
    phonePermitUnchecked: "여행허가 또는 비자를 받지 않아 비행기 탑승을 거부당했습니다."
  },

  // 7. 성공(Stage Clear) 텍스트
  stageClear: {
    title: "첫 번째 스테이지 클리어! 🎉",
    desc: "모든 준비가 완벽합니다!",
    nextStageBtn: "다음 스테이지로 이동",
    nextStageAlert: "첫 번째 스테이지를 성공적으로 클리어하셨습니다! 이제 공항으로 출발하세요"
  }
};
