---
type: method
interface: ICenterMark
member: GetExtendedLength
returns: System.Double
parameters:
  -
    name: GroupID
    type: System.Int32
    description: Center mark instance (see Remarks )
  -
    name: HandleID
    type: System.Int32
    description: Center mark handle ID as defined in swCenterMarkHandle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICenterMark.SetExtendedLength
keywords:
  - getextendedlength
  - icentermark
  - center
  - mark
  - extended
  - length
  - group
  - id
  - int32
  - handle
  - double
  - extend
  - arms
  - vba
  - vb
  - net
---

# ICenterMark.GetExtendedLength

Gets the extended length of the specified arm (handle) of this center mark.

## Signature

```csharp
System.Double GetExtendedLength( 
   System.Int32
GroupID
,
   System.Int32
HandleID
)
```
## Parameters

- `GroupID` (System.Int32): Center mark instance (see Remarks )
- `HandleID` (System.Int32): Center mark handle ID as defined in swCenterMarkHandle_e

## Return Value

Extended length of the HandleID

## Remarks

If the center mark is in a center mark set (i.e., a linear or circular pattern), then use
ICenterMark::GroupCount
to get the range of valid values for the GroupID parameter. You can use a value from 0 to ICenterMark::GroupCount for the GroupID parameter. To determine if a center mark is in a center mark set, use
ICenterMark::IsGrouped
.

## Examples

- Extend Arms of Center Mark (VBA) (Extend_Arms_of_Center_Mark_Examples_VB.htm)
- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)

## See Also

- `ICenterMark.SetExtendedLength`