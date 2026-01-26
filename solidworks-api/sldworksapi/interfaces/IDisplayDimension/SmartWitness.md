---
type: property
interface: IDisplayDimension
member: SmartWitness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.MaxWitnessLineLength
  - IDisplayDimension.WitnessVisibility
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - smartwitness
  - idisplaydimension
  - display
  - smart
  - witness
  - boolean
  - properties
  - vba
readonly: null
---

# IDisplayDimension.SmartWitness

Gets or sets the smart display of extension lines.

## Signature

```csharp
System.Boolean SmartWitness {get; set;}
```
## Parameters

None.

## Return Value

True uses extension line smart display, false does not

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)

## See Also

- `IDisplayDimension.MaxWitnessLineLength`
- `IDisplayDimension.WitnessVisibility`