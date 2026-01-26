---
type: method
interface: IMate2
member: SetMaximumMisalignedDeviation
returns: void
parameters:
  -
    name: MaximumDeviation
    type: System.Double
    description: Maximum allowed misalignment deviation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetMaximumMisalignedDeviation
keywords:
  - mates
  - see
  - also
  - imate2
  - misaligned
  - concentric
  - maximum
  - deviation
  - setmaximummisaligneddeviation
  - mate2
  - double
  - void
---

# IMate2.SetMaximumMisalignedDeviation

Sets the maximum allowed misalignment deviation for this misaligned concentric mate.

## Signature

```csharp
void SetMaximumMisalignedDeviation( 
   System.Double
MaximumDeviation
)
```
## Parameters

- `MaximumDeviation` (System.Double): Maximum allowed misalignment deviation

## Return Value

Unknown.

## Remarks

This method is valid only if
IMate2::GetUseMisalignedDeviationDocumentProperty
returns false. Call
IMate2::SetUseMisalignedDeviationDocumentProperty
to set UseDocumentProperty to false if you want to use this method to set the maximum misaligned deviation for this mate.
If
IMate2::GetCurrentMisalignedDeviation
is greater than the value set by this method, then the mate fails to solve.
The current deviation and the maximum deviation are cumulative across both concentric mates in the Hole Set. For example, if
IMate2::GetConcentricAlignmentType
is set to
swConcentricAlignmentType_e
.swConcentricAlignSymmetric, the deviation from both holes is summed before comparison with the maximum deviation.

## See Also

- `IMate2.GetMaximumMisalignedDeviation`