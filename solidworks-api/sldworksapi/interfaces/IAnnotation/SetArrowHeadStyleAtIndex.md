---
type: method
interface: IAnnotation
member: SetArrowHeadStyleAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of leader within this annotation (see Remarks )
  -
    name: ArrowHeadStyle
    type: System.Int32
    description: Arrowhead style as defined in swArrowStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetArrowHeadCount
  - IAnnotation.GetArrowHeadSizeAtIndex
  - IAnnotation.GetArrowHeadStyleAtIndex
  - IAnnotation.SetArrowHeadSizeAtIndex
keywords:
  - leaders
  - arrows
  - setarrowheadstyleatindex
  - iannotation
  - annotation
  - arrow
  - head
  - style
  - index
  - int32
---

# IAnnotation.SetArrowHeadStyleAtIndex

Sets the arrow head style of a specific leader on this annotation.

## Signature

```csharp
System.Int32 SetArrowHeadStyleAtIndex( 
   System.Int32
Index
,
   System.Int32
ArrowHeadStyle
)
```
## Parameters

- `Index` (System.Int32): 0-based index of leader within this annotation (see Remarks )
- `ArrowHeadStyle` (System.Int32): Arrowhead style as defined in swArrowStyle_e

## Return Value

Return status (see Remarks )

## Remarks

A valid index value is greater than or equal to 0, but less than the number of leaders on this annotation. Use
IAnnotation::GetArrowHeadCount
to find out how many leaders are on this annotation. An index value of -1 is also valid, and indicates that this arrowhead style should be applied to all leaders on this annotation. If the index value is
invalid, SOLIDWORKS returns a retval of -2.
If smart arrowhead style is enabled on this annotation, then this method cannot change
the arrowhead style of individual leaders, and retval is -3. Use
IAnnotation::GetSmartArrowHeadStyle
to determine if this flag is enabled or disabled.
The return status of this method can have the following values:
If value equals...
Then the arrowhead style was...
0
Successfully set
-1
Not set because of an unknown error
-2
Not set because of an invalid index value
-3
Not set because of smart arrowhead styles being enabled
-4
Not set because of an invalid arrowhead style value
If leader display is enabled, then this method changes the visible model. To see those
changes, use
IModelDoc2::GraphicsRedraw2
to reddraw the graphics window.
Use
IAnnotation::GetArrowHeadStyleAtIndex
to get the arrow head style of a specific leader.

## See Also

- `IAnnotation.GetArrowHeadCount`
- `IAnnotation.GetArrowHeadSizeAtIndex`
- `IAnnotation.GetArrowHeadStyleAtIndex`
- `IAnnotation.SetArrowHeadSizeAtIndex`