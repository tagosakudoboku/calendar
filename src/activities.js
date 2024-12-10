const acts = [
    {
        title: "会議",
        start_time: "2024-12-08 8:20:29",
        end_time: "2024-12-08 18:20:29",
        description: "sample actvitiy",
        color: "#bcbcbc",
    },
    {
        title: "ランチ",
        start_time: "2024-12-26 14:30:00",
        end_time: "2024-12-26 15:30:00",
        description: "プロジェクトレビュー",
        color: "#99ccff",
    },
    {
        title: "レビュー",
        start_time: "2024-12-09 15:30:00",
        end_time: "2024-12-09 17:30:00",
        description: "チームイベント",
        color: "#bcbcbc",
    },
    {
        title: "会議",
        start_time: "2024-12-12 08:30:00",
        end_time: "2024-12-12 11:30:00",
        description: "重要な会議",
        color: "#bcbcbc",
    },
    {
        "title": "会議",
        "start_time": "2024-11-16 09:33:14",
        "end_time": "2024-11-16 11:33:14",
        "description": "プロジェクトの進捗確認",
        "color": "#F1C40F"
    },
    {
        "title": "ワークショップ",
        "start_time": "2024-11-18 14:20:00",
        "end_time": "2024-11-18 16:20:00",
        "description": "新しい技術のトレーニング",
        "color": "#3498DB"
    },
    {
        "title": "セミナー",
        "start_time": "2024-11-20 13:00:00",
        "end_time": "2024-11-20 15:30:00",
        "description": "業界セミナーへの参加",
        "color": "#E74C3C"
    },
    {
        "title": "ブレインストーム",
        "start_time": "2024-11-22 10:00:00",
        "end_time": "2024-11-22 12:00:00",
        "description": "新しいプロジェクトのアイデア出し",
        "color": "#2ECC71"
    },
    {
        "title": "レビュー",
        "start_time": "2024-11-24 11:00:00",
        "end_time": "2024-11-24 12:00:00",
        "description": "過去の成果物のレビュー",
        "color": "#9B59B6"
    },
    {
        "title": "会議",
        "start_time": "2024-11-26 14:30:00",
        "end_time": "2024-11-26 16:30:00",
        "description": "次期計画の策定会議",
        "color": "#F39C12"
    },
    {
        "title": "ネットワーキング",
        "start_time": "2024-11-28 18:00:00",
        "end_time": "2024-11-28 20:00:00",
        "description": "業界関係者との交流会",
        "color": "#2980B9"
    },
    {
        "title": "トレーニング",
        "start_time": "2024-12-01 09:00:00",
        "end_time": "2024-12-01 11:30:00",
        "description": "新しいツールの習得",
        "color": "#C0392B"
    },
    {
        "title": "プレゼンテーション",
        "start_time": "2024-12-03 15:00:00",
        "end_time": "2024-12-03 17:00:00",
        "description": "新しい製品の紹介",
        "color": "#1ABC9C"
    },
    {
        "title": "ブレイクアウトセッション",
        "start_time": "2024-12-05 13:30:00",
        "end_time": "2024-12-05 15:00:00",
        "description": "グループディスカッション",
        "color": "#8E44AD"
    },
    {
        "title": "カジュアルミーティング",
        "start_time": "2024-12-07 17:00:00",
        "end_time": "2024-12-07 18:00:00",
        "description": "チームメンバーとの情報交換",
        "color": "#34495E"
    },
    {
        "title": "プロジェクト発表",
        "start_time": "2024-12-09 11:00:00",
        "end_time": "2024-12-09 12:30:00",
        "description": "成果物の発表会",
        "color": "#E67E22"
    },
    {
        "title": "ワークショップ",
        "start_time": "2024-12-11 09:30:00",
        "end_time": "2024-12-11 11:30:00",
        "description": "新しいフレームワークの学習",
        "color": "#16A085"
    },
    {
        "title": "戦略会議",
        "start_time": "2024-12-13 14:00:00",
        "end_time": "2024-12-13 16:00:00",
        "description": "来期戦略の策定",
        "color": "#27AE60"
    },
    {
        "title": "ランチミーティング",
        "start_time": "2024-12-15 12:00:00",
        "end_time": "2024-12-15 13:00:00",
        "description": "クライアントとのランチ",
        "color": "#2C3E50"
    },
    {
        "title": "レビューセッション",
        "start_time": "2024-12-17 10:30:00",
        "end_time": "2024-12-17 12:00:00",
        "description": "スプリントレビュー",
        "color": "#D35400"
    },
    {
        "title": "トレーニング",
        "start_time": "2024-12-19 09:00:00",
        "end_time": "2024-12-19 11:00:00",
        "description": "新しいマーケティング手法",
        "color": "#7F8C8D"
    },
    {
        "title": "ネットワーキング",
        "start_time": "2024-12-21 18:30:00",
        "end_time": "2024-12-21 20:30:00",
        "description": "業界交流会",
        "color": "#9B59B6"
    },
    {
        "title": "チームビルディング",
        "start_time": "2024-12-23 14:00:00",
        "end_time": "2024-12-23 16:00:00",
        "description": "アクティビティを通じたチーム強化",
        "color": "#34495E"
    },
    {
        "title": "プレゼンテーション",
        "start_time": "2024-12-25 15:00:00",
        "end_time": "2024-12-25 16:30:00",
        "description": "プロジェクト進捗報告",
        "color": "#2980B9"
    },
    {
        "title": "会議",
        "start_time": "2024-12-27 09:00:00",
        "end_time": "2024-12-27 10:30:00",
        "description": "経営層とのミーティング",
        "color": "#E74C3C"
    },
    {
        "title": "カジュアルディスカッション",
        "start_time": "2024-12-29 13:00:00",
        "end_time": "2024-12-29 14:00:00",
        "description": "リラックスした雰囲気での議論",
        "color": "#16A085"
    },
    {
        "title": "新年準備",
        "start_time": "2025-01-02 10:00:00",
        "end_time": "2025-01-02 12:00:00",
        "description": "新年の計画を立てる",
        "color": "#F1C40F"
    },
    {
        "title": "フォローアップ",
        "start_time": "2025-01-03 14:00:00",
        "end_time": "2025-01-03 15:30:00",
        "description": "クライアントからのフィードバック",
        "color": "#3498DB"
    },
    {
        "title": "会議",
        "start_time": "2024-12-07 09:00:00",
        "end_time": "2024-12-07 10:30:00",
        "description": "プロジェクト進捗確認",
        "color": "#F1C40F"
    },
    {
        "title": "ワークショップ",
        "start_time": "2024-12-07 14:00:00",
        "end_time": "2024-12-07 16:00:00",
        "description": "新しい技術のトレーニング",
        "color": "#3498DB"
    },
    {
        "title": "セミナー",
        "start_time": "2024-12-08 11:00:00",
        "end_time": "2024-12-08 12:30:00",
        "description": "業界の最新動向を学ぶ",
        "color": "#E74C3C"
    },
    {
        "title": "ランチミーティング",
        "start_time": "2024-12-08 12:00:00",
        "end_time": "2024-12-08 13:00:00",
        "description": "クライアントとのミーティング",
        "color": "#2ECC71"
    },
    {
        "title": "レビュー",
        "start_time": "2024-12-09 10:00:00",
        "end_time": "2024-12-09 11:30:00",
        "description": "成果物のレビュー",
        "color": "#9B59B6"
    },
    {
        "title": "トレーニング",
        "start_time": "2024-12-09 15:00:00",
        "end_time": "2024-12-09 17:00:00",
        "description": "新しいツールの使い方を学ぶ",
        "color": "#F39C12"
    },
    {
        "title": "ネットワーキング",
        "start_time": "2024-12-10 18:00:00",
        "end_time": "2024-12-10 20:00:00",
        "description": "業界の関係者と交流する",
        "color": "#2980B9"
    },
    {
        "title": "チームミーティング",
        "start_time": "2024-12-10 09:00:00",
        "end_time": "2024-12-10 10:00:00",
        "description": "チームの状況共有",
        "color": "#C0392B"
    },
    {
        "title": "プレゼンテーション",
        "start_time": "2024-12-11 13:30:00",
        "end_time": "2024-12-11 15:00:00",
        "description": "新しいアイデアの発表",
        "color": "#1ABC9C"
    },
    {
        "title": "戦略会議",
        "start_time": "2024-12-11 10:00:00",
        "end_time": "2024-12-11 12:00:00",
        "description": "来年の戦略を検討",
        "color": "#8E44AD"
    },
    {
        "title": "ブレインストーミング",
        "start_time": "2024-12-12 14:30:00",
        "end_time": "2024-12-12 16:30:00",
        "description": "新プロジェクトのアイデア出し",
        "color": "#34495E"
    },
    {
        "title": "ディスカッション",
        "start_time": "2024-12-12 11:00:00",
        "end_time": "2024-12-12 12:30:00",
        "description": "部門間の連携を議論",
        "color": "#E67E22"
    },
    {
        "title": "タスクレビュー",
        "start_time": "2024-12-13 09:30:00",
        "end_time": "2024-12-13 11:00:00",
        "description": "スプリントの成果を確認",
        "color": "#16A085"
    },
    {
        "title": "ワークショップ",
        "start_time": "2024-12-13 13:00:00",
        "end_time": "2024-12-13 15:30:00",
        "description": "新しいマーケティング手法の学習",
        "color": "#27AE60"
    },
    {
        "title": "会議",
        "start_time": "2024-12-14 10:00:00",
        "end_time": "2024-12-14 11:00:00",
        "description": "週次ミーティング",
        "color": "#2C3E50"
    },
    {
        "title": "プレゼン準備",
        "start_time": "2024-12-14 15:00:00",
        "end_time": "2024-12-14 16:00:00",
        "description": "来週のプレゼン準備",
        "color": "#D35400"
    },
    {
        "title": "フォローアップ",
        "start_time": "2024-12-15 14:00:00",
        "end_time": "2024-12-15 15:00:00",
        "description": "クライアントからのフィードバック確認",
        "color": "#7F8C8D"
    },
    {
        "title": "会議",
        "start_time": "2024-12-15 09:00:00",
        "end_time": "2024-12-15 10:30:00",
        "description": "重要案件の議論",
        "color": "#9B59B6"
    },
    {
        "title": "ランチミーティング",
        "start_time": "2024-12-13 12:00:00",
        "end_time": "2024-12-13 13:00:00",
        "description": "部門リーダーとのランチ",
        "color": "#2980B9"
    },
    {
        "title": "ネットワーキング",
        "start_time": "2024-12-14 18:00:00",
        "end_time": "2024-12-14 20:00:00",
        "description": "新しいコネクションを作る",
        "color": "#34495E"
    },
    {
        "title": "トレーニング",
        "start_time": "2024-12-12 09:00:00",
        "end_time": "2024-12-12 11:00:00",
        "description": "最新技術の学習",
        "color": "#C0392B"
    },
    {
        "title": "セッション",
        "start_time": "2024-12-11 16:00:00",
        "end_time": "2024-12-11 17:00:00",
        "description": "短時間の集中セッション",
        "color": "#F39C12"
    },
    {
        "title": "レビュー会",
        "start_time": "2024-12-08 16:30:00",
        "end_time": "2024-12-08 17:30:00",
        "description": "進行中のプロジェクトレビュー",
        "color": "#E74C3C"
    },
    {
        "title": "ブレインストーミング",
        "start_time": "2024-12-09 13:00:00",
        "end_time": "2024-12-09 14:30:00",
        "description": "新しいコンセプトの議論",
        "color": "#16A085"
    },
    {
        "title": "休憩",
        "start_time": "2024-12-14 10:30:00",
        "end_time": "2024-12-14 11:00:00",
        "description": "リフレッシュのための短時間の休憩",
        "color": "#27AE60"
    },
    {
        "title": "集中作業",
        "start_time": "2024-12-10 11:00:00",
        "end_time": "2024-12-10 12:30:00",
        "description": "重要タスクに集中する時間",
        "color": "#1ABC9C"
    },
    {
        "title": "セミナー",
        "start_time": "2024-12-13 10:00:00",
        "end_time": "2024-12-13 11:30:00",
        "description": "業界の最新情報を収集",
        "color": "#E67E22"
    },
    {
        "title": "戦略ミーティング",
        "start_time": "2024-12-07 15:30:00",
        "end_time": "2024-12-07 17:00:00",
        "description": "プロジェクトの方向性を検討",
        "color": "#8E44AD"
    },
    {
        "title": "チェックイン",
        "start_time": "2024-12-15 09:30:00",
        "end_time": "2024-12-15 10:00:00",
        "description": "週の終わりに状況確認",
        "color": "#34495E"
    },
    {
        "title": "プロジェクト会議",
        "start_time": "2024-12-07 09:00:00",
        "end_time": "2024-12-07 11:00:00",
        "description": "プロジェクトの進捗を確認",
        "color": "#F1C40F"
    },
    {
        "title": "デザインレビュー",
        "start_time": "2024-12-07 10:30:00",
        "end_time": "2024-12-07 12:00:00",
        "description": "デザインの最終チェック",
        "color": "#E74C3C"
    },
    {
        "title": "技術トレーニング",
        "start_time": "2024-12-08 09:00:00",
        "end_time": "2024-12-08 11:00:00",
        "description": "新しい技術の学習",
        "color": "#3498DB"
    },
    {
        "title": "ランチミーティング",
        "start_time": "2024-12-08 10:30:00",
        "end_time": "2024-12-08 12:00:00",
        "description": "クライアントとのミーティング",
        "color": "#2ECC71"
    },
    {
        "title": "セミナー",
        "start_time": "2024-12-09 14:00:00",
        "end_time": "2024-12-09 16:00:00",
        "description": "業界の最新情報を学ぶ",
        "color": "#9B59B6"
    },
    {
        "title": "戦略会議",
        "start_time": "2024-12-09 15:30:00",
        "end_time": "2024-12-09 17:30:00",
        "description": "来年の戦略を立てる",
        "color": "#F39C12"
    },
    {
        "title": "ネットワーキング",
        "start_time": "2024-12-10 18:00:00",
        "end_time": "2024-12-10 20:00:00",
        "description": "業界関係者との交流",
        "color": "#2980B9"
    },
    {
        "title": "集中作業",
        "start_time": "2024-12-10 19:00:00",
        "end_time": "2024-12-10 21:00:00",
        "description": "重要なタスクを完了させる",
        "color": "#34495E"
    },
    {
        "title": "プレゼン準備",
        "start_time": "2024-12-12 10:00:00",
        "end_time": "2024-12-12 12:00:00",
        "description": "重要なプレゼンの準備",
        "color": "#16A085"
    },
    {
        "title": "ディスカッション",
        "start_time": "2024-12-12 11:00:00",
        "end_time": "2024-12-12 13:00:00",
        "description": "チーム内での議論",
        "color": "#8E44AD"
    },
    {
        "title": "ディスカッション",
        "start_time": "2024-12-12 20:00:00",
        "end_time": "2024-12-13 13:00:00",
        "description": "チーム内での議論",
        "color": "#8E44AD"
    }
];
export {acts};