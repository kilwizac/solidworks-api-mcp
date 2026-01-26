---
type: method
interface: IAttributeDef
member: Register
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - register
  - iattributedef
  - attribute
  - def
  - boolean
  - create
  - vba
  - delete
  - faces
  - add
  - feature
  - include
  - library
  - vb
  - net
  - blended
---

# IAttributeDef.Register

Registers an AttributeDef object as the final part of its creation.

## Signature

```csharp
System.Boolean Register()
```
## Parameters

None.

## Return Value

True if the AttributeDef object is registered successfully, false if not

## Remarks

Call this method after the AttributeDef object is created using
ISldWorks::DefineAttribute
and after all parameters are added to the attribute definition using
IAttributeDef::AddParameter
.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Add Attribute to Feature and Include in Library Feature (C#) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_CSharp.htm)
- Add Attribute to Feature and Include in Library Feature (VB.NET) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_VBNET.htm)
- Add Attribute to Feature and Include in Library Feature (VBA) (Add_Attribute_to_Feature_and_Include_In_Library_Feature_Example_VB.htm)
- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)