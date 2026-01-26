---
type: method
interface: IAnnotation
member: SetArrowHeadSizeAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of leader on this annotation
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document default setting for arrow head size, false to use the specified Length, Width, and Height values
  -
    name: Length
    type: System.Double
    description: Length of leader on this annotation
  -
    name: Width
    type: System.Double
    description: Width of leader on this annotation
  -
    name: Height
    type: System.Double
    description: Height of leader on this annotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetArrowHeadCount
  - IAnnotation.GetArrowHeadStyleAtIndex
  - IAnnotation.SetArrowHeadStyleAtIndex
keywords:
  - arrows
  - leaders
  - setarrowheadsizeatindex
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

# IAnnotation.SetArrowHeadSizeAtIndex

Sets the size of the arrow head of the specified leader on this annotation.

## Signature

```csharp
System.Boolean SetArrowHeadSizeAtIndex( 
   System.Int32
Index
,
   System.Boolean
UseDoc
,
   System.Double
Length
,
   System.Double
Width
,
   System.Double
Height
)
```
## Parameters

- `Index` (System.Int32): 0-based index of leader on this annotation
- `UseDoc` (System.Boolean): True to use the document default setting for arrow head size, false to use the specified Length, Width, and Height values
- `Length` (System.Double): Length of leader on this annotation
- `Width` (System.Double): Width of leader on this annotation
- `Height` (System.Double): Height of leader on this annotation

## Return Value

Unknown.

## Remarks

Use
IAnnotation::GetArrowHeadSizeAtIndex
to get the arrow head size of a specific leader.

## See Also

- `IAnnotation.GetArrowHeadCount`
- `IAnnotation.GetArrowHeadStyleAtIndex`
- `IAnnotation.SetArrowHeadStyleAtIndex`