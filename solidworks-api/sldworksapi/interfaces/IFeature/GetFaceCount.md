---
type: method
interface: IFeature
member: GetFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeature.GetFaces
keywords:
  - face
  - see
  - also
  - iface2
  - feature
  - getfacecount
  - ifeature
  - count
  - int32
  - faces
  - affected
  - draft
  - vba
  - scale
  - associated
  - vb
  - net
---

# IFeature.GetFaceCount

Gets the number of faces in this feature.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of faces in this feature

## Remarks

Call this method before calling
IFeature::IGetFaces2
.
A face:
is the result of evaluating a feature.
can be owned by several features.
This method returns all of the faces owned by a feature. This is different from the faces highlighted in the user interface when the feature is selected. The user interface filters out multiple feature faces. This filter is only for display purposes.
NOTES
:
This method does not return any faces for draft features because draft features do not create any new faces. Drafting only modifies existing faces.
The number of faces for rolled hems is 0 because all of the faces belong to the children bends.
To filter out multiple feature faces, call
IFace2::GetFeature
or
IFace2::IGetFeature
. Only the oldest feature from the face is returned; that is, the first owning feature in the FeatureManager design tree.

## Examples

- Get Faces Affected by Draft Feature (VBA) (Get_Faces_Affected_by_Draft_Feature_Example_VB.htm)
- Get Faces Affected by Scale Feature (VBA) (Get_Faces_Affected_by_Scale_Feature_Example_VB.htm)
- Get Faces Associated with Feature (C#) (Get_Faces_Associated_with_Feature_Example_CSharp.htm)
- Get Faces Associated with Feature (VB.NET) (Get_Faces_Associated_with_Feature_Example_VBNET.htm)
- Get Faces Associated with Feature (VBA) (Get_Faces_Associated_with_Feature_Example_VB.htm)

## See Also

- `IFeature.GetFaces`