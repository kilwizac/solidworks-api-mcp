---
type: property
interface: ISMGussetFeatureData
member: EdgeFilletRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - edgefilletradius
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - edge
  - fillet
  - radius
  - double
readonly: null
---

# ISMGussetFeatureData.EdgeFilletRadius

Gets or sets the fillet radius of edges in this flat-back gusset.

## Signature

```csharp
System.Double EdgeFilletRadius {get; set;}
```
## Parameters

None.

## Return Value

Gusset edge fillet radius

## Remarks

This property is valid only if
ISMGussetFeatureData::FilletGussetEdges
is true and
ISMGussetFeatureData::GussetType
is set to 1.