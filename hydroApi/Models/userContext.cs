using Microsoft.EntityFrameworkCore;

namespace hydroApi.Models;

public class userContext :DbContext
{
    public userContext(DbContextOptions<userContext> options)
        : base(options)
        {}

    public DbSet<user> users {get; set;} = null!;
}