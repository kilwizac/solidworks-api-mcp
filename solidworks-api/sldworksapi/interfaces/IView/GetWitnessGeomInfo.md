---
type: method
interface: IView
member: GetWitnessGeomInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetWitnessGeomInfo
keywords:
  - virtual
  - sharps
  - view
  - see
  - also
  - iview
  - getwitnessgeominfo
  - witness
  - geom
  - info
  - object
  - sharp
  - line
  - data
  - vb
  - net
  - vba
---

# IView.GetWitnessGeomInfo

Gets the geometry data for all of the virtual sharp witness lines in this drawing view.

## Signature

```csharp
System.Object GetWitnessGeomInfo()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This method returns an array containing the following data for each virtual sharp in the view:
[
color_value
,
swLineStyles_e
option (-1 if no line style is specified),
swLineWeights_e
option (-1 if no line weight is specified),
layer ID (-1 if no layer is specified),
swLayerOverride_e
option,
0 (
NOTE:
0 = witness line data),
number (m) of witness lines,
witness line 1[start_point[x,y,z], end_point[x,y,z&cd;
...
witness line m[start_point[x,y,z], end_point[x,y,z&cd;,
1 (
NOTE
: 1 = witness arc data),
number (n) of witness arcs,
witness arc 1[start_point[x,y,z], end_point[x,y,z], center_point[x,y,z], normal_point[x,y,z&cd;
...
witness arc n[start_point[x,y,z], end_point[x,y,z], center_point[x,y,z], normal_point[x,y,z&cd;]
Where:
color_value =
MAX(MIN(
red_rgb_value
,255),0)
+
MAX(MIN(
green_rgb_value
,255),0)*16*16
+
MAX(MIN(
blue_rgb_value
,255),0)*16*16*16*16
Call
IView::GetWitnessEntitiesCount
to get the size of the array returned by this method.

## Examples

- Get Virtual Sharp Witness Line Data (C#) (Get_Virtual_Sharp_Witness_Line_Data_Example_CSharp.htm)
- Get Virtual Sharp Witness Line Data (VB.NET) (Get_Virtual_Sharp_Witness_Line_Data_Example_VBNET.htm)
- Get Virtual Sharp Witness Line Data (VBA) (Get_Virtual_Sharp_Witness_Line_Data_Example_VB.htm)

## See Also

- `IView.IGetWitnessGeomInfo`