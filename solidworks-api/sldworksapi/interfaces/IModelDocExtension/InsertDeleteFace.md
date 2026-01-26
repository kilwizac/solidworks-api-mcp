---
type: method
interface: IModelDocExtension
member: InsertDeleteFace
returns: System.Boolean
parameters:
  -
    name: Option
    type: System.Int32
    description: Option as defined in swFaceDeleteOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - ui
related:
  - IDeleteFaceFeatureData
  - IFeatureManager.EditDeleteFace
keywords:
  - delete
  - faces
  - face
  - see
  - also
  - iface2
  - insertdeleteface
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - option
  - int32
  - boolean
  - change
  - deleteface
  - feature
  - vb
  - net
  - vba
---

# IModelDocExtension.InsertDeleteFace

Inserts a DeleteFace feature.

## Signature

```csharp
System.Boolean InsertDeleteFace( 
   System.Int32
Option
)
```
## Parameters

- `Option` (System.Int32): Option as defined in swFaceDeleteOption_e

## Return Value

True if a DeleteFace feature is inserted, false if not

## Remarks

This is a part-level operation and only works when the model is a
part document
.

## Examples

- Insert and Change DeleteFace Feature (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Feature (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)

## See Also

- `IDeleteFaceFeatureData`
- `IFeatureManager.EditDeleteFace`