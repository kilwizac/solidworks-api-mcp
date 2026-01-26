---
type: method
interface: IAttribute
member: Delete
returns: System.Boolean
parameters:
  -
    name: BuildTree
    type: System.Boolean
    description: True to update the FeatureManager design tree, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - delete
  - iattribute
  - attribute
  - build
  - tree
  - boolean
  - faces
  - vba
  - vb
  - net
  - blended
---

# IAttribute.Delete

Deletes an attribute and lets you indicate whether or not to update the FeatureManager design tree if the deleted attribute appears in it.

## Signature

```csharp
System.Boolean Delete( 
   System.Boolean
BuildTree
)
```
## Parameters

- `BuildTree` (System.Boolean): True to update the FeatureManager design tree, false to not

## Return Value

True if the attribute is deleted, false if not

## Examples

- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Delete Attribute (C#) (Delete_Attribute_Example_CSharp.htm)
- Delete Attribute (VB.NET) (Delete_Attribute_Example_VBNET.htm)
- Delete Attribute (VBA) (Delete_Attribute_Example_VB.htm)
- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)