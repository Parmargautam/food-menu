var jsonData = [
  {
    "name": "Vada Pav",
    "submenu": [
      { "type": "Cheese Vada Pav", "rate": "20rs" },
      { "type": "Gujarati Vada Pav", "rate": "25rs" },
      { "type": "Kolhapuri Vada Pav", "rate": "30rs" }
    ]
  },
  {
    "name": "Pizza",
    "submenu": [
      { "type": "Lasagna", "rate": "350rs" },
      { "type": "Jungle House", "rate": "500rs" },
      { "type": "Veggies", "rate": "450rs" }
    ]
  },
  {
    "name": "Pasta",
    "submenu": [
      { "type": "Simple Pasta", "rate": "150rs" },
      { "type": "White Sauce Pasta", "rate": "120rs" },
      { "type": "Red Sauce Pasta", "rate": "170rs" }
    ]
  },
  {
    "name": "Garlic Bread",
    "submenu": [
      { "type": "Cheese Garlic Bread", "rate": "20rs piece" },
      { "type": "Garlic Bread", "rate": "15rs piece" },
      { "type": "Jain Garlic Bread", "rate": "10rs" }
    ]
  },
  {
    "name": "Juices",
    "submenu": [
      { "type": "Blue Lady", "rate": "50rs" },
      { "type": "China Town", "rate": "75rs" },
      { "type": "Indian Themes", "rate": "90rs" }
    ]
  },
  {
    "name": "Lunch",
    "submenu": [
      {
        "type": "Gujarati Lunch",
        "rate": "300rs thali",
        "quantity": [
          { "roti": "1 Piece" },
          { "sabji": "1 round" },
          { "dal bhat": "1 round" },
          { "mishtan": "2 gulab jamun" }
        ]
      },
      {
        "type": "Punjabi Lunch",
        "rate": "350rs thali",
        "quantity": [
          { "roti": "1 Piece" },
          { "sabji": "1 round" },
          { "dal bhat": "1 round" },
          { "mishtan": "2 gulab jamun" }
        ]
      },
      {
        "type": "Maharashtrian Lunch",
        "rate": "300rs thali",
        "quantity": [
          { "roti": "1 Piece" },
          { "sabji": "1 round" },
          { "dal bhat": "1 round" },
          { "mishtan": "2 gulab jamun" }
        ]
      }
    ]
  }
];

function populateDropdown() {
  var dropdownContent = document.getElementById('dropdownContent');

  if (!dropdownContent) {
    console.error("Dropdown content element not found");
    return;
  }

  dropdownContent.innerHTML = '';

  jsonData.forEach(function (category) {
    var categoryItem = document.createElement('div');
    categoryItem.className = 'dropdown-item';
    categoryItem.textContent = category.name;

    categoryItem.addEventListener('click', function () {
      var nestedDropdown = this.querySelector('.nested-dropdown-content');
      if (nestedDropdown) {
        nestedDropdown.style.display = (nestedDropdown.style.display === 'block') ? 'none' : 'block';
      }
    });

    if (category.submenu && category.submenu.length > 0) {
      var nestedDropdown = document.createElement('div');
      nestedDropdown.className = 'nested-dropdown-content';

      category.submenu.forEach(function (item) {
        var submenuItem = document.createElement('div');
        submenuItem.className = 'dropdown-item';
        submenuItem.textContent = item.type + ' - ' + item.rate;

        submenuItem.addEventListener('click', function () {
          alert('Selected: ' + item.type);
        });

        nestedDropdown.appendChild(submenuItem);
      });

      categoryItem.appendChild(nestedDropdown);
    }

    dropdownContent.appendChild(categoryItem);
  });
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdownContent');
  if (!dropdownContent) {
    console.error("Dropdown content element not found");
    return;
  }

  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

  if (dropdownContent.style.display === 'block') {
    populateDropdown();
  }
}

populateDropdown();