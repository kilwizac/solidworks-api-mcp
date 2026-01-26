---
type: method
interface: IDisplayDimension
member: GetJogParameters
returns: System.Boolean
parameters:
  -
    name: WitnessIndex
    type: System.Int16
    description: Index of linear dimension extension line whose jog to get
  -
    name: Jogged
    type: System.Boolean
    description: True if the linear dimension extension line is jogged, false if not
  -
    name: Offset1
    type: System.Double
    description: First line segment of the linear dimension extension line
  -
    name: Offset2
    type: System.Double
    description: Second line segment of the linear dimension extension line; this is the line segment that is jogged
  -
    name: Offset1to2
    type: System.Double
    description: Third line segment of the linear dimension extension line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SetJogParameters
  - IModelDocExtension.JogDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - jogged
  - jog
  - ijogfeaturedata
  - linear
  - extension
  - lines
  - getjogparameters
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

# IDisplayDimension.GetJogParameters

Gets the jog in a linear dimension extension line.

## Signature

```csharp
System.Boolean GetJogParameters( 
   System.Int16
WitnessIndex
,
   out System.Boolean
Jogged
,
   out System.Double
Offset1
,
   out System.Double
Offset2
,
   out System.Double
Offset1to2
)
```
## Parameters

- `WitnessIndex` (System.Int16): Index of linear dimension extension line whose jog to get
- `Jogged` (System.Boolean): True if the linear dimension extension line is jogged, false if not
- `Offset1` (System.Double): First line segment of the linear dimension extension line
- `Offset2` (System.Double): Second line segment of the linear dimension extension line; this is the line segment that is jogged
- `Offset1to2` (System.Double): Third line segment of the linear dimension extension line

## Return Value

True if the operation succeeds, false if not

## Examples

- Add and Offset Dimension Extension Lines Jogs (VBA) (Add_and_Offset_Dimension_Extension_Lines_Jogs_Example_VB.htm)

## See Also

- `IDisplayDimension.SetJogParameters`
- `IModelDocExtension.JogDimension`