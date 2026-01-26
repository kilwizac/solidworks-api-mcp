---
type: property
interface: IDisplayDimension
member: SolidLeader
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetBrokenLeader2
  - IDisplayDimension.GetUseDocBrokenLeader
  - IDisplayDimension.SetBrokenLeader2
keywords:
  - leaders
  - dimensions
  - solidleader
  - idisplaydimension
  - display
  - dimension
  - solid
  - leader
  - boolean
readonly: null
---

# IDisplayDimension.SolidLeader

Gets or sets whether this display dimension is displayed with a solid leader for arc and radial dimensions.

## Signature

```csharp
System.Boolean SolidLeader {get; set;}
```
## Parameters

None.

## Return Value

True displays a solid leader, false does not

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.GetBrokenLeader2`
- `IDisplayDimension.GetUseDocBrokenLeader`
- `IDisplayDimension.SetBrokenLeader2`