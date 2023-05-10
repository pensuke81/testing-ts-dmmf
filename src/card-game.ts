/** カードゲーム */
namespace CardGame {
  /** 絵柄 */
  export type Suit = "Club" | "Diamond" | "Spade" | "Heart";

  // prettier-ignore
  /** 数字 */
  export type Rank =
    | "Ace" | "Two" | "Three" | "Four" | "Five" | "Six" | "Seven" | "Eight" | "Nine" | "Ten"
    | "Jack" | "Queen" | "King";

  /** カードは絵柄と数字で構成される */
  export type Card = [Suit, Rank];

  /** 手札 */
  export type Hand = Card[];

  /** デッキ */
  export type Deck = Card[];

  /** プレイヤーは手札を持つ */
  export type Player = { Name: string; Hand: Hand };

  /** ゲームはデッキとプレイヤー複数で行う */
  export type Game = { Deck: Deck; Players: Player[] };

  // actions
  /** カードを配る */
  export type Deal = (deck: Deck) => [Deck, Card];
  /** カードを手札に取る */
  export type PickupCard = (hand: Hand, card: Card) => Hand;
}
