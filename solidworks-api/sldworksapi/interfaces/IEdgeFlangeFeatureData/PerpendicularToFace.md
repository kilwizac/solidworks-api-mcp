---
type: property
interface: IEdgeFlangeFeatureData
member: PerpendicularToFace
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - perpendiculartoface
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - perpendicular
  - face
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.PerpendicularToFace

Gets or sets whether to set this edge flange perpendicular to the angle reference face.

## Signature

```csharp
System.Boolean PerpendicularToFace {get; set;}
```
## Parameters

None.

## Return Value

True to set this edge flange perpendicular to the angle reference face, false to set it parallel to the angle reference face (default)

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::AngleReference
is not null.