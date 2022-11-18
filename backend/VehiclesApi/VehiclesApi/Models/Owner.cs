namespace VehiclesApi.Models
{
    public class Owner
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }
        public string? DriverLicense { get; set; }
    }
}
