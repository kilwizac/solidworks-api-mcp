---
type: method
interface: ICenterMark
member: ReattachToCenterMarkGroup
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
  - ICenterMark.HasDetachCenterMark
  - ICenterMark.IsDetached
  - ICenterMark.IsGrouped
keywords:
  - reattachtocentermarkgroup
  - icentermark
  - center
  - mark
  - reattach
  - group
  - index
  - int32
  - boolean
---

# ICenterMark.ReattachToCenterMarkGroup

Reattaches the specified center mark to the selected entity in a center mark set.

## Signature

```csharp
System.Boolean ReattachToCenterMarkGroup( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of center mark (see Remarks )

## Return Value

True if the center mark specified by Index is reattached to the selected entity in a center mark set, false if not

## Remarks

You must pre-select an entity in an existing center mark set (i.e., a linear or circular pattern) for which to reattach the center mark. If the existing center mark set is a linear pattern, then the selected entity must be in that linear pattern, else this method fails. The same rule applies when reattaching an entity to an existing center mark set that is a circular pattern.
Use:
ICenterMark::IsGrouped
to determine if the center mark is in a center mark set (i.e., a linear or circular pattern).
ICenterMark::GroupCount
to get a valid value for Index for a center mark in a center mark set.

## See Also

- `ICenterMark.HasDetachCenterMark`
- `ICenterMark.IsDetached`
- `ICenterMark.IsGrouped`