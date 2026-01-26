---
type: property
interface: ICosmeticWeldBeadFeatureData
member: TangentPropagation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - tangentpropagation
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - tangent
  - propagation
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.TangentPropagation

Gets or sets whether to apply the weld bead to all edges that are tangent to the selected faces or edges.

## Signature

```csharp
System.Boolean TangentPropagation {get; set;}
```
## Parameters

None.

## Return Value

True to apply the weld bead to all edges that are tangent to the selected faces or edges, false to not (see Remarks )

## Remarks

If this property is...
Then use...
True
ICosmeticWeldBeadFeatureData::FromToLength
to enable the from/to length properties
False
ICosmeticWeldBeadFeatureData::Side
to define how to apply the weld bead to the selected faces or edges

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)