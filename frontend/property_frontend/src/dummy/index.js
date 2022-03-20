const dummy = {
  payPeriods: [
    { name: "Daily", value: "DAILY" },
    { name: "Weekly", value: "WEEKLY" },
    { name: "Monthly", value: "MONTHLY" },
    { name: "Annual", value: "ANNUAL" },
    { name: "Bi-Annual", value: "BI-ANNUAL" },
    { name: "5 years", value: "FIVE-YEARS" },
    { name: "10 years", value: "TEN-YEARS" },
    { name: "One time", value: "ONE-TIME" },
  ],
  listingCategories: [
    { name: "Rent", value: "RENT" },
    { name: "Lease", value: "LEASE" },
    { name: "Sale", value: "SALE" },
    { name: "Let", value: "LET" },
  ],
  listingTypes: [
    { name: "House", value: "HOUSE" },
    { name: "Apartment", value: "APARTMENT" },
    { name: "Store", value: "STORE" },
    { name: "Land", value: "LAND" },
    { name: "Hotel", value: "HOSTEL" },
    { name: "Hostel", value: "HOSTEL" },
  ],

  states: {
    generalForm: {
      category: "",
      type: "",
      title: "",
      description: "",
      price: "",
      payPeriod: "",
    },
  },
};

export default dummy;
