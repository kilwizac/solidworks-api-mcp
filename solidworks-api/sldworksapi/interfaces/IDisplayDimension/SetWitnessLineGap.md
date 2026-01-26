---
type: method
interface: IDisplayDimension
member: SetWitnessLineGap
returns: System.Boolean
parameters:
  -
    name: WitnessIndex
    type: System.Int16
    description: Index of the extension line whose gap to get
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document default value of the gap, false to not (see Remarks )
  -
    name: Gap
    type: System.Double
    description: Gap value in system units; ignored if UseDoc is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IView.GetDimensionInfo6
  - IView.IGetDimensionInfo6
keywords:
  - extension
  - lines
  - gap
  - dimension
  - see
  - also
  - idimension
  - setwitnesslinegap
  - idisplaydimension
  - display
  - witness
  - line
  - index
  - int16
  - use
  - doc
  - boolean
  - double
  - gaps
  - vba
---

# IDisplayDimension.SetWitnessLineGap

Sets the gap for the specified dimension extension line.

## Signature

```csharp
System.Boolean SetWitnessLineGap( 
   System.Int16
WitnessIndex
,
   System.Boolean
UseDoc
,
   System.Double
Gap
)
```
## Parameters

- `WitnessIndex` (System.Int16): Index of the extension line whose gap to get
- `UseDoc` (System.Boolean): True to use the document default value of the gap, false to not (see Remarks )
- `Gap` (System.Double): Gap value in system units; ignored if UseDoc is true

## Return Value

True if the operation succeeds, false if not

## Remarks

The UseDoc argument is dependent on the detailing standard. You can retrieve the document default value using the
document-level user-preference swDetailingWitnessLineGap
.
Call
IModelView::GraphicsRedraw
after calling this method to redraw the graphics area.

## Examples

- Get and Set Dimension Extension Lines Gaps (VBA) (Get_and_Set_Dimension_Extension_Lines_Gaps_Example_VB.htm)

## See Also

- `IView.GetDimensionInfo6`
- `IView.IGetDimensionInfo6`