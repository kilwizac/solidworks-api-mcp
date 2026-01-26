---
type: method
interface: IDeleteFaceFeatureData
member: GetDeletedFacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteFaceFeatureData.GetDeletedFaces
  - IDeleteFaceFeatureData.IGetDeletedFaces
  - IDeleteFaceFeatureData.ISetDeletedFaces
  - IDeleteFaceFeatureData.SetDeletedFaces
keywords:
  - getdeletedfacescount
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - deleted
  - faces
  - count
  - int32
  - insert
  - change
  - deleteface
  - features
  - vb
  - net
  - vba
---

# IDeleteFaceFeatureData.GetDeletedFacesCount

Gets the number of faces in the DeleteFace feature.

## Signature

```csharp
System.Int32 GetDeletedFacesCount()
```
## Parameters

None.

## Return Value

Number of faces

## Remarks

Call this method before calling
IDeleteFaceFeatureData::IGetDeletedFaces
to determine the size of its array.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Insert and Change DeleteFace Features (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Features (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)

## See Also

- `IDeleteFaceFeatureData.GetDeletedFaces`
- `IDeleteFaceFeatureData.IGetDeletedFaces`
- `IDeleteFaceFeatureData.ISetDeletedFaces`
- `IDeleteFaceFeatureData.SetDeletedFaces`