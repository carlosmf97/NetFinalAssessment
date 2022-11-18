using System;
using System.Collections.Generic;

namespace NetFinalAssessment.Models;

public partial class Owner
{
    public int Id { get; set; }

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string? DriverLicense { get; set; }

    public virtual Vehicle? Vehicle { get; set; }
}
