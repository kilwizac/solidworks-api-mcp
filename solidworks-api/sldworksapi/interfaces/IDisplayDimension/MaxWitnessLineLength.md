---
type: property
interface: IDisplayDimension
member: MaxWitnessLineLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SmartWitness
  - IDisplayDimension.WitnessVisibility
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - maxwitnesslinelength
  - idisplaydimension
  - display
  - max
  - witness
  - line
  - length
  - double
  - maximum
  - extension
  - vba
readonly: null
---

# IDisplayDimension.MaxWitnessLineLength

Gets or sets the maximum length of dimension extension lines.

## Signature

```csharp
System.Double MaxWitnessLineLength {get; set;}
```
## Parameters

None.

## Return Value

Length

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Set and Get Maximum Extension Line Length (VBA) (Set_and_Get_Maximum_Extension_Line_Length_Example_VB.htm)

## See Also

- `IDisplayDimension.SmartWitness`
- `IDisplayDimension.WitnessVisibility`