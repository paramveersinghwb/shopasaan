const initialState = {
  shopsData: [
    {
      entity_id: "1",
      seller_id: "1",
      company_locality: "SCO 12, Sector XXX, chandigarh",
      logo_pic: null,
      shop_title: "Ram Lal & Sons Kirana",
      country_pic: null,
      category: "grocery"
    },
    {
      entity_id: "2",
      seller_id: "2",
      company_locality: "Verka Booth, Mohali",
      logo_pic: null,
      shop_title: "Verka Booth Owner",
      country_pic: null,
      category: "grocery"
    }
  ]
};

const HomeReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default HomeReducer;
