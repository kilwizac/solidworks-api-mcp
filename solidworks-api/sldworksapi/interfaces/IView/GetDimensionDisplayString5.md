---
type: method
interface: IView
member: GetDimensionDisplayString5
returns: System.Object
parameters:
  -
    name: DimensionSize
    type: System.Int32
    description: Number of strings for each dimension (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo7
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.ProjectedDimensions
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawing
  - sheets
  - views
  - iview
  - dimensions
  - sheet
  - isheet
  - view
  - getdimensiondisplaystring5
  - display
  - string5
  - size
  - int32
  - object
---

# IView.GetDimensionDisplayString5

Gets all of the dimension text in the current drawing sheet or the current drawing view.

## Signature

```csharp
System.Object GetDimensionDisplayString5( 
   out System.Int32
DimensionSize
)
```
## Parameters

- `DimensionSize` (System.Int32): Number of strings for each dimension (see Remarks )

## Return Value

Array of strings (see Remarks )

## Remarks

This method returns a string array of size (
DimensionSize
) x (
number_of_dimensions_in_view
).
This set of values returned for each dimension in the view:
[
value1, tolMax1 tolMin1, value2, tolMax2, tolMin2, prefix, suffix, callout1, callout2, bottom
]
where:
value1
= Primary Dimension Value
tolMax1
= Maximum Variation for
value1
tolMin1
= Minimum Variation for
value1
value2
= Dual Dimension Value
tolMax2
= Maximum Variation for
value2
tolMin2
= Minimum Variation for
value2
prefix
= Text before
value1
suffix
= Text after
value1
callout1
= Text above
prefix
<
value1
>
suffix
callout2
= Text below
prefix
<
value1
>
suffix
bottom
= Text below
callout2
The Dimension PropertyManager page (PMP) contains two Dimension Text boxes. Add dimension text by entering prefix, suffix, callout1, and callout2 texts in the first Dimension Text box. Enter bottom text in the second Dimension Text box.
If any of the above values are not used in the dimension, then those values are returned as empty strings in the returned array of this method.
For more information, see
SOLIDWORKS Design user-interface help > Detailing and Drawings > Drawings > Dimensions in Drawings > Dimension Value PropertyManager
.
NOTES:
A previous version of this method,
IView::GetDimensionDisplayString2
, detects and overlooks dangling dimensions. This method neither overlooks nor indicates that any dimensions are dangling. Use IView::GetDimensionDisplayString2 if you need dangling dimensions detected and overlooked.
This method does not support
hole callouts
.

## See Also

- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo7`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.ProjectedDimensions`