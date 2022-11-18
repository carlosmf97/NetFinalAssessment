using System;
using System.Collections.Generic;

namespace NetFinalAssessment.Models;

public partial class Claim
{
    public int Id { get; set; }

    public string? ClaimDescription { get; set; }

    public string? ClaimStatus { get; set; }

    public DateTime? ClaimDate { get; set; }

    public virtual Vehicle IdNavigation { get; set; } = null!;
}
