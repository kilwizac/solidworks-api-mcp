---
type: method
interface: IView
member: IGetWitnessGeomInfo
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Size of the virtual sharp witness line geometry data array (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetWitnessGeomInfo
keywords:
  - virtual
  - sharps
  - view
  - see
  - also
  - iview
  - igetwitnessgeominfo
  - witness
  - geom
  - info
  - array
  - size
  - int32
  - double
---

# IView.IGetWitnessGeomInfo

Gets the geometry data for all of the virtual sharp witness lines in this drawing view.

## Signature

```csharp
System.Double IGetWitnessGeomInfo( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Size of the virtual sharp witness line geometry data array (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
NOTE:
1 = witness arc data),
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
Before calling this method, call
IView::GetWitnessEntitiesCount
to get the size of the array returned by this method.

## See Also

- `IView.GetWitnessGeomInfo`