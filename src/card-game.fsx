// https://github.com/swlaschin/dotnetconf2021/blob/3713cb20a1b006426ab94cf99acb92090ed1a394/types.fsx#L170-L188

// ===================================
// Domain modeling with types
// ===================================

// nouns
type Suit = Club | Diamond | Spade | Heart
type Rank = Two | Three | Four | Five | Six | Seven | Eight
            | Nine | Ten | Jack | Queen | King
type Card = {Suit:Suit; Rank:Rank}

type Hand = Card list
type Deck = Card list

type Player = {Name:string; Hand:Hand}
type Game = {Deck:Deck; Players: Player list}

// actions
type Deal = Deck -> (Deck * Card)        // X*Y means a pair, a tuple
type PickupCard = (Hand * Card) -> Hand
