---
type: method
interface: IMate2
member: GetMaximumMisalignedDeviation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetUseMisalignedDeviationDocumentProperty
  - IMate2.SetMaximumMisalignedDeviation
keywords:
  - mates
  - see
  - also
  - imate2
  - misaligned
  - concentric
  - maximum
  - deviation
  - getmaximummisaligneddeviation
  - mate2
  - double
---

# IMate2.GetMaximumMisalignedDeviation

Gets the maximum allowed misalignment deviation for this misaligned concentric mate.

## Signature

```csharp
System.Double GetMaximumMisalignedDeviation()
```
## Parameters

None.

## Return Value

Maximum allowed misalignment deviation

## Remarks

If
IMate2::GetCurrentMisalignedDeviation
is greater than the value returned by this method, then the mate fails to solve.
The current deviation and the maximum deviation are cumulative across both concentric mates in the Hole Set. For example, if
IMate2::GetConcentricAlignmentType
is set to
swConcentricAlignmentType_e
.swConcentricAlignSymmetric, the deviation from both holes is summed before comparison with the maximum deviation.

## See Also

- `IMate2.GetUseMisalignedDeviationDocumentProperty`
- `IMate2.SetMaximumMisalignedDeviation`