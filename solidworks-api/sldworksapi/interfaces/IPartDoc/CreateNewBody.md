---
type: method
interface: IPartDoc
member: CreateNewBody
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related:
  - IPartDoc.ICreateNewBody2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - create
  - knit
  - sew
  - createnewbody
  - ipartdoc
  - part
  - doc
  - new
  - body
  - object
  - using
  - trimmed
  - surfaces
  - vba
  - reference
  - curve
  - vb
  - net
  - imported
  - solid
---

# IPartDoc.CreateNewBody

Creates a new body to use for import sewing operations and returns it to the caller.

## Signature

```csharp
System.Object CreateNewBody()
```
## Parameters

None.

## Return Value

New body

## Remarks

The intention is that with a handle on such a (initially empty) body, appropriate construction methods (for example,
IBody2::CreateTrimmedSurface
) can be called that eventually amount to a non-trivial object.

## Examples

- Create Body Using Trimmed Surfaces (VBA) (Create_Body_using_Trimmed_Surfaces_Example_VB.htm)
- Create Reference Curve (C#) (Create_Reference_Curve_Example_CSharp.htm)
- Create Reference Curve (VB.NET) (Create_Reference_Curve_Example_VBNET.htm)
- Create Reference Curve (VBA) (Create_Reference_Curve_Example_VB.htm)
- Create Imported Solid Body (C#) (Create_Imported_Solid_Body_Example_CSharp.htm)
- Create Imported Solid Body (VB.NET) (Create_Imported_Solid_Body_Example_VBNET.htm)
- Create Imported Solid Body (VBA) (Create_Imported_Solid_Body_Example_VB.htm)

## See Also

- `IPartDoc.ICreateNewBody2`