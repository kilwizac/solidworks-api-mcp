---
type: method
interface: ICenterMark
member: GetPosition
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the center mark (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getposition
  - icentermark
  - center
  - mark
  - position
  - index
  - int32
  - object
  - vb
  - net
  - vba
---

# ICenterMark.GetPosition

Gets the x, y, and z coordinates for the specified center mark.

## Signature

```csharp
System.Object GetPosition( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the center mark (see Remarks )

## Return Value

Array of three doubles of the x, y, and z coordinates of the center mark specified by Index

## Remarks

This method is available to center marks in a center mark set and center marks in an array of center marks.
Use:
ICenterMark::IsGrouped
to determine if the center mark is in a center mark set (i.e., a linear or circular pattern)
ICenterMark::GroupCount
to get a valid value for Index for a center mark in a center mark set.

## Examples

- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)