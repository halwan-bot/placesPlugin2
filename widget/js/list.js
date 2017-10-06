let listView = {
    addPlaces: (places) => {
        var defaultImage = 'https://czi3m2qn.cloudimg.io/s/crop/342x193/https://pluginserver.buildfire.com/styles/media/holder-16x9.png';

        let listContainer = document.getElementById("listView");

        places.forEach((place, index) => {
            let listItem = document.createElement('div');

            listItem.onclick = e => {
                e.preventDefault();

                app.selectedPlace = place;
                router.navigate(app.settings.state.detail);
            };

            listItem.style.cursor = 'pointer';

            //Add Image
            let image = document.createElement('img');
            image.src = (place.src)? place.src : defaultImage;

            let title = document.createElement('div');
            title.innerHTML = place.title;
            title.style.display = 'inline-block';
            title.style.paddingLeft = '5px';

            let address = document.createElement('div');
            address.innerHTML = place.address;

            let distance = document.createElement('div');
            distance.setAttribute('id', `distance${index}`);
            distance.innerHTML = (place.distance) ? place.distance : '...';
            distance.style.display = 'inline-block';
            distance.style.float = 'right';
            distance.style.paddingRight = '5px';

            listItem.appendChild(image);
            listItem.appendChild(title);
            listItem.appendChild(distance);
            //listItem.appendChild(address);

            listContainer.appendChild(listItem);
        });
    },
    initList: (places) => {
        //Add filter control
        let filterDiv = document.getElementById('filter');
        new FilterControl(filterDiv);

        listView.addPlaces(places);
    },
    updateList: (newPlaces) => {
        console.error('update list');
        listView.addPlaces(newPlaces);
    },
    updateDistances: (places) => {
        places.forEach((place, index) => {
            if(place.distance)
                document.getElementById(`distance${index}`).innerHTML = place.distance;
        });
    }
};