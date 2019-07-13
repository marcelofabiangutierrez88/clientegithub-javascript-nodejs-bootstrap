class UI {
    constructor (){
        this.profile = document.getElementById('profile');
    }
    showProfile (user) {
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"  />
            <div class="card-body">
                <h5 class="card-title">${user.name} / ${user.login}</h5>
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Perfil</a>
                <spam class="badge badge-success">
                Seguidores : ${user.followers}
                </spam>     
                <spam class="badge badge-warning">
                Siguiendo : ${user.following}
                </spam>
                <spam class="badge badge-danger">
                Repositorios Publicos : ${user.public_repos}
                </spam>
                <p>
                 ${user.bio}
                </p>
                </div>
            </div>

        `;
        this.clearMessage();
    }

    showMessage (message , cssClass){
        const div = document.createElement ('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector ('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);


    }

    clearMessage (){
        const alertFound = document.querySelector ('.alert');
        if (alertFound) {
            alertFound.remove();
        }

    }
    showRepositories (repositories){
        console.log(repositories)
        let template ='';
        repositories.forEach(repo=>{
            template += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target=_blank>${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <spam class="badge badge-primary">
                            Lenguaje:${repo.lenguage}
                        </spam>
                        <spam class="badge badge-success">
                            Forks: ${repo.forks_count}
                        </spam>
                        <p>
                        ${repo.description}
                        </p>

                    </div>
                </div>
            </div> 
        `;
        })
        

        document.getElementById ('repositories').innerHTML = template;

    }
}


module.exports =UI;