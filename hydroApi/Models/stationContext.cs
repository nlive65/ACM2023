using Microsoft.EntityFrameworkCore;

namespace hydroApi.Models;

public class stationContext : DbContext
{
    public stationContext(DbContextOptions<stationContext>options )
    : base(options)
    {}

    public DbSet<station> stations {get;set;} = null!;
}