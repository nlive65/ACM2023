namespace hydroApi.Models;

public class station
{
    public long Id {get; set;}

    public float rating {get; set;}
    
    public float lng {get;set;}

    public float lat {get;set;}

    private int averageRating {get;set;}   

}