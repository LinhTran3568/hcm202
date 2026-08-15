export const meta = {
  title: "PHIÊN TÒA GIẢ ĐỊNH",
  subtitle: "Gia đình truyền thống hay gia đình hạt nhân?",
  tagline: "Sống riêng là tự lập hay bất hiếu?",
  subject: "Môn học: Tư tưởng Hồ Chí Minh",
  group: "Nhóm chúng em",
  year: "Học kỳ 9 · 2026",
  caseNo: "01/2026/GĐ-TT",
}

export const characters = [
  {
    id: "mc",
    name: "MC",
    role: "Người dẫn dắt phiên tòa",
    desc: "Mở đầu, liên hệ vấn đề với tư tưởng Hồ Chí Minh và tổng kết quan điểm của nhóm.",
  },
  {
    id: "judge",
    name: "Thẩm phán",
    role: "Điều hành phiên tòa",
    desc: "Công bố vụ việc, lắng nghe tranh luận, tóm tắt và phân tích lý luận khách quan.",
  },
  {
    id: "mother",
    name: "Mẹ chồng",
    role: "Bảo vệ gia đình truyền thống",
    desc: "Đại diện thế hệ cha mẹ, đề cao sự gắn kết, trách nhiệm giữa các thế hệ.",
  },
  {
    id: "lan",
    name: "Lan – con dâu",
    role: "Đại diện gia đình hạt nhân",
    desc: "Đại diện thế hệ trẻ, đề cao tính tự lập, không gian riêng và trách nhiệm theo cách mới.",
  },
]

export const opening = {
  speaker: "mc",
  label: "Khai mạc phiên tòa",
  text: [
    "Kính thưa thầy/cô và các bạn!",
    "Trong xã hội hiện nay, gia đình Việt Nam đang có sự chuyển biến từ gia đình truyền thống sang gia đình hạt nhân.",
    "Gia đình truyền thống đề cao sự chung sống, gắn bó và hỗ trợ giữa nhiều thế hệ; trong khi gia đình hạt nhân chủ yếu gồm vợ chồng và con cái, đề cao tính tự lập và không gian riêng.",
    "Vậy sự chuyển đổi này là sự thích nghi với xã hội hiện đại hay sự suy thoái của gia đình Việt Nam? Những giá trị nào được giữ lại và những giá trị nào có nguy cơ mất đi?",
    "Để tìm câu trả lời, nhóm chúng em xin đưa vấn đề vào một phiên tòa giả định. Xin mời Thẩm phán công bố vụ việc.",
  ],
}

export const caseStatement = {
  speaker: "judge",
  label: "Công bố vụ việc",
  ref: "Vụ việc số 01/2026 · Tòa Gia đình giả định",
  text: [
    "Phiên tòa hôm nay xét xử một tình huống liên quan đến sự thay đổi mô hình gia đình.",
    "Sau khi kết hôn, Lan và chồng quyết định sống riêng thay vì sống cùng bố mẹ chồng.",
    "Bố mẹ chồng không đồng tình với quyết định này. Họ cho rằng việc con cái ra ở riêng thể hiện sự xa cách, thiếu trách nhiệm, thậm chí là bất hiếu và bỏ rơi cha mẹ.",
    "Trong khi đó, Lan và chồng cho rằng sống riêng giúp hai vợ chồng tự lập, có không gian riêng, hạn chế những mâu thuẫn giữa các thế hệ, đồng thời họ vẫn thường xuyên về thăm hỏi và quan tâm đến bố mẹ.",
    "Sau đây, mời phía mẹ chồng trình bày quan điểm.",
  ],
}

