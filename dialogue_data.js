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
    desc: "현재 시간은 {hours}시 {minutes}분입니다\n"
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
      title: "여권이 있다",
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
        alertDesc: "여권이랑 똑같은 영문명으로 잘 되어있네",
        alertDescs: [
          "여권이랑 똑같은 영문명으로 잘 되어있네",
          "출발 시간을 다시 확인했어. 내일 3시간 전까지 가야지"
        ]
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
        alertDesc: "숏폼을 보다가 {elapsed}분이나 흘러갔잖아?!"
      }
    ],
    alreadyChecked: {
      title: "휴대폰이 있다",
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
      title: "캐리어가 있다",
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
        alertDesc: "괜히 책상을 치우다 시간만 {elapsed}분 낭비했어"
      }
    ],
    alreadyChecked: {
      title: "책상",
      desc: "책상은 이미 확인했어"
    }
  },

  // 창문 오브젝트 (클리어와 무관한 조사 대상)
  window: {
    title: "창문 밖은 깜깜하다",
    desc: "여행지 날씨는 맑으면 좋겠다"
  },

  // 고양이 오브젝트 (트랩)
  cat: {
    title: "고양이가 자고 있다",
    desc: "자는 모습이 너무 귀여워!",
    choices: [
      {
        text: "▶ 쓰다듬는다",
        alertTitle: "고양이가 당신을 귀찮아합니다 🐾",
        alertDesc: "고양이랑 놀다 보니 {elapsed}분이 흘렀네"
      },
      {
        text: "▶ 그냥 둔다",
        alertTitle: "알림",
        alertDesc: "자는데 방해하지 말자"
      }
    ],
    alreadyChecked: {
      title: "고양이가 자고 있다",
      desc: "고양이는 그만 귀찮게 해"
    }
  },

  // 고양이 사료 그릇 (확인형)
  bowl: {
    title: "고양이 밥그릇이다",
    desc: "여행 간 동안 밥은 충분해."
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
      title: "TV가 있다",
      desc: "TV는 이미 확인했어."
    }
  },

  // 카페트 오브젝트 (선택지형 함정)
  carpet: {
    title: "내 방이다",
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
      title: "내 방이다",
      desc: "이 주변은 이미 확인했어."
    }
  },

  // 5. 침대 오브젝트 (자러 가기)
  bed: {
    title: "침대에서 잘 수 있다",
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
    timeOut: "너무 늦게까지 깨어있던 탓에\n늦잠을 자서 비행기를 놓쳤습니다.\n그래도 몸은 개운하네요.",
    passportLeftBehind: "공항에 도착해 여권이 없는 걸 알았을 땐 너무 늦었습니다.\n💡여권을 챙겼나요?",
    passportInvalid: "여권 유효기간이 만료된 걸 공항에서 알아봤자 방법은 없습니다.\n💡출발 전에 여권을 확인해보세요",
    luggageBattery: "캐리어 안에 넣어둔 보조배터리가 폭발해\n테러리스트로 체포되었습니다.\n💡캐리어를 확인했나요?",
    phoneTicketUnchecked: "항공권과 여권의 영문 철자가 달라\n비행기 탑승을 거부당했습니다.\n💡이티켓을 확인했나요?",
    phoneTicketUncheckedList: [
      "항공권과 여권의 영문 철자가 달라\n비행기 탑승을 거부당했습니다.\n💡이티켓을 확인했나요?",
      "비행기 시간을 착각해\n16시 비행기인데 공항에 6시에 도착하고 말았습니다.\n💡이티켓을 확인했나요?"
    ],
    phonePermitUnchecked: "여행허가 또는 비자를 받지 않아 비행기 탑승을 거부당했습니다.\n💡메일함을 확인했나요?"
  },

  // 7. 성공(Stage Clear) 텍스트
  stageClear: {
    title: "첫 번째 스테이지 클리어! 🎉",
    desc: "모든 준비가 완벽합니다!",
    nextStageBtn: "다음 스테이지로 이동",
    nextStageAlert: "첫 번째 스테이지를 성공적으로 클리어하셨습니다! 이제 공항으로 출발하세요"
  },

  // 8. 게임결과 통계 텍스트 설정
  gameResult: {
    plannerFocus: "'계획파의 정석'이네요",
    plannerDistracted1: "치명적인 유혹에는 약한 계획파네요",
    plannerDistracted2: "자기조절이 잘 안 되는 편이시군요",
    plannerFail1: "체크리스트를 다시 확인해보죠",
    plannerFail2: "이런 건 계획적이라고 하지 않죠?",
    plannerShame: "당신은 계획파의 수치입니다",

    spontaneousFocus: "이러고도 기분파라고 생각된다면 자신을 돌아보세요",
    spontaneousDistracted1: "눈치가 빠른 기분파네요",
    spontaneousDistracted2: "기분파도 여행 준비는 철저하다고요",
    spontaneousFail1: "기분파치고 노력했는데...!",
    spontaneousFail2: "유혹에 흔들리는 타입이네요",
    spontaneousPride: "고개를 드세요, 여행은 실패했어도 당신은 기분파의 증명입니다",

    statsFormat: "\n\n확인 안 한 아이템 갯수: {uncheckedCount}개\n딴짓 한 횟수: {distractionCount}회\n({typeStats})"
  }
};

