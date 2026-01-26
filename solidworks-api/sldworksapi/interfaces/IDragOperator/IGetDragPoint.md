---
type: method
interface: IDragOperator
member: IGetDragPoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: System.Double
    description: Array containing the X, Y, Z coordinates of the drag point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.GetDragPoint
  - IDragOperator.SetDragPoint
keywords:
  - igetdragpoint
  - idragoperator
  - drag
  - operator
  - point
  - double
  - boolean
---

# IDragOperator.IGetDragPoint

Gets the drag point.

## Signature

```csharp
System.Boolean IGetDragPoint( 
   out System.Double
Point
)
```
## Parameters

- `Point` (System.Double): Array containing the X, Y, Z coordinates of the drag point

## Return Value

True if successful, false if not

## Remarks

Unless set to another value by
IDragOperator::ISetDragPoint,
this value is the origin of the component.

## See Also

- `IDragOperator.GetDragPoint`
- `IDragOperator.SetDragPoint`