---
type: method
interface: IAnnotation
member: GetArrowHeadStyleAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader within this annotation (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.SetArrowHeadStyleAtIndex
keywords:
  - arrows
  - leaders
  - getarrowheadstyleatindex
  - iannotation
  - annotation
  - arrow
  - head
  - style
  - index
  - int32
---

# IAnnotation.GetArrowHeadStyleAtIndex

Gets the arrow head style of a specific leader on this annotation.

## Signature

```csharp
System.Int32 GetArrowHeadStyleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of leader within this annotation (see Remarks )

## Return Value

Arrowhead style as defined in swArrowStyle_e

## Remarks

The index value is 0-based. Therefore, a valid index value is greater than or equal to 0, but less than the number of leaders on this annotation. Use
IAnnotation::GetArrowHeadCount
to find the number of leaders on this annotation. If the index value is invalid, SOLIDWORKS returns the arrowhead style as -1, and returns an S_FALSE status (COM interface).
Use
IAnnotation::SetArrowHeadStyleAtIndex
to set the arrow head style of a specific leader.

## See Also

- `IAnnotation.SetArrowHeadStyleAtIndex`