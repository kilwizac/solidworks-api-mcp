---
type: method
interface: IDragOperator
member: ISetDragPoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: System.Double
    description: Array containing the X, Y, Z coordinate of the drag point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.GetDragPoint
  - IDragOperator.IGetDragPoint
  - IDragOperator.SetDragPoint
keywords:
  - isetdragpoint
  - idragoperator
  - drag
  - operator
  - point
  - double
  - boolean
---

# IDragOperator.ISetDragPoint

Sets the drag point.

## Signature

```csharp
System.Boolean ISetDragPoint( 
   ref System.Double
Point
)
```
## Parameters

- `Point` (System.Double): Array containing the X, Y, Z coordinate of the drag point

## Return Value

True if successful, false if not

## See Also

- `IDragOperator.GetDragPoint`
- `IDragOperator.IGetDragPoint`
- `IDragOperator.SetDragPoint`