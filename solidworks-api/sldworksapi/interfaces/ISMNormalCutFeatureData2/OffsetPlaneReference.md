---
type: property
interface: ISMNormalCutFeatureData2
member: OffsetPlaneReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetplanereference
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - offset
  - plane
  - reference
  - object
readonly: null
---

# ISMNormalCutFeatureData2.OffsetPlaneReference

Gets or sets the offset plane reference for the Normal Cut.

## Signature

```csharp
System.Object OffsetPlaneReference {get; set;}
```
## Parameters

None.

## Return Value

Reference plane or top or bottom face of the sheet metal body

## Remarks

This property is valid only if
ISMNormalCutFeatureData2::NormalCutParameters
is set to
swNormalCutParameters_e
.swNormalCutOffsetPlane.