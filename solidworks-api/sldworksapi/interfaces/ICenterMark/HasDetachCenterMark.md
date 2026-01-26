---
type: method
interface: ICenterMark
member: HasDetachCenterMark
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICenterMark.AddToCenterMarkGroup
  - ICenterMark.GroupCount
  - ICenterMark.IsDetached
  - ICenterMark.IsGrouped
  - ICenterMark.ReattachToCenterMarkGroup
keywords:
  - hasdetachcentermark
  - icentermark
  - center
  - mark
  - has
  - detach
  - boolean
  - vb
  - net
  - vba
---

# ICenterMark.HasDetachCenterMark

Gets whether the selected center mark set contains any detached center marks.

## Signature

```csharp
System.Boolean HasDetachCenterMark()
```
## Parameters

None.

## Return Value

True if the selected center mark set contains any detached center marks, false if not

## Remarks

You must select the center mark set before calling this method. To determine if a center mark is in a center mark set (i.e., a linear or circular pattern), use
ICenterMark::IsGrouped
.

## Examples

- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)

## See Also

- `ICenterMark.AddToCenterMarkGroup`
- `ICenterMark.GroupCount`
- `ICenterMark.IsDetached`
- `ICenterMark.IsGrouped`
- `ICenterMark.ReattachToCenterMarkGroup`