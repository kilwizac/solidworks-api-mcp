---
type: method
interface: IDragOperator
member: GetDragPoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: System.Object
    description: Array containing the X, Y, Z coordinates of the drag point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.IGetDragPoint
  - IDragOperator.ISetDragPoint
keywords:
  - getdragpoint
  - idragoperator
  - drag
  - operator
  - point
  - object
  - boolean
---

# IDragOperator.GetDragPoint

Gets the drag point.

## Signature

```csharp
System.Boolean GetDragPoint( 
   out System.Object
Point
)
```
## Parameters

- `Point` (System.Object): Array containing the X, Y, Z coordinates of the drag point

## Return Value

True if successful, false if not

## Remarks

Unless set to another value by
IDragOperator::SetDragPoint,
this value is the origin of the component.

## See Also

- `IDragOperator.IGetDragPoint`
- `IDragOperator.ISetDragPoint`