namespace hydroApi.Models;

public class user
{    
    public long Id {get; set;}
    public string? Name {get;set;}
    public string? password {get; set;}
    public bool signUp {get; set;}
    public string? residence {get;set;}
    public int score {get;set;}
    public bool validateUser(string attempt){
        return(attempt.Equals(this.password));
    }

}