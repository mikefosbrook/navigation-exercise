// Taken from https://web-router-proxy-prod.ii.co.uk/static-data/secure-menu-items

export const data = [
  {
    rootItemDisplayText: "Cash & transfers",
    items: [
      {
        menu: [
          {
            destination: "web-root",
            internal: true,
            href: "/secure/cash/add-cash",
            title: "Add cash",
          },
          {
            destination: "web-root",
            internal: true,
            href: "/secure/cash/add-card",
            title: "Add or update card",
          },
          {
            destination: "web-root",
            internal: true,
            href: "/secure/cash",
            title: "Withdraw or transfer cash",
          },
          {
            destination: "webbroker",
            title: "Bank account",
            href: "/listPayees.sp",
          },
          {
            destination: "webbroker",
            title: "Convert currency",
            href: "/app.sp#/fx",
          },
          {
            destination: "web-root",
            internal: true,
            href: "/secure/cash/regular-payments",
            title: "Direct Debit",
          },
          {
            destination: "webbroker",
            title: "manage payments",
            href: "/listPayments.sp",
          },
        ],
        menuTitle: "Cash",
      },
      {
        menu: [
          {
            destination: "web-root",
            internal: true,
            href: "/secure/transfers",
            title: "Transfer in",
          },
          {
            destination: "webbroker",
            title: "Bed & ISA",
            href: "/displayBedAndIsa.sp",
          },
        ],
        menuTitle: "Transfers",
      },
    ],
    rootItemOrder: 2,
    rootItemId: "cashMenu",
  },
  {
    rootItemDisplayText: "account",
    items: [
      {
        menu: [
          {
            title: "secure messages",
            internal: true,
            href: "/secure/messages",
          },
          {
            title: "personal details & preferences",
            href: "/app.sp#/admin",
          },
          {
            title: "document history",
            href: "/app.sp#/documents?documentType=ContractNotes",
          },
          {
            title: "useful forms",
            href: "/app.sp#/forms",
          },
          {
            title: "add an account",
            internal: true,
            href: "/secure/add-an-account",
          },
          {
            title: "link your accounts",
            href: "/accounts/linking/view.sp",
          },
          {
            title: "add/update card",
            href: "/app.sp#/new-add-card-check",
          },
          {
            title: "recommend ii - earn £200",
            external: true,
            href: "https://www.ii.co.uk/ii-for-friends/customer",
          },
          {
            title: "Friends and Family",
            internal: true,
            href: "/secure/subscription/friends-and-family",
          },
          {
            title: "Subscription and billing",
            internal: true,
            href: "/secure/subscription",
          },
          {
            title: "close account",
            href: "/app.sp#/close-my-accounts",
          },
        ],
        menuTitle: "account",
      },
    ],
    rootItemOrder: -1,
    rootItemId: "DEPRECATED__accountMenu",
  },
  {
    rootItemDisplayText: "Research",
    internal: true,
    path: "/secure/research",
    items: [],
    rootItemOrder: 3,
    rootItemId: "researchHub",
  },
  {
    rootItemDisplayText: "sipp",
    items: [
      {
        menu: [
          {
            title: "contributions & annual allowance",
            href: "/app.sp#/sipp-annual-allowance",
          },
          {
            title: "contributing to your SIPP",
            href: "/app.sp#/sipp-annual-allowance#sipp_contributions_method",
          },
          {
            title: "transfers",
            href: "/app.sp#/transfers/new",
          },
        ],
        menuIcon: "FaExpandAlt",
        menuTitle: "contributions & transfers",
      },
      {
        menu: [
          {
            title: "Taking benefits / withdrawing money",
            internal: true,
            href: "/secure/sipp-management",
          },
          {
            title: "Your SIPP pots",
            internal: true,
            href: "/secure/sipp-management#sipp-pots",
          },
          {
            title: "Tax code",
            internal: true,
            href: "/secure/sipp-management#your-tax-code",
          },
          {
            title: "Lifetime allowance",
            internal: true,
            href: "/secure/sipp-management#lifetime-allowance",
          },
          {
            title: "Investment Pathways",
            internal: true,
            href: "/secure/sipp-management#investment-pathways",
          },
          {
            title: "Expression of wishes",
            href: "/app.sp#/sipp-expression-of-wishes",
          },
        ],
        menuIcon: "FaKey",
        menuTitle: "benefits",
      },
    ],
    rootItemOrder: 4,
    rootItemId: "DEPRECATED__sippMenu",
  },
  {
    rootItemDisplayText: "Account",
    items: [
      {
        menu: [
          {
            title: "Add an account",
            internal: "standalone",
            href: "/secure/add-an-account",
          },
          {
            title: "Subscription & billing",
            internal: true,
            href: "/secure/subscription",
          },
          {
            title: "Close account",
            href: "/app.sp#/close-my-accounts",
          },
        ],
        menuTitle: "Account",
      },
      {
        menu: [
          {
            title: "Secure messages",
            internal: "standalone",
            href: "/secure/messages",
          },
          {
            title: "Personal details & preferences",
            href: "/app.sp#/admin-scv",
          },
          {
            title: "Document history",
            href: "/app.sp#/documents?documentType=ContractNotes",
          },
          {
            title: "Useful forms",
            href: "/app.sp#/forms",
          },
        ],
        menuTitle: "Admin",
      },
    ],
    rootItemOrder: -1,
    rootItemId: "accountMenu",
  },
  {
    rootItemDisplayText: "research",
    items: [
      {
        menu: [
          {
            title: "shares",
            internal: true,
            href: "/secure/screener",
          },
          {
            title: "funds",
            href: "/select-list/funds.sp",
          },
          {
            title: "investment trusts",
            href: "/research/investmentTrustQuickrank/view.sp",
          },
          {
            title: "ETFs",
            href: "/select-list/etfs.sp",
          },
          {
            title: "IPOs",
            href: "/app.sp#/ipo",
          },
          {
            title: "quick start funds",
            external: true,
            href: "http://www.ii.co.uk/quick-start-funds",
          },
          {
            title: "ii super 60",
            external: true,
            href: "http://www.ii.co.uk/ii-super-60",
          },
          {
            title: "ii ACE 40",
            external: true,
            href: "https://www.ii.co.uk/ii-ace",
          },
          {
            title: "model portfolios",
            external: true,
            href: "https://www.ii.co.uk/model-portfolios",
          },
        ],
        menuIcon: "FaChartLine",
        menuTitle: "find an investment",
      },
      {
        secondaryMenu: {
          menu: [
            {
              title: "ii news hub",
              external: true,
              href: "https://www.ii.co.uk/stock-market-news",
            },
          ],
          menuIcon: "FaNews",
          menuTitle: "news",
        },
        menu: [
          {
            title: "UK summary",
            href: "/research/marketNews/view.sp",
          },
          {
            title: "UK company research",
            href: "/research/companyResearch/view.sp",
          },
          {
            title: "UK prices & indices",
            href: "/research/pricesAndIndices/view.sp",
          },
          {
            title: "international markets",
            href: "/research/international/view.sp",
          },
          {
            title: "technical insights",
            href: "/app.sp#/research/technical-insights",
          },
        ],
        menuIcon: "FaRegChartBar",
        menuTitle: "markets",
      },
    ],
    rootItemOrder: 3,
    rootItemId: "DEPRECATED__researchMenu",
  },
  {
    rootItemDisplayText: "cash & transfers",
    items: [
      {
        menu: [
          {
            title: "add cash",
            href: "/app.sp#/new-add-cash-landing",
          },
          {
            title: "withdraw/transfer cash",
            href: "/moneyOut2.sp",
          },
          {
            title: "convert currency",
            href: "/app.sp#/fx",
          },
          {
            title: "manage payments",
            href: "/listPayments.sp",
          },
          {
            title: "bank account",
            href: "/listPayees.sp",
          },
          {
            title: "direct debit",
            internal: true,
            href: "/secure/cash-transfers/regular-payments",
          },
        ],
        menuIcon: "FaMoneyBill",
        menuTitle: "cash",
      },
      {
        menu: [
          {
            title: "transfer in",
            href: "/app.sp#/transfers/new",
          },
          {
            title: "bed & ISA",
            href: "/displayBedAndIsa.sp",
          },
        ],
        menuTitle: "transfers",
      },
    ],
    rootItemOrder: 2,
    rootItemId: "DEPRECATED__cashMenu",
  },
  {
    rootItemDisplayText: "trading",
    items: [
      {
        menu: [
          {
            title: "trade now",
            href: "/app.sp#/place-order",
          },
          {
            title: "free regular investing",
            href: "/app.sp#/regularInvestments/check",
          },
          {
            title: "level 2 / quotestream",
            href: "/app.sp#/marketdata-package",
          },
        ],
        menuIcon: "FaChartLine",
        menuTitle: "trade",
      },
      {
        menu: [
          {
            title: "order list",
            href: "/orderlist.sp",
          },
          {
            title: "closing deals",
            href: "/app.sp#/closing-deals",
          },
          {
            title: "settlements calendar",
            href: "/tradingCalendar.sp",
          },
        ],
        menuIcon: "FaListAlt",
        menuTitle: "orders",
      },
    ],
    rootItemOrder: 1,
    rootItemId: "DEPRECATED__tradingMenu",
  },
  {
    rootItemDisplayText: "SIPP",
    items: [
      {
        menu: [
          {
            destination: "webbroker",
            title: "Annual Allowance",
            href: "/app.sp#/sipp-annual-allowance",
          },
          {
            destination: "webbroker",
            title: "Contributions",
            href: "/app.sp#/sipp-annual-allowance#sipp_contributions_method",
          },
          {
            destination: "web-root",
            internal: true,
            href: "/secure/transfers",
            title: "Transfers",
          },
          {
            destination: "web-root",
            internal: "standalone",
            href: "/secure/page/selected-growth-option",
            title: "Selected Growth Option",
          },
        ],
        menuTitle: "Contributions",
      },
      {
        menu: [
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management#sipp-pots",
            title: "Your SIPP pots",
          },
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management",
            title: "Withdrawing money",
          },
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management#your-tax-code",
            title: "Tax code",
          },
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management#lifetime-allowance",
            title: "Lifetime allowance",
          },
          {
            destination: "web-root",
            title: "Expression of wishes",
            href: "/app.sp#/sipp-expression-of-wishes",
          },
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management#investment-pathways",
            title: "Investment Pathways",
          },
          {
            applicableAccountTypes: ["SIPP"],
            destination: "web-root",
            internal: true,
            href: "/secure/sipp-management/retirement-age",
            title: "Retirement Age",
          },
        ],
        menuTitle: "Benefits",
      },
    ],
    rootItemOrder: 4,
    rootItemId: "sippMenu",
  },
  {
    rootItemDisplayText: "Portfolio",
    items: [
      {
        menu: [
          {
            title: "Portfolio overview",
            internal: true,
            href: "/secure",
          },
          {
            title: "Investments",
            internal: true,
            href: "/secure/investments",
          },
          {
            title: "Orders",
            internal: true,
            href: "/secure/investments/orders",
          },
          {
            title: "Transaction history",
            internal: true,
            href: "/secure/transactions",
          },
          {
            title: "Document history",
            href: "/app.sp#/documents?documentType=ContractNotes",
          },
        ],
        menuTitle: "Account",
      },
      {
        menu: [
          {
            title: "Free regular investing",
            href: "/app.sp#/regularInvestments/check",
          },
          {
            title: "Dividend reinvestment",
            href: "/displayDripPreferences.sp",
          },
          {
            destination: "web-root",
            badge: "New",
            internal: true,
            href: "/secure/managed-isa",
            title: "Managed ISA",
          },
          {
            title: "Closing deals",
            href: "/app.sp#/closing-deals",
          },
          {
            title: "Settlements calendar",
            href: "/tradingCalendar.sp",
          },
          {
            title: "Level 2 / Quotestream",
            href: "/app.sp#/marketdata-package",
          },
        ],
        menuTitle: "Investing",
      },
      {
        menu: [
          {
            title: "Watchlist",
            href: "/app.sp#/stockwatch?quoteslist=1",
          },
          {
            title: "Price alerts",
            href: "/alerts/view.sp",
          },
          {
            title: "Corporate actions",
            href: "/accounts/corporate-actions/list.sp",
          },
          {
            title: "Voting mailbox",
            href: "/customers/votingrights/view.sp",
          },
        ],
        menuTitle: "Tools",
      },
    ],
    rootItemOrder: 0,
    rootItemId: "portfolioMenu",
  },
  {
    rootItemDisplayText: "portfolio",
    items: [
      {
        menu: [
          {
            title: "overview",
            href: "/app.sp#/account-summary/view",
          },
          {
            title: "investments",
            href: "/app.sp#/portfolio-new/all/view",
          },
          {
            title: "cash balance",
            href: "/app.sp#/account-summary/account",
          },
          {
            title: "transaction history",
            href: "/app.sp#/account-history",
          },
        ],
        menuIcon: "FaBriefcase",
        menuTitle: "views",
      },
      {
        menu: [
          {
            title: "watchlist",
            href: "/app.sp#/stockwatch?quoteslist=1",
          },
          {
            title: "price alerts",
            href: "/alerts/view.sp",
          },
          {
            title: "corporate actions",
            href: "/accounts/corporate-actions/list.sp",
          },
          {
            title: "voting mailbox",
            href: "/customers/votingrights/view.sp",
          },
          {
            title: "dividend reinvestment",
            href: "/displayDripPreferences.sp",
          },
        ],
        menuIcon: "FaCogs",
        menuTitle: "tools",
      },
    ],
    rootItemOrder: 0,
    rootItemId: "DEPRECATED__portfolioMenu",
  },
  {
    rootItemDisplayText: "offers",
    items: [
      {
        menu: [
          {
            title: "offers",
            external: true,
            href: "http://www.ii.co.uk/special-offers",
          },
        ],
        menuTitle: "offers",
      },
    ],
    rootItemOrder: -1,
    rootItemId: "DEPRECATED__offersMenu",
  },
  {
    rootItemDisplayText: "sipp",
    items: [
      {
        menu: [
          {
            title: "Add a new sipp account",
            internal: "standalone",
            href: "/secure/add-an-account",
          },
        ],
        menuIcon: "FaPlus",
        menuTitle: "Add an account",
      },
    ],
    rootItemOrder: 4,
    rootItemId: "noSippMenu",
  },
  {
    rootItemDisplayText: "sipp",
    items: [
      {
        menu: [
          {
            title: "add a new sipp account",
            internal: true,
            href: "/secure/add-an-account",
          },
        ],
        menuIcon: "FaPlus",
        menuTitle: "add an account",
      },
    ],
    rootItemOrder: 4,
    rootItemId: "DEPRECATED__noSippMenu",
  },
  {
    rootItemDisplayText: "Offers",
    items: [
      {
        menu: [
          {
            title: "Recommend ii - earn £200",
            external: true,
            href: "https://www.ii.co.uk/ii-for-friends/customer",
          },
          {
            title: "Friends and Family",
            internal: true,
            href: "/secure/subscription/friends-and-family",
          },
          {
            title: "Special Offers",
            external: true,
            href: "http://www.ii.co.uk/special-offers",
          },
        ],
        menuTitle: "Offers",
      },
    ],
    rootItemOrder: -1,
    rootItemId: "offersMenu",
  },
];
