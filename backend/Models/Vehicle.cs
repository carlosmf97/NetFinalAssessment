using System;
using System.Collections.Generic;

namespace NetFinalAssessment.Models;

public partial class Vehicle
{
    public int Id { get; set; }

    public string? Brand { get; set; }

    public string? Vin { get; set; }

    public string? Color { get; set; }

    public string? FbYear { get; set; }

    public virtual Claim? Claim { get; set; }

    public virtual Owner IdNavigation { get; set; } = null!;
}
