---
type: method
interface: ICenterMark
member: IsDeleted
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the center mark in the center mark set (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - isdeleted
  - icentermark
  - center
  - mark
  - deleted
  - index
  - int32
  - boolean
  - vb
  - net
  - vba
---

# ICenterMark.IsDeleted

Gets whether the specified center mark is deleted in this center mark set.

## Signature

```csharp
System.Boolean IsDeleted( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the center mark in the center mark set (see Remarks )

## Return Value

True if the specified center mark in this center mark set is deleted, false if not

## Remarks

You can use a value from 0 to the
number of center marks in a center mark set
for the Index parameter.

## Examples

- Get and Set Center Mark Set (C#) (Get_and_Set_Center_Marks_Set_Example_CSharp.htm)
- Get and Set Center Mark Set (VB.NET) (Get_and_Set_Center_Marks_Set_Example_VBNET.htm)
- Get and Set Center Mark Set (VBA) (Get_and_Set_Center_Marks_Set_Example_VBA.htm)