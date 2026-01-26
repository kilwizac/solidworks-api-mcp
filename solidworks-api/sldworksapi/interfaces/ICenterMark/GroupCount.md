---
type: property
interface: ICenterMark
member: GroupCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - groupcount
  - icentermark
  - center
  - mark
  - group
  - count
  - int32
  - vb
  - net
  - vba
readonly: true
---

# ICenterMark.GroupCount

Gets the number of center marks in a center mark set.

## Signature

```csharp
System.Int32 GroupCount {get;}
```
## Parameters

None.

## Return Value

Number of center marks in a center mark set

## Remarks

If the center mark is in a center mark set (i.e., a linear or circular pattern), then:
you can only change the length of the arms of any of the center marks in that pattern; you cannot change any other properties of those center marks. Call
ICenterMark::IsGrouped
to determine if a center mark is in a center mark set.
use this property to get a range of valid values for
ICenterMark::GetExtendedLength
's and
ICenterMark::SetExtendedLength
's GroupID parameter. You can use a value from 0 to the number of center marks in a center mark set for the GroupID parameter.

## Examples

- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)