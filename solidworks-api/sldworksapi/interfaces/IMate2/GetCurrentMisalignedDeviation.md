---
type: method
interface: IMate2
member: GetCurrentMisalignedDeviation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - mates
  - see
  - also
  - imate2
  - misaligned
  - concentric
  - getcurrentmisaligneddeviation
  - mate2
  - current
  - deviation
  - double
---

# IMate2.GetCurrentMisalignedDeviation

Gets the current misalignment deviation for the misaligned concentric mate.

## Signature

```csharp
System.Double GetCurrentMisalignedDeviation()
```
## Parameters

None.

## Return Value

Current misalignment deviation

## Remarks

If the current deviation of misalignment is greater than
IMate2::GetMaximumMisalignedDeviation
, then the mate fails to solve.
The current deviation and the maximum deviation are cumulative across both concentric mates in the Hole Set. For example, if
IMate2::GetConcentricAlignmentType
is set to
swConcentricAlignmentType_e
.swConcentricAlignSymmetric, the deviation from both holes is summed before comparison with the maximum deviation.