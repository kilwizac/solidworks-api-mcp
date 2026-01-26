---
type: method
interface: IAnnotation
member: GetArrowHeadSizeAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader on this annotation
  -
    name: UseDoc
    type: System.Boolean
    description: TRUE indicates that the document default setting for arrow head size was used, FALSE indicates that the Length, Width, and Height values were specified
  -
    name: Length
    type: System.Double
    description: Length of arrow head
  -
    name: Width
    type: System.Double
    description: Width of arrow head
  -
    name: Height
    type: System.Double
    description: Height of arrow head
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetArrowHeadStyleAtIndex
  - IAnnotation.SetArrowHeadStyleAtIndex
keywords:
  - arrows
  - leaders
  - getarrowheadsizeatindex
  - iannotation
  - annotation
  - arrow
  - head
  - size
  - index
  - int32
  - use
  - doc
  - boolean
  - length
  - double
  - width
  - height
---

# IAnnotation.GetArrowHeadSizeAtIndex

Gets the arrow head size of the specified leader on this annotation.

## Signature

```csharp
System.Boolean GetArrowHeadSizeAtIndex( 
   System.Int32
Index
,
   out System.Boolean
UseDoc
,
   out System.Double
Length
,
   out System.Double
Width
,
   out System.Double
Height
)
```
## Parameters

- `Index` (System.Int32): Index of leader on this annotation
- `UseDoc` (System.Boolean): TRUE indicates that the document default setting for arrow head size was used, FALSE indicates that the Length, Width, and Height values were specified
- `Length` (System.Double): Length of arrow head
- `Width` (System.Double): Width of arrow head
- `Height` (System.Double): Height of arrow head

## Return Value

True if the method succeeds, false if not

## Remarks

The index value is 0-based. Therefore, a valid index value is greater than or equal to 0, but less than the number of leaders on this annotation. Use
IAnnotation::GetArrowHeadCount
to find the number of leaders on this annotation. If the index value is invalid, SOLIDWORKS returns the arrowhead style as -1, and returns an S_FALSE status (COM interface).
Use
IAnnotation::SetArrowHeadSizeAtIndex
to set the arrow head size of a specific leader.

## See Also

- `IAnnotation.GetArrowHeadStyleAtIndex`
- `IAnnotation.SetArrowHeadStyleAtIndex`