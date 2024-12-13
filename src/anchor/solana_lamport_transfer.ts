export type SolanaLamportTransfer = {
  "version": "0.1.0",
  "name": "solana_lamport_transfer",
  "instructions": [
    {
      "name": "transferLamports",
      "accounts": [
        {
          "name": "from",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferSplTokens",
      "accounts": [
        {
          "name": "from",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fromAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "toAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ]
};

export const IDL: SolanaLamportTransfer = {
  "version": "0.1.0",
  "name": "solana_lamport_transfer",
  "instructions": [
    {
      "name": "transferLamports",
      "accounts": [
        {
          "name": "from",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferSplTokens",
      "accounts": [
        {
          "name": "from",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fromAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "toAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ]
};
