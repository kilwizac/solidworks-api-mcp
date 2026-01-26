---
type: property
interface: IMate2
member: SetUseMisalignedDeviationDocumentProperty
returns: void
parameters:
  -
    name: UseDocumentProperty
    type: System.Boolean
    description: True to use the document property value for maximum misalignment deviation, false to not
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
  - setusemisaligneddeviationdocumentproperty
  - mate2
  - use
  - document
  - boolean
  - void
readonly: null
---

# IMate2.SetUseMisalignedDeviationDocumentProperty

Sets whether to use the document property value for the maximum misalignment deviation for the misaligned concentric mate.

## Signature

```csharp
void SetUseMisalignedDeviationDocumentProperty( 
   System.Boolean
UseDocumentProperty
)
```
## Parameters

- `UseDocumentProperty` (System.Boolean): True to use the document property value for maximum misalignment deviation, false to not

## Return Value

Unknown.

## Remarks

If
IMate2::GetCurrentMisalignedDeviation
is greater than the document property value of the maximum misalignment deviation, then the mate fails to solve.
The current deviation and the maximum deviation are cumulative across both concentric mates in the Hole Set. For example, if
IMate2::GetConcentricAlignmentType
is set to
swConcentricAlignmentType_e
.swConcentricAlignSymmetric, the deviation from both holes is summed before comparison with the maximum deviation.

## See Also

- `IMate2.GetUseMisalignedDeviationDocumentProperty`
- `IMate2.SetMaximumMisalignedDeviation`