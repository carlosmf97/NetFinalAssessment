using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace NetFinalAssessment.Models;

public partial class CarlosAndRodrigoDbContext : DbContext
{

    public CarlosAndRodrigoDbContext(DbContextOptions<CarlosAndRodrigoDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Claim> Claims { get; set; }

    public virtual DbSet<Owner> Owners { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Claim>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Claims__3214EC2788E1AEA8");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.ClaimDate)
                .HasColumnType("date")
                .HasColumnName("claimDate");
            entity.Property(e => e.ClaimDescription)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("claimDescription");
            entity.Property(e => e.ClaimStatus)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("claimStatus");

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.Claim)
                .HasForeignKey<Claim>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Claims__ID__33D4B598");
        });

        modelBuilder.Entity<Owner>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Owners__3214EC279952DAE5");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.DriverLicense)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Vehicles__3214EC27A078DABE");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.Brand)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("brand");
            entity.Property(e => e.Color)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("color");
            entity.Property(e => e.FbYear)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("fbYear");
            entity.Property(e => e.Vin)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("vin");

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.Vehicle)
                .HasForeignKey<Vehicle>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Vehicles__ID__30F848ED");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
