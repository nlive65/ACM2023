using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using hydroApi.Models;

namespace hydroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class stationController : ControllerBase
    {
        private readonly stationContext _context;

        public stationController(stationContext context)
        {
            _context = context;
        }

        // GET: api/station
        [HttpGet]
        public async Task<ActionResult<IEnumerable<station>>> Getstations()
        {
          if (_context.stations == null)
          {
              return NotFound();
          }
            return await _context.stations.ToListAsync();
        }

        // GET: api/station/5
        [HttpGet("{id}")]
        public async Task<ActionResult<station>> Getstation(long id)
        {
          if (_context.stations == null)
          {
              return NotFound();
          }
            var station = await _context.stations.FindAsync(id);

            if (station == null)
            {
                return NotFound();
            }

            return station;
        }

        // PUT: api/station/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putstation(long id, station station)
        {
            if (id != station.Id)
            {
                return BadRequest();
            }

            _context.Entry(station).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!stationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/station
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<station>> Poststation(station station)
        {
          if (_context.stations == null)
          {
              return Problem("Entity set 'stationContext.stations'  is null.");
          }
            _context.stations.Add(station);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getstation", new { id = station.Id }, station);
        }

        // DELETE: api/station/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletestation(long id)
        {
            if (_context.stations == null)
            {
                return NotFound();
            }
            var station = await _context.stations.FindAsync(id);
            if (station == null)
            {
                return NotFound();
            }

            _context.stations.Remove(station);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool stationExists(long id)
        {
            return (_context.stations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
