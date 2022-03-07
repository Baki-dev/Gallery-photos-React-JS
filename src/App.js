import React from 'react';
import styled from "styled-components";
import search from './img/search.svg';


function App() {

    //HTML
    const FormRender = () =>{
        return <form action ="" className="form">
            <div className="input-control">
                <input type="text" placeholder="Voiture, Espace, Paysage, T-rex" />
                <button type="submit">Recherche <img src={search} alt ="" /></button>
                </div>
            </form>
    }

    return (
        <AppStyled>
            <header className="header">
                <h2 className="logo">Gallery Photos</h2>
                {FormRender()}

            </header>

            <main className="main-content">
                 
            </main>

        </AppStyled>
    );
}

const AppStyled = styled.div`
    header{
        height: 30vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #25354C;
        margin-bottom: 5rem;
        form{
            display: flex;
            justify-content: center;
            width: 50%;
            transition: all .4s ease-in-out;
            .input-control{
                position: relative;
                width: 70%;
                margin: 0 auto;
                text-align: center;
                transition: all .4s ease-in-out;
                input{
                    padding: .6rem 2rem;
                    background-color: #4F6877;
                    outline: none;
                    border: none;
                    border-radius: 50px;
                    filter: drop-shadow(0px 4px 22px rgba(0, 0, 0, 0.25));
                    width: 100%;
                    color: cyan;
                    font-family: inherit;
                }

                button{
                    position: absolute;
                    right: 5px;
                    top: 50%;
                    outline: none;
                    border: none;
                    transform: translateY(-50%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: .3rem 1.5rem;
                    background-color: rgba(107, 190, 146, 1);
                    cursor: pointer;
                    border-radius: 50px;
                    img{
                        padding-left: 1rem;
                    }

                }
            }
        }
    }
`;


export default App;