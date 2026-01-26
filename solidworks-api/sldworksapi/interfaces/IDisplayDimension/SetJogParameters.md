---
type: method
interface: IDisplayDimension
member: SetJogParameters
returns: System.Boolean
parameters:
  -
    name: WitnessIndex
    type: System.Int16
    description: Index of the linear dimension extension line to jog
  -
    name: Jogged
    type: System.Boolean
    description: True whether the linear dimension extension is jogged, false if not
  -
    name: Offset1
    type: System.Double
    description: First line segment of the linear dimension extension line
  -
    name: Offset2
    type: System.Double
    description: Second line segment of the linear dimension extension line; this is the line segment to jog
  -
    name: Offset1to2
    type: System.Double
    description: Distance by which to offset Offset1 and Offset2 for the jog
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetJogParameters
  - IModelDocExtension.JogDimension
keywords:
  - jog
  - see
  - ijogfeaturedata
  - dimension
  - also
  - idimension
  - jogged
  - linear
  - extension
  - lines
  - setjogparameters
  - idisplaydimension
  - display
  - parameters
  - witness
  - index
  - int16
  - boolean
  - offset1
  - double
  - offset2
  - offset1to2
  - add
  - offset
  - jogs
  - vba
---

# IDisplayDimension.SetJogParameters

Set the linear dimension extension line to be jogged.

## Signature

```csharp
System.Boolean SetJogParameters( 
   System.Int16
WitnessIndex
,
   System.Boolean
Jogged
,
   System.Double
Offset1
,
   System.Double
Offset2
,
   System.Double
Offset1to2
)
```
## Parameters

- `WitnessIndex` (System.Int16): Index of the linear dimension extension line to jog
- `Jogged` (System.Boolean): True whether the linear dimension extension is jogged, false if not
- `Offset1` (System.Double): First line segment of the linear dimension extension line
- `Offset2` (System.Double): Second line segment of the linear dimension extension line; this is the line segment to jog
- `Offset1to2` (System.Double): Distance by which to offset Offset1 and Offset2 for the jog

## Return Value

Unknown.

## Remarks

Call
IModelView::GraphicsRedraw
after calling this method to redraw the graphics area.

## Examples

- Add and Offset Dimension Lines Jogs (VBA) (Add_and_Offset_Dimension_Extension_Lines_Jogs_Example_VB.htm)

## See Also

- `IDisplayDimension.GetJogParameters`
- `IModelDocExtension.JogDimension`