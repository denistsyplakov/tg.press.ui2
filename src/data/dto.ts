
export interface GridResult{
  list: ChatInfo[];
  total: number;
}

export interface ChatInfo{
  "id": number,
  "title": string,
  "member_count": number,
  "user_name": string,
  "message_count": number,
  "view_count": number,
  "forward_count": number,
  "reactions_count": number,
  "reply_count": number,
  "median_view_count": number,
  "median_forward_count": number,
  "median_reactions_count": number,
  "median_reply_count": number
}
