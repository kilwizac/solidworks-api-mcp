---
type: property
interface: IExtrudeFeatureData2
member: NormalCut
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - normalcut
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - normal
  - cut
  - boolean
  - create
  - sheet
  - metal
  - part
  - vb
  - net
  - vba
readonly: null
---

# IExtrudeFeatureData2.NormalCut

Gets or sets whether the cut is created normal to the thickness of the sheet metal part.

## Signature

```csharp
System.Boolean NormalCut {get; set;}
```
## Parameters

None.

## Return Value

True if the cut is created normal to the thickness of the sheet metal part, false if not

## Remarks

To optimize the geometry of the normal cut in the sheet metal part, set
IExtrudeFeatureData2::OptimizeGeometry
to true.

## Examples

- Create Cut Extrude in Sheet Metal Part (C#) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_CSharp.htm)
- Create Cut Extrude in Sheet Metal Part (VB.NET) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VBNET.htm)
- Create Cut Extrude in Sheet Metal Part (VBA) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VB.htm)