---
type: method
interface: IDragOperator
member: SetDragPoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: System.Object
    description: Array of size 3 containing the X, Y, Z coordinate of the drag point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.GetDragPoint
  - IDragOperator.IGetDragPoint
  - IDragOperator.ISetDragPoint
keywords:
  - setdragpoint
  - idragoperator
  - drag
  - operator
  - point
  - object
  - boolean
---

# IDragOperator.SetDragPoint

Sets the drag point.

## Signature

```csharp
System.Boolean SetDragPoint( 
   System.Object
Point
)
```
## Parameters

- `Point` (System.Object): Array of size 3 containing the X, Y, Z coordinate of the drag point

## Return Value

True if successful, false if not

## See Also

- `IDragOperator.GetDragPoint`
- `IDragOperator.IGetDragPoint`
- `IDragOperator.ISetDragPoint`