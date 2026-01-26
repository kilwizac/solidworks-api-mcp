---
type: property
interface: IExtrudeFeatureData2
member: OptimizeGeometry
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - normal
  - cut
  - optimizegeometry
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - optimize
  - geometry
  - boolean
  - create
  - part
  - vb
  - net
  - vba
readonly: null
---

# IExtrudeFeatureData2.OptimizeGeometry

Gets or sets whether to optimize the geometry of a normal cut in a sheet metal part.

## Signature

```csharp
System.Boolean OptimizeGeometry {get; set;}
```
## Parameters

None.

## Return Value

True to optimize the geometry of a normal cut in a sheet metal part, false to not (see Remarks )

## Remarks

Setting this property is only valid when
IExtrudeFeatureData2::NormalCut
is true.

## Examples

- Create Cut Extrude in Sheet Metal Part (C#) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_CSharp.htm)
- Create Cut Extrude in Sheet Metal Part (VB.NET) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VBNET.htm)
- Create Cut Extrude in Sheet Metal Part (VBA) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VB.htm)