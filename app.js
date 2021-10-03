const endpoint = `https://api.github.com/users/noneedofit/repos`;

const getRepos = (repos) => {
    const newRepos =
        repos
            .sort(
                (a, b) => Number(new Date(a.created_at)) - Number(new Date(b.created_at))
            )
            .slice(0, 5);
            console.log(newRepos);

    const [
        { 
            name: firstRepoName,
            html_url: firstRepoURL,
            description: firstRepoDescription
        },
        {
            name: secondRepoName,
            html_url: secondRepoURL,
            description: secondRepoDescription
        },
        {
            name: thirdRepoName,
            html_url: thirdRepoURL,
            description: thirdRepoDescription
        },
        {
            name: fourthRepoName,
            html_url: fourthRepoURL,
            description: fourthRepoDescription
        },
        {
            name: fifthRepoName,
            html_url: fifthRepoURL,
            description: fifthRepoDescription
        }
    ] = newRepos;



   document.querySelector(".repos").innerHTML = 
   
   `
   <a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${firstRepoURL}">"${firstRepoName}"</a>
   (${firstRepoDescription}), <br>
   <br><a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${secondRepoURL}">"${secondRepoName}"</a>
   (${secondRepoDescription}), <br>
   <br><a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${thirdRepoURL}">"${thirdRepoName}"</a>
   (${thirdRepoDescription}), <br>
   <br><a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${fourthRepoURL}">"${fourthRepoName}"</a>
   (${fourthRepoDescription}) <br>
    <br><a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${fifthRepoURL}">"${fifthRepoName}"</a>
    (${fifthRepoDescription})
   `

}

const fetchData = () => {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => getRepos(data));
}

fetchData();

