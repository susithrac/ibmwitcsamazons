import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Housing',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Travel',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Food',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Products',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Services',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }


pieChartHousing() {
  return [{
    name: 'Electricity',
    y: 61.41,
    sliced: true,
    selected: true
  }, {
    name: 'Natural Gas',
    y: 11.84
  }, {
    name: 'Fuel Oil',
    y: 10.85
  }, {
    name: 'LPG',
    y: 4.67
  }, {
    name: 'Waste',
    y: 4.18
  }, {
    name: 'Water',
    y: 1.64
  }];
}

pieChartTravel() {
  return [{
    name: 'Vehicle',
    y: 61.41,
    sliced: true,
    selected: true
  }, {
    name: 'Bus',
    y: 11.84
  }, {
    name: 'Metro',
    y: 10.85
  }, {
    name: 'Taxi',
    y: 4.67
  }, {
    name: 'Rail',
    y: 4.18
  }, {
    name: 'Flying',
    y: 1.64
  }];
}


pieChartFood() {
  return [{
    name: 'Red Meat',
    y: 61.41,
    sliced: true,
    selected: true
  }, {
    name: 'White Meat',
    y: 11.84
  }, {
    name: 'Dairy',
    y: 10.85
  }, {
    name: 'Cereals',
    y: 4.67
  }, {
    name: 'Vegetables',
    y: 4.18
  }, {
    name: 'Fruit',
    y: 1.64
  }, {
    name: 'Oils',
    y: 1.6
  }, {
    name: 'Snacks',
    y: 1.2
  }, {
    name: 'Drinks',
    y: 2.61
  }];
}

pieChartProducts() {
  return [{
    name: 'Electronics',
    y: 61.41,
    sliced: true,
    selected: true
  }, {
    name: 'Household',
    y: 11.84
  }, {
    name: 'Clothes',
    y: 10.85
  }, {
    name: 'Medical',
    y: 4.67
  }, {
    name: 'Recreational',
    y: 4.18
  }, {
    name: 'Other',
    y: 1.64
  }];
}

pieChartServices() {
  return [{
    name: 'Health',
    y: 61.41,
    sliced: true,
    selected: true
  }, {
    name: 'Finance',
    y: 11.84
  }, {
    name: 'Recreation',
    y: 10.85
  }, {
    name: 'Education',
    y: 4.67
  }, {
    name: 'Communications',
    y: 4.18
  }, {
    name: 'Other',
    y: 1.64
  }];
}

}
