---
type: method
interface: IModelDocExtension
member: JogDimension
returns: System.Boolean
parameters:
  -
    name: Jog
    type: System.Boolean
    description: True if jog points are on, false if not
  -
    name: WitnessIndex
    type: System.Int16
    description: Index, 0 or 1, of linear dimension extension line; ignored if an ordinate dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IDisplayDimension.AutoJogOrdinate
  - IDisplayDimension.GetJogParameters
  - IDisplayDimension.Jogged
  - IDisplayDimension.SetJogParameters
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - jog
  - see
  - ijogfeaturedata
  - dimension
  - also
  - idimension
  - jogged
  - ordinate
  - dimensions
  - linear
  - extension
  - lines
  - jogdimension
  - imodeldocextension
  - model
  - doc
  - boolean
  - witness
  - index
  - int16
  - add
  - offset
  - jogs
  - vba
---

# IModelDocExtension.JogDimension

Gets or sets whether jog points are on or off on an interactively selected linear or ordinate dimension.

## Signature

```csharp
System.Boolean JogDimension( 
   System.Boolean
Jog
,
   System.Int16
WitnessIndex
)
```
## Parameters

- `Jog` (System.Boolean): True if jog points are on, false if not
- `WitnessIndex` (System.Int16): Index, 0 or 1, of linear dimension extension line; ignored if an ordinate dimension

## Return Value

True if operation succeeds, false if it fails

## Remarks

This method is equivalent to clicking the right-mouse button on a linear or ordinate dimension in the SOLIDWORKS Design user-interface, selecting
Display
Options
on the shortcut menu, and selecting
Jog
.
Call
IModelView::GraphicsRedraw
after setting jog points to redraw the graphics area.

## Examples

- Add and Offset Dimension Extension Lines Jogs (VBA) (Add_and_Offset_Dimension_Extension_Lines_Jogs_Example_VB.htm)

## See Also

- `IDisplayDimension.AutoJogOrdinate`
- `IDisplayDimension.GetJogParameters`
- `IDisplayDimension.Jogged`
- `IDisplayDimension.SetJogParameters`
- `IModelDocExtension.AddOrdinateDimension`