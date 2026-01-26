---
type: method
interface: IFace2
member: GetFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IFace2.GetFeatureId
  - IFace2.IGetFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - face
  - getfeature
  - iface2
  - face2
  - object
  - part
  - corresponding
  - component
  - vba
  - faces
  - associated
  - vb
  - net
---

# IFace2.GetFeature

Gets the feature that owns this face.

## Signature

```csharp
System.Object GetFeature()
```
## Parameters

None.

## Return Value

Owning feature

## Remarks

In SOLIDWORKS, a face:
is the result of evaluating a feature.
can be owned by several features.
IFeature::GetFaces
or
IFeature::IGetFaces2
returns all of the faces owned by a feature. This is different from the faces highlighted in the user interface when the feature is selected. The user interface filters out multiple feature faces. This filter is only for display purposes.
To filter out multiple feature faces using the SOLIDWORKS API, you must call IFace2::GetFeature or
IFace2::IGetFeature
. Only the oldest feature from the face is returned, that is, the first owning feature in the FeatureManager design tree.

## Examples

- Get Part for Corresponding Component (VBA) (Get_Part_for_Corresponding_Component_Example_VB.htm)
- Get Faces Associated with Feature (C#) (Get_Faces_Associated_with_Feature_Example_CSharp.htm)
- Get Faces Associated with Feature (VB.NET) (Get_Faces_Associated_with_Feature_Example_VBNET.htm)
- Get Faces Associated with Feature (VBA) (Get_Faces_Associated_with_Feature_Example_VB.htm)

## See Also

- `IFace2.GetFeatureId`
- `IFace2.IGetFeature`