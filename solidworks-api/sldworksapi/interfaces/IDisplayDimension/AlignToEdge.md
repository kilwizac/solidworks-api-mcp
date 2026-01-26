---
type: method
interface: IDisplayDimension
member: AlignToEdge
returns: System.Boolean
parameters:
  -
    name: AlignmentEdge
    type: System.Object
    description: IEdge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - geometry
related:
  - IDisplayDimension.SetHorizontal
  - IDisplayDimension.SetVertical
keywords:
  - aligntoedge
  - idisplaydimension
  - display
  - dimension
  - align
  - edge
  - alignment
  - object
  - boolean
---

# IDisplayDimension.AlignToEdge

Aligns this linear dimension with the specified edge.

## Signature

```csharp
System.Boolean AlignToEdge( 
   System.Object
AlignmentEdge
)
```
## Parameters

- `AlignmentEdge` (System.Object): IEdge

## Return Value

True if successful, false if not

## See Also

- `IDisplayDimension.SetHorizontal`
- `IDisplayDimension.SetVertical`