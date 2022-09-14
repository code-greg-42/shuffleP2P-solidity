const address = '0x17B803Da3d185053AF0E5006a8D7398019f0ded3';

const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

async function main() {
    const contract = await hre.ethers.getContractAt("ShuffleDao", address);
    const cardHashes = await contract.getCardHashes();
    console.log(cardHashes);
    const cards = [];
    for (const hash of cardHashes) {
    const cardHash = hash.slice(2);
    const suit = getSuit(cardHash);
    let cardIndex = getCard(cardHash);
    let card = cardValues[cardIndex];
    cards.push(`${card} of ${suit}`)
    }
    console.log(cards);
}

function getSuit(hashInput) {
    let hash = hashInput.toLowerCase();
    if (['0', '1', '2', '3'].includes(hash[0])) {
        return 'spades';
    } else if (['4', '5', '6', '7'].includes(hash[0])) {
        return 'diamonds';
    } else if (['8', '9', 'a', 'b'].includes(hash[0])) {
        return 'hearts';
    } else {
        return 'clubs';
    }
}

function getCard(hashInput) {
    let hash = hashInput.slice(1).toLowerCase();
    let hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c'];
    for (const char of hash) {
        const index = hexValues.indexOf(char);
        if (index !== -1) {
            return index;
        };
    }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });