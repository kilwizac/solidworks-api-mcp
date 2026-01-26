---
type: method
interface: IBody2
member: Display3
returns: System.Int32
parameters:
  -
    name: Component
    type: System.Object
    description: Part or component where the temporary body exists (see Remarks )
  -
    name: Color
    type: System.Int32
    description: COLORREF value (see Remarks )
  -
    name: Option
    type: System.Int32
    description: Selection state of temporary body as defined by swTempBodySelectOptions_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - temporary
  - bodies
  - display3
  - ibody2
  - body2
  - component
  - object
  - color
  - int32
  - option
  - create
  - loft
  - body
  - vb
  - net
  - vba
  - display
---

# IBody2.Display3

Displays this temporary body in the context of the specified part or component.

## Signature

```csharp
System.Int32 Display3( 
   System.Object
Component
,
   System.Int32
Color
,
   System.Int32
Option
)
```
## Parameters

- `Component` (System.Object): Part or component where the temporary body exists (see Remarks )
- `Color` (System.Int32): COLORREF value (see Remarks )
- `Option` (System.Int32): Selection state of temporary body as defined by swTempBodySelectOptions_e (see Remarks )

## Return Value

0 = Success 1 = Failed because this body is not a temporary body 2 = Invalid component 3 = Not a part instance

## Remarks

This method:
Is valid only for temporary bodies. To determine whether a body is temporary, use
IBody2::IsTemporaryBody
.
Applies Color to this temporary body in the graphics area, effectively selecting it.
You can also use
IBody2::MaterialPropertyValues2
to change the appearance of this temporary body.
Component cannot be in a subassembly.
Specifying Option with swTempBodySelectable sets the blocking state to
swBlockingStates_e
.swModifyBlock. Unset the blocking state by calling
IBody2::Hide
.

## Examples

- Create Loft Body (VB.NET) (Create_Loft_Body_Example_VBNET.htm)
- Create Loft Body (VBA) (Create_Loft_Body_Example_VB.htm)
- Create Loft Body (C#) (Create_Loft_Body_Example_CSharp.htm)
- Display Temporary Body (C#) (Display_Temporary_Body_Example_CSharp.htm)
- Display Temporary Body (VB.NET) (Display_Temporary_Body_Example_VBNET.htm)
- Display Temporary Body (VBA) (Display_Temporary_Body_Example_VB.htm)