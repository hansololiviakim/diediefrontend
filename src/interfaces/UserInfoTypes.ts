export interface ChartDataType {
  [key: string]: number
}

export interface ChartProps {
  chartData: {
    [key: string]: number
  }
  label: string
}

export interface IngameType {
  championId: number
  championImageUrl: string
  summonerId: string
  summonerName: string
  teamId: number
  tierInfo: {
    leagueId: string
    queueType: string
    rank: string
    tier: string
  }
}