export const debate = [
  {
    id: "d1",
    speaker: "mother",
    label: "Luận điểm 1",
    title: "Sống gần cha mẹ là giữ sự gắn kết các thế hệ",
    text: [
      "Tôi không phản đối việc các con muốn tự lập.",
      "Nhưng tôi cho rằng sau khi kết hôn, nếu có điều kiện thì con cái vẫn nên sống gần cha mẹ.",
      "Với tôi, gia đình không chỉ là nơi vợ chồng xây dựng cuộc sống riêng, mà còn là nơi các thế hệ quan tâm, chăm sóc và có trách nhiệm với nhau.",
      "Cha mẹ đã nuôi con trưởng thành. Khi con lập gia đình, tôi không mong con phải hy sinh cuộc sống riêng của mình, nhưng tôi mong các con vẫn giữ được sự gắn bó với cha mẹ.",
      "Nếu các con ra ở riêng, điều tôi lo nhất không phải là khoảng cách về nơi ở, mà là khoảng cách về tình cảm và trách nhiệm.",
      "Tôi muốn giữ không chỉ việc sống chung, mà quan trọng hơn là tình cảm gia đình, sự quan tâm và trách nhiệm giữa các thế hệ.",
    ],
    note: {
      kind: "Giá trị mà Mẹ chồng bảo vệ",
      items: [
        "Tình cảm gia đình",
        "Sự quan tâm giữa các thành viên",
        "Trách nhiệm với gia đình",
        "Sự gắn kết giữa các thế hệ",
      ],
      extra: "Kế thừa những giá trị tốt đẹp của truyền thống.",
    },
  },
  {
    id: "d2",
    speaker: "judge",
    label: "Thẩm phán",
    text: ["Lan, cô có ý kiến gì?"],
  },
  {
    id: "d3",
    speaker: "lan",
    label: "Phản biện 1",
    title: "Cách sống thay đổi theo điều kiện xã hội",
    text: [
      "Con hiểu điều mẹ mong muốn, và con hoàn toàn đồng ý rằng con cái phải có trách nhiệm với cha mẹ.",
      "Nhưng con nghĩ cách sống của mỗi thế hệ không nhất thiết phải giống nhau mãi mãi — thời đại thay đổi thì cách sống cũng có thể thay đổi theo.",
      "Vợ chồng con muốn có không gian riêng để tự lập, nhưng điều đó không có nghĩa là bỏ bê cha mẹ.",
      "Nếu chúng con vẫn thường xuyên về thăm, gọi điện, quan tâm và hỗ trợ bố mẹ khi cần, thì chỉ vì không sống chung, liệu có thể nói chúng con đã bỏ rơi cha mẹ hay không?",
    ],
    note: {
      kind: "Trích dẫn giáo trình",
      quote:
        "“Xa lạ với con người trừu tượng, phi nguồn gốc lịch sử, Hồ Chí Minh nhìn nhận con người lịch sử - cụ thể về giới tính, lứa tuổi, nghề nghiệp, chức vụ, vị trí..., trong từng giai đoạn lịch sử cụ thể.”",
      source: "Chương VI, mục III.1, trang 132",
      extra:
        "Hồ Chí Minh không xem cách sống của con người là bất biến, mà luôn đặt trong hoàn cảnh lịch sử - xã hội cụ thể. Hình thức sống chung hay sống riêng cũng cần được nhìn nhận theo điều kiện xã hội hiện tại, không nhất thiết rập khuôn theo cách sống của các thế hệ trước.",
    },
  },
  {
    id: "d4",
    speaker: "mother",
    label: "Phản biện",
    title: "Khi cha mẹ già yếu thì sao?",
    text: [
      "Nhưng con thử nghĩ xem.",
      "Khi cha mẹ già yếu hoặc cần con cái chăm sóc thì sao?",
      "Nếu các con sống riêng, việc quan tâm và chăm sóc cha mẹ có còn thuận tiện như khi sống gần nhau không?",
      "Tôi sợ rằng ban đầu các con nói là “tự lập”, nhưng nếu không duy trì sự quan tâm thường xuyên thì khoảng cách về nơi ở có thể dần trở thành khoảng cách trong tình cảm.",
      "Tôi không muốn đến lúc cha mẹ cần con thì con lại nói: “Con có gia đình riêng rồi.”",
      "Tôi chỉ mong rằng dù các con trưởng thành và có gia đình riêng, các con vẫn nhớ rằng gia đình luôn cần sự quan tâm và trách nhiệm của mỗi thành viên.",
    ],
    note: {
      kind: "Vấn đề của tình huống",
      items: [
        "Khi gia đình hạt nhân hình thành, sự gắn kết và hỗ trợ giữa các thế hệ có thể cần được duy trì bằng những hình thức khác.",
      ],
    },
  },
  {
    id: "d5",
    speaker: "lan",
    label: "Đáp lại",
    title: "Sống riêng không giảm trách nhiệm",
    text: [
      "Con hiểu điều mẹ lo lắng. Nhưng con nghĩ sống riêng không đồng nghĩa với việc giảm đi trách nhiệm với cha mẹ.",
      "Vợ chồng con muốn có không gian riêng để tự lập và xây dựng cuộc sống, nhưng chúng con vẫn có thể chủ động duy trì sự gắn kết và trách nhiệm với gia đình.",
      "Vì vậy, con nghĩ hình thức sống có thể thay đổi, nhưng sự quan tâm và trách nhiệm giữa các thành viên vẫn cần được giữ gìn.",
    ],
    note: {
      kind: "Trích dẫn giáo trình",
      quote:
        "“Thực hiện chiến lược phát triển gia đình Việt Nam. Phát huy truyền thống tốt đẹp, xây dựng gia đình no ấm, tiến bộ, hạnh phúc, văn minh.”",
      source:
        "Chương VI, mục IV.1 – Xây dựng và phát triển văn hóa, con người (trích Văn kiện Đại hội đại biểu toàn quốc lần thứ XII), trang 137",
      extra:
        "Giáo trình chỉ nêu mục tiêu chung; phần “sống riêng vẫn giữ trách nhiệm” là suy luận riêng của nhóm, giáo trình không nói trực tiếp.",
    },
  },
  {
    id: "d6",
    speaker: "mother",
    label: "Đặt vấn đề truyền thống",
    title: "Giữ gìn gắn kết khi hình thức sống thay đổi",
    text: [
      "Nhưng nếu thế hệ trẻ ngày càng có xu hướng sống riêng, liệu chúng ta có cần suy nghĩ về cách giữ gìn sự gắn kết giữa các thế hệ không?",
      "Trước đây, việc nhiều thế hệ sống gần hoặc sống cùng nhau tạo điều kiện để ông bà, cha mẹ và con cháu quan tâm, hỗ trợ và chia sẻ với nhau trong cuộc sống.",
      "Nếu các thế hệ sống riêng, tôi không nói rằng tình cảm gia đình sẽ mất đi.",
      "Nhưng tôi lo rằng nếu mọi người quá tập trung vào cuộc sống riêng của mình mà không chủ động duy trì sự gắn kết, thì khoảng cách giữa các thế hệ có thể ngày càng lớn.",
      "Tôi chỉ sợ rằng chúng ta giữ được sự tự do của mỗi người nhưng lại quên mất việc giữ gìn những giá trị tốt đẹp của gia đình.",
    ],
    note: {
      kind: "Nguyên tắc “Nếp sống mới”",
      quote:
        "Nếp sống mới phải kế thừa những truyền thống tốt đẹp; cái cũ tốt thì phát triển thêm, cái cũ không phù hợp thì sửa đổi cho hợp lý, cái mới hay thì tiếp thu.",
      extra:
        "Việc xây dựng đời sống mới phải bắt đầu “từ mỗi con người, mỗi gia đình với tư cách là tế bào của xã hội.” Câu hỏi Mẹ chồng đặt ra: nếu hình thức sống thay đổi, làm thế nào để vẫn giữ được những giá trị tốt đẹp của gia đình?",
    },
  },
  {
    id: "d7",
    speaker: "lan",
    label: "Phản biện cao trào",
    title: "Giữ giá trị, không nhất thiết giữ hình thức",
    text: [
      "Con nghĩ hiện đại hóa không có nghĩa là từ bỏ truyền thống.",
      "Con vẫn muốn giữ lòng hiếu thảo, tình cảm và trách nhiệm với cha mẹ.",
      "Nhưng giữ giá trị không nhất thiết phải giữ nguyên hình thức.",
      "Ngày trước, sống chung có thể là cách thuận tiện để chăm sóc cha mẹ.",
      "Ngày nay, chúng con có thể sống riêng nhưng vẫn thường xuyên thăm hỏi, chăm sóc và hỗ trợ bố mẹ.",
      "Vì vậy, con nghĩ chúng ta không nhất thiết phải lựa chọn giữa truyền thống và hiện đại.",
      "Chúng ta có thể giữ những giá trị tốt đẹp của truyền thống, đồng thời tiếp thu những cách sống phù hợp với điều kiện mới.",
    ],
    note: {
      kind: "Trích dẫn giáo trình",
      quote:
        "“Kế thừa và phát huy những truyền thống văn hóa tốt đẹp của cộng đồng các dân tộc Việt Nam, tiếp thu những tinh hoa văn hóa nhân loại, xây dựng một xã hội dân chủ, công bằng, văn minh, vì lợi ích chân chính và phẩm giá con người.”",
      source:
        "Chương VI, mục IV.1, trang 136 (trích từ Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội, bổ sung phát triển năm 2011)",
      extra:
        "Đây là cơ sở để nhóm không tuyệt đối hóa: Truyền thống = tốt; Hiện đại = xấu.",
    },
  },
]

export const judgeSummary = [
  {
    id: "tomtat",
    num: "I",
    title: "Tóm tắt phiên tòa",
    text: [
      "Qua phần tranh luận, tôi nhận thấy hai bên không hoàn toàn mâu thuẫn về mục tiêu.",
      "Mẹ chồng muốn bảo vệ: hiếu thảo – trách nhiệm – sự gắn kết giữa các thế hệ.",
      "Lan muốn bảo vệ: tự lập – quyền tự quyết – không gian riêng – sự hòa thuận của gia đình trẻ.",
      "Nhưng cả hai đều mong muốn gia đình được duy trì và các thành viên được hạnh phúc.",
      "Vì vậy, mâu thuẫn ở đây chủ yếu nằm ở cách thực hiện các giá trị gia đình, chứ không phải một bên muốn giữ gia đình còn bên kia muốn từ bỏ gia đình.",
      "Sống chung không mặc nhiên đồng nghĩa với hạnh phúc, cũng như sống riêng không đồng nghĩa với bất hiếu.",
    ],
  },
  {
    id: "lyluan",
    num: "II",
    title: "Trả lời câu hỏi lý luận",
    text: [
      "Vậy gia đình hạt nhân có phải là sự suy thoái của gia đình Việt Nam hay không?",
      "Theo tôi, không nên đồng nhất gia đình hạt nhân với sự suy thoái.",
      "Gia đình hạt nhân có thể tạo điều kiện cho vợ chồng trẻ tự lập, chủ động tổ chức cuộc sống và có không gian riêng.",
      "Nhưng nó cũng có nguy cơ làm giảm sự gắn kết, hỗ trợ trực tiếp giữa các thế hệ nếu các thành viên quá đề cao cuộc sống cá nhân.",
      "Ngược lại, gia đình truyền thống có ưu điểm về sự gắn kết và hỗ trợ giữa các thế hệ, nhưng sống chung cũng có thể phát sinh mâu thuẫn do khác biệt về lối sống và quan điểm.",
      "Vì vậy, theo tôi, sự chuyển đổi này nên được nhìn nhận là một quá trình thích nghi với những điều kiện xã hội mới, chứ không nên mặc nhiên coi đó là sự suy thoái.",
    ],
    note: "Theo nhóm, đây là một xu hướng thích nghi với điều kiện xã hội hiện đại — không gán kết luận cho giáo trình.",
  },
  {
    id: "chucnang",
    num: "III",
    title: "Các chức năng của gia đình",
    text: [
      "Còn các chức năng cơ bản của gia đình có mất đi khi chuyển sang gia đình hạt nhân hay không?",
      "Theo tôi, không nhất thiết.",
      "Gia đình vẫn có thể thực hiện việc chăm sóc, nuôi dưỡng, giáo dục, tổ chức đời sống và duy trì tình cảm giữa các thành viên.",
      "Điều thay đổi chủ yếu là cách thức thực hiện.",
      "Khi sống chung, ông bà có thể trực tiếp chăm sóc con cháu. Khi sống riêng, sự quan tâm có thể được thực hiện thông qua thăm hỏi, chăm sóc, hỗ trợ và chia sẻ trách nhiệm khi cần.",
      "Như vậy, thay đổi mô hình gia đình không đồng nghĩa với việc gia đình mất đi vai trò của mình.",
      "Điều quan trọng là các thành viên có còn thực hiện trách nhiệm và duy trì những giá trị tốt đẹp hay không.",
      "Phiên tòa xin kết thúc tại đây. Phần tiếp theo, xin nhường lại cho MC để liên hệ với tư tưởng Hồ Chí Minh và quan điểm của nhóm.",
    ],
  },
]

export const hcmIntro = [
  {
    id: "h1",
    label: "Liên hệ tư tưởng Hồ Chí Minh về con người",
    text: [
      "Cảm ơn Thẩm phán.",
      "Qua phiên tòa, chúng ta thấy vấn đề không đơn giản là sống chung hay sống riêng.",
      "Sâu xa hơn, đó là câu hỏi: Con người có thể tự do xây dựng cuộc sống của mình như thế nào mà vẫn duy trì trách nhiệm với những người xung quanh?",
      "Đây chính là vấn đề có thể liên hệ với tư tưởng Hồ Chí Minh về con người.",
      "Trong giáo trình, con người không được nhìn nhận như một cá thể tồn tại biệt lập mà luôn tồn tại trong các mối quan hệ xã hội.",
      "Vì vậy, Lan có quyền tự lập và xây dựng gia đình riêng, nhưng việc sống riêng không làm Lan mất đi mối quan hệ và trách nhiệm với cha mẹ.",
      "Từ đó, nhóm có thể rút ra: Tự lập không có nghĩa là tách biệt. Một người có thể chủ động xây dựng cuộc sống riêng nhưng vẫn phải có trách nhiệm với những người mình có quan hệ.",
    ],
    note: {
      kind: "Cơ sở giáo trình",
      quote:
        "“Xa lạ với con người trừu tượng, phi nguồn gốc lịch sử, Hồ Chí Minh nhìn nhận con người lịch sử - cụ thể về giới tính, lứa tuổi, nghề nghiệp, chức vụ, vị trí..., trong từng giai đoạn lịch sử cụ thể.”",
      source: "Chương VI – III. Tư tưởng Hồ Chí Minh về con người, trang 132",
      extra: "Con người tồn tại trong các mối quan hệ xã hội. Lan sống riêng nhưng không tách khỏi các quan hệ gia đình.",
    },
  },
  {
    id: "h2",
    label: "Xây dựng và phát triển văn hóa, con người",
    text: [
      "Tiếp theo, ở phần tư tưởng Hồ Chí Minh về xây dựng con người, giáo trình đặt vấn đề xây dựng con người gắn với việc kế thừa những giá trị tốt đẹp của truyền thống, đồng thời hình thành những phẩm chất phù hợp với điều kiện mới.",
      "Vận dụng vào tình huống: chúng ta không nên đặt Truyền thống = tốt và Hiện đại = xấu, cũng không nên ngược lại.",
      "Điều cần thiết là giữ lại những giá trị tốt đẹp như: hiếu thảo – tình cảm – trách nhiệm – đoàn kết.",
      "Đồng thời phát huy những phẩm chất phù hợp với cuộc sống hiện đại như: tự lập – chủ động – tôn trọng cá nhân – dám chịu trách nhiệm với lựa chọn của mình.",
    ],
    note: {
      kind: "Cơ sở giáo trình",
      quote:
        "Kế thừa những giá trị tốt đẹp của truyền thống, đồng thời hình thành những phẩm chất mới phù hợp với thời đại.",
      source: "Chương VI – IV.1. Xây dựng và phát triển văn hóa, con người",
      extra:
        "Đây là cơ sở lý luận để giải quyết yêu cầu: “Làm thế nào vừa giữ được giá trị gia đình truyền thống vừa thích nghi với cuộc sống hiện đại?”",
    },
  },
  {
    id: "h3",
    label: "Kế thừa truyền thống, tiếp thu tinh hoa",
    text: [
      "Cụ thể hơn, theo giáo trình, việc xây dựng và phát triển văn hóa, con người cần kế thừa và phát huy những truyền thống văn hóa tốt đẹp, đồng thời tiếp thu những tinh hoa văn hóa nhân loại.",
      "Áp dụng vào tình huống của Lan, những giá trị như hiếu thảo, tình cảm và trách nhiệm với cha mẹ là những giá trị tốt đẹp cần được giữ gìn và phát huy.",
      "Đồng thời, trong điều kiện xã hội hiện nay, mỗi người cũng có thể chủ động xây dựng cuộc sống và gia đình của mình theo cách phù hợp.",
      "Vì vậy, theo nhóm, thay đổi cách sống không có nghĩa là từ bỏ những giá trị truyền thống, mà quan trọng là vẫn giữ được những giá trị tốt đẹp trong điều kiện mới.",
    ],
    note: {
      kind: "Trích dẫn giáo trình",
      quote:
        "“Kế thừa và phát huy những truyền thống văn hóa tốt đẹp của cộng đồng các dân tộc Việt Nam, tiếp thu những tinh hoa văn hóa nhân loại...”",
      source: "Chương VI – IV.1. Xây dựng và phát triển văn hóa, con người, trang 136",
      extra:
        "MC chỉ dựa vào hai ý có trong giáo trình: kế thừa và phát huy truyền thống tốt đẹp; tiếp thu tinh hoa văn hóa nhân loại. Phần “sống riêng”, “tự lập”, “thay đổi cách sống” là phần nhóm vận dụng vào tình huống, không phải câu giáo trình nói trực tiếp.",
    },
  },
  {
    id: "h4",
    label: "Liên hệ với gia đình",
    text: [
      "Điều này cũng cho thấy vai trò quan trọng của gia đình trong việc xây dựng con người.",
      "Gia đình không chỉ là nơi con người sinh sống, mà còn là môi trường hình thành cách ứng xử, tình cảm, trách nhiệm và các giá trị của mỗi người.",
      "Vì vậy, điều quan trọng không chỉ là gia đình sống chung hay sống riêng, mà là:",
    ],
    checklist: [
      "Các thành viên có yêu thương nhau không?",
      "Có tôn trọng nhau không?",
      "Có trách nhiệm với nhau không?",
      "Và có duy trì được những giá trị tốt đẹp của gia đình hay không?",
    ],
  },
]

export const poll = {
  intro:
    "Nhưng đây không chỉ là câu chuyện của Lan và mẹ chồng. Sau này, chính chúng ta cũng có thể phải đứng trước lựa chọn tương tự. Vì vậy, nhóm muốn hỏi ý kiến các bạn.",
  questions: [
    {
      statement: "“Con cái lấy chồng/vợ phải sống chung với bố mẹ.”",
    },
    {
      statement: "“Sống riêng đồng nghĩa với bất hiếu.”",
    },
    {
      statement: "“Gia đình hạt nhân làm mất hoàn toàn giá trị truyền thống.”",
    },
  ],
  ask: "Tại sao?",
  note: "Sau mỗi câu, nhóm không đưa đáp án ngay mà hỏi lại “Tại sao?” để lấy ý kiến của lớp.",
}

export const solutions = {
  view:
    "Qua những ý kiến vừa rồi, nhóm chúng em xin đưa ra quan điểm của mình. Nhóm lựa chọn mô hình gia đình hạt nhân, nhưng vẫn duy trì sự gắn kết với gia đình mở rộng.",
  viewExtra:
    "Bởi vì nhóm cho rằng gia đình hạt nhân phù hợp với nhu cầu tự lập và điều kiện sống hiện đại. Tuy nhiên, chúng em không cho rằng sau khi kết hôn thì gia đình nhỏ trở thành một thế giới riêng và không còn trách nhiệm với cha mẹ.",
  items: [
    {
      id: "giatri",
      title: "Giữ giá trị, thay đổi hình thức",
      text: [
        "Giữ lòng hiếu thảo nhưng không nhất thiết phải thể hiện bằng việc sống chung.",
        "Có thể sống riêng nhưng vẫn thăm hỏi, chăm sóc và hỗ trợ cha mẹ.",
      ],
    },
    {
      id: "tulap",
      title: "Tự lập nhưng không tách biệt",
      text: ["Có không gian riêng nhưng vẫn quan tâm và có trách nhiệm với gia đình."],
    },
    {
      id: "ton-trong",
      title: "Tôn trọng hai chiều",
      text: [
        "Cha mẹ tôn trọng quyền tự quyết và không gian riêng của con cái.",
        "Con cái tôn trọng tình cảm, kinh nghiệm và nhu cầu được quan tâm của cha mẹ.",
      ],
    },
    {
      id: "gan-ket",
      title: "Duy trì gắn kết giữa các thế hệ",
      text: [
        "Dù sống riêng, các thành viên vẫn có thể duy trì sự gắn kết thông qua: thăm hỏi – chăm sóc – chia sẻ – hỗ trợ – cùng tham gia các hoạt động gia đình.",
      ],
    },
  ],
}

export const conclusion = {
  setup: [
    "Vì vậy, nhóm cho rằng chúng ta không nên đặt câu hỏi: “Gia đình truyền thống hay gia đình hạt nhân tốt hơn?”",
    "Mà nên đặt câu hỏi: “Làm thế nào để gia đình hiện đại vẫn giữ được những giá trị tốt đẹp của gia đình Việt Nam?”",
    "Bởi vì mô hình gia đình có thể thay đổi, nhưng những giá trị tốt đẹp không nhất thiết phải thay đổi.",
    "Chúng ta có thể: Kế thừa truyền thống – thích nghi với hiện đại – và cùng nhau xây dựng con người, gia đình Việt Nam phù hợp với điều kiện mới.",
  ],
  pullQuote:
    "Có thể sống riêng về không gian, nhưng không sống riêng về trách nhiệm và tình cảm.",
  thanks: "Xin cảm ơn thầy/cô và các bạn đã lắng nghe!",
}