// Let's go travel — Stage 02 (공항) 대사 및 팝업 텍스트 데이터
const STAGE02_DIALOGUES = {
  // 0. 인트로 화면
  intro: {
    title: "오늘은 여행을 떠나는 날입니다 ✈️",
    desc: "공항에 도착했습니다.\n비행기를 타러 가세요.",
    startBtn: "▶ 시작하기"
  },

  // 1. 공항 전광판
  fids: {
    title: "탑승 안내 전광판이다",
    desc: "전광판을 확인할까?",
    choices: [
      {
        text: "▶ 확인한다",
        alertTitle: "제대로 된 터미널에 도착했습니다",
        alertDesc: "내가 탈 항공편이 여기 나오네, 체크인을 하러 가자"
      },
      {
        text: "▶ 지나친다",
        alertTitle: "알림",
        alertDesc: "굳이 볼 필요 없어"
      }
    ],
    alreadyChecked: {
      title: "공항 전광판",
      desc: "전광판은 이미 확인했어."
    },
    movedTerminal: {
      title: "공항 전광판",
      desc: "이번엔 제대로 된 터미널이야"
    }
  },

  // 2. 공항 시계
  clock: {
    title: "공항 시계",
    desc: "현재 시간은 {hours}시 {minutes}분입니다."
  },

  // 3. 셀프 백드롭 (위탁 수하물 & 기내 가방 정리 통합)
  bagDrop: {
    title: "셀프 백드롭 카운터",
    desc: "수하물을 부치기 전에 짐을 다시 정리할까?",
    choices: [
      {
        text: "▶ 짐을 정리하자",
        alertTitle: "잠근 캐리어도 다시 보자 🧳",
        alertDesc: "짐을 정리하느라 {elapsed}분을 써버렸네.\n그래도 가방에 있던 {item} 캐리어에 넣었어"
      },
      {
        text: "▶ 시간이 부족할 것 같아",
        alertTitle: "수하물 위탁 완료",
        alertDesc: "캐리어를 보냈어."
      }
    ],
    // 보안검색대에서 액체류 감지로 통과가 거부된 후 다시 돌아왔을 때의 대사
    returnTitle: "수하물 재위탁 완료",
    returnDesc: "짐을 다시 맡기느라 {elapsed}분이나 지났네.",
    alreadyChecked: {
      title: "셀프 백드롭 카운터",
      desc: "캐리어는 이미 보냈어."
    }
  },

  // 5. 보안검색대
  security: {
    title: "보안검색대",
    desc: "보안검색을 위해 검색대에 진입하자.",
    choices: [
      {
        text: "▶ 검색대로 간다"
      }
    ],
    wrongTerminal: {
      alertTitle: "잘못된 터미널 ⚠️",
      alertDesc: "내가 타려는 비행기는 이 터미널이 아니잖아?!",
      choices: [
        {
          text: "▶ 터미널을 이동하자",
          alertTitle: "터미널 이동 완료",
          alertDesc: "제대로 된 터미널로 이동하느라 {elapsed}분이 흘렀습니다."
        }
      ]
    },
    passCluttered: {
      alertTitle: "삐빅! 금지물품 발견 ⚠️",
      alertDesc: "가방 속에 {item} 있었어!",
      choices: [
        {
          text: "▶ 금지물품을 처리하자",
          alertTitle: "가방을 미리 확인했어야죠",
          alertDesc: "치약, 샴푸, 크림, 반찬 및 소스류 모두 액체류입니다."
        }
      ]
    },
    passClean: {
      alertTitle: "보안검색 통과",
      alertDesc: "문제없이 보안검색을 통과했습니다."
    },
    alreadyChecked: {
      title: "보안검색대",
      desc: "보안검색을 마쳐서 되돌아갈 수 없어."
    }
  },

  // 6. 면세점 (플레이 타임 잔여 시간에 따른 분기 함정)
  dutyFree: {
    title: "면세점이 있다.",
    timeWasted: {
      alertTitle: "쇼핑 삼매경 🛍️",
      alertDesc: "면세점을 구경하다 {elapsed}분이나 지났네."
    },
    lastCall: {
      alertTitle: "비행기 탑승 실패 🚨",
      alertDesc: "면세점 구경에 정신이 팔려 라스트콜을 듣지 못했습니다!\n눈앞에서 비행기를 놓치는 경험은 새롭네요."
    },
    alreadyChecked: {
      title: "면세점",
      desc: "이제 면세점을 볼 시간이 없어."
    }
  },

  // 7. 게이트 앞 의자 (선택지형 필수)
  gateSeat: {
    title: "게이트에 도착했다.",
    desc: "뭘 하며 기다릴까?",
    choices: [
      {
        text: "▶ 노래를 듣자",
        alertTitle: "뮤직 이즈 마이 라이프 🎶",
        alertDesc: "노이즈 캔슬링 이어폰 때문에\n게이트 변경 알림을 듣지 못했습니다"
      },
      {
        text: "▶ 유튜브를 보자",
        alertTitle: "이쯤되면 중독이에요 📺",
        alertDesc: "유튜브에 빠져있느라 라스트콜을 듣지 못했습니다"
      },
      {
        text: "▶ 그냥 있자",
        alertTitle: "탑승을 시작합니다 ✈️",
        alertDesc: "LET'S GO TRVEL!"
      }
    ]
  },

  // 8. 낯선 사람 (선택지형 랜덤 이벤트)
  stranger: {
    title: "어쩌면 이것은 운명? 💗",
    desc: "누군가가 다가왔습니다...\n'화장실이 급해서 그런데 가방 좀 봐주실 수 있나요?'",
    choices: [
      {
        text: "▶ 네, 그럼요!",
        alertTitle: "이 범죄자 녀석! 🚨",
        alertDesc: "가방 안에서 마약이 나와 체포당했습니다."
      },
      {
        text: "▶ 아뇨, 싫어요",
        alertTitle: "짐은 알아서 챙기세요 💼",
        alertDesc: "불쾌한 표정으로 자리를 떠나네...",
        choices: [
          {
            text: "▶ 그냥 무시하자"
          }
        ]
      }
    ]
  },

  // 9. 실패(Game Over) 사유 텍스트
  gameOver: {
    timeOut: "탑승 수속 마감 시간이 지났습니다.\n눈앞에서 비행기를 놓쳤습니다.",
    gateEarphone: "하루에 3명이 이어폰으로 노래를 듣다가\n게이트에서 비행기를 놓친다고 합니다.\n오늘은 당신이네요.",
    gateYoutube: "이제 유튜브에서 '비행기 놓쳤을 때'를 검색해야겠네요",
    strangerTrap: "'공항에서는 낯선 사람 짐을 맡아주지 마세요'\n라고 감옥에서 말해봤자 이미 늦었습니다."
  },

  // 10. 성공(Stage Clear) 텍스트
  stageClear: {
    title: "두 번째 스테이지 클리어! ✈️",
    desc: "모든 준비가 완벽합니다!",
    nextStageBtn: "게임 클리어",
    nextStageAlert: "축하합니다!\n무사히 출국 심사를 마치고 비행기에 탑승했습니다!\n즐거운 여행 되세요."
  }
};
