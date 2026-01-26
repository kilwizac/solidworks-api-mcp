---
type: method
interface: ICenterMark
member: AddToCenterMarkGroup
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICenterMark.GroupCount
  - ICenterMark.HasDetachCenterMark
  - ICenterMark.IsDetached
  - ICenterMark.ReattachToCenterMarkGroup
keywords:
  - addtocentermarkgroup
  - icentermark
  - center
  - mark
  - add
  - group
  - boolean
---

# ICenterMark.AddToCenterMarkGroup

Adds a center mark for the selected entity in an existing center mark set.

## Signature

```csharp
System.Boolean AddToCenterMarkGroup()
```
## Parameters

None.

## Return Value

True if a center mark is added for the selected entity in an existing center mark set, false if not (see Remarks )

## Remarks

You must pre-select an entity in an existing center mark set (i.e., a linear or circular pattern) for which to add a center mark. If the existing center mark set is a linear pattern, then the selected entity must be in that linear pattern, else this method fails. The same rule applies when adding an entity to an existing center mark set that is a circular pattern.
To determine if a center mark is in a center mark set, use
ICenterMark::IsGrouped
.

## See Also

- `ICenterMark.GroupCount`
- `ICenterMark.HasDetachCenterMark`
- `ICenterMark.IsDetached`
- `ICenterMark.ReattachToCenterMarkGroup`