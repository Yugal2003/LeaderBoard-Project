const PlayersList = [] // this object store some playerdata indivisially

        function addPlayer (event){

            event.preventDefault() // without refresh the page we have use preventdefault...

            const playerList = document.getElementById('player_list')

            const firstName = document.getElementById('firstname').value
            const lastName = document.getElementById('lastname').value
            const country = document.getElementById('country').value
            const score = document.getElementById('score').value

            const playerData = { name: firstName + " " + lastName, 
                country: country,
                score: Number(score)
            }

            PlayersList.push(playerData);
            PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

            playerList.innerHTML = ''
            for (let index = 0; index < PlayersList.length; index++) {
                const player = PlayersList[index];

                const li = document.createElement('li')
                const nameContent = document.createElement('span')
                const countryContent = document.createElement('span')
                const curentScore = document.createElement('span')

                
                const deleteButton = document.createElement('button')
                const increaseScore = document.createElement('button')
                const decreaseScore = document.createElement('button')

                deleteButton.innerHTML = '<span class="glyphicon">&#xe020;</span>';
                increaseScore.innerText = '+'
                decreaseScore.innerText = '-'
                deleteButton.setAttribute('onclick',`deleteButtonHandler(${index})`)
                increaseScore.setAttribute('onclick', `increaseScoreHandler(${index})`)
                decreaseScore.setAttribute('onclick', `decreaseScoreHandler(${index})`)

                
                curentScore.innerText = player.score
                countryContent.innerText = player.country
                nameContent.innerText = player.name

                li.className = 'nameContent';
                countryContent.className = 'countryContent';
                curentScore.className = 'curentScore';
                deleteButton.className = "deleteButton";
                increaseScore.className = 'increaseScore';
                decreaseScore.className = 'decreaseScore';

                li.append(nameContent, countryContent, curentScore, increaseScore, decreaseScore,deleteButton)
                playerList.append(li)
                
            }

        }

        function refreshList () {

            const playerList = document.getElementById('player_list')
            PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

            playerList.innerHTML = ''
            for (let index = 0; index < PlayersList.length; index++) {
                const player = PlayersList[index];

                const li = document.createElement('li')
                const nameContent = document.createElement('span')
                const countryContent = document.createElement('span')
                const curentScore = document.createElement('span')

                
                const deleteButton = document.createElement('button')
                const increaseScore = document.createElement('button')
                const decreaseScore = document.createElement('button')

                deleteButton.innerHTML = '<span class="glyphicon">&#xe020;</span>'
                increaseScore.innerText = '+'
                decreaseScore.innerText = '-'
                deleteButton.setAttribute('onclick',`deleteButtonHandler(${index})`)
                increaseScore.setAttribute('onclick', `increaseScoreHandler(${index})`)
                decreaseScore.setAttribute('onclick', `decreaseScoreHandler(${index})`)

                
                curentScore.innerText = player.score
                countryContent.innerText = player.country
                nameContent.innerText = player.name

                li.className = 'nameContent';
                countryContent.className = 'countryContent';
                curentScore.className = 'curentScore';
                deleteButton.className = "deleteButton";
                increaseScore.className = 'increaseScore';
                decreaseScore.className = 'decreaseScore';

                li.append(nameContent, countryContent, curentScore, increaseScore, decreaseScore,deleteButton)
                playerList.append(li)
                
            }
        }

        function increaseScoreHandler (index) {

            PlayersList[index].score += 5
            refreshList()
        }


        function decreaseScoreHandler (index) {
            PlayersList[index].score -= 5
            refreshList()
        }

        
        function  deleteButtonHandler(idx) {
            PlayersList.splice(idx,1);
            refreshList();
        }