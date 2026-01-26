---
type: property
interface: IDisplayDimension
member: WitnessVisibility
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.MaxWitnessLineLength
  - IDisplayDimension.SmartWitness
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - witnessvisibility
  - idisplaydimension
  - display
  - witness
  - visibility
  - int32
readonly: null
---

# IDisplayDimension.WitnessVisibility

Gets or sets which extension lines are visible.

## Signature

```csharp
System.Int32 WitnessVisibility {get; set;}
```
## Parameters

None.

## Return Value

Extension-line visibility state as defined in swWitnessLineVisibility_e

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.MaxWitnessLineLength`
- `IDisplayDimension.SmartWitness`