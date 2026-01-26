---
type: method
interface: ICenterMark
member: IsDetached
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of center mark (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICenterMark.AddToCenterMarkGroup
  - ICenterMark.GroupCount
  - ICenterMark.HasDetachCenterMark
  - ICenterMark.IsGrouped
  - ICenterMark.ReattachToCenterMarkGroup
keywords:
  - isdetached
  - icentermark
  - center
  - mark
  - detached
  - index
  - int32
  - boolean
  - vb
  - net
  - vba
---

# ICenterMark.IsDetached

Gets whether the specified center mark is detached.

## Signature

```csharp
System.Boolean IsDetached( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of center mark (see Remarks )

## Return Value

True if the center mark specified by Index is detached, false if not

## Remarks

This method is available to center marks in a center mark set and center marks in an array of center marks.
Use:
ICenterMark::IsGrouped
to determine if the center mark is in a center mark set (i.e., a linear or circular pattern).
ICenterMark::GroupCount
to get a valid value for Index for a center mark in a center mark set.
Use
ICenterMark::ReattachToCenterMarkGroup
to reattach a detached center mark in a center mark set. You cannot reattach a detached center mark that is not in a center mark set.

## Examples

- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)

## See Also

- `ICenterMark.AddToCenterMarkGroup`
- `ICenterMark.GroupCount`
- `ICenterMark.HasDetachCenterMark`
- `ICenterMark.IsGrouped`
- `ICenterMark.ReattachToCenterMarkGroup`