---
type: property
interface: IMate2
member: GetUseMisalignedDeviationDocumentProperty
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.SetUseMisalignedDeviationDocumentProperty
keywords:
  - mates
  - see
  - also
  - imate2
  - misaligned
  - concentric
  - getusemisaligneddeviationdocumentproperty
  - mate2
  - use
  - deviation
  - document
  - boolean
readonly: null
---

# IMate2.GetUseMisalignedDeviationDocumentProperty

Gets whether to use the document property value for the maximum misalignment deviation of the misaligned concentric mate.

## Signature

```csharp
System.Boolean GetUseMisalignedDeviationDocumentProperty()
```
## Parameters

None.

## Return Value

True to use the document property value for maximum misalignment deviation, false to not

## Remarks

If this method returns false, then the maximum deviation used is returned by
IMate2::GetMaximumMisalignedDeviation
.

## See Also

- `IMate2.SetUseMisalignedDeviationDocumentProperty`