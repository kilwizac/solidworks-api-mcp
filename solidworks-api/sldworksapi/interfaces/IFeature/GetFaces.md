---
type: method
interface: IFeature
member: GetFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeature.GetFaceCount
  - IFeature.IGetFaces2
keywords:
  - face
  - see
  - also
  - iface2
  - feature
  - getfaces
  - ifeature
  - faces
  - object
  - associated
  - vba
  - part
  - corresponding
  - component
  - add
  - attribute
  - include
  - library
  - vb
  - net
  - roll
  - back
  - model
---

# IFeature.GetFaces

Gets the faces in this feature.

## Signature

```csharp
System.Object GetFaces()
```
## Parameters

None.

## Return Value

Array of faces

## Remarks

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

- Get Faces Associated with Feature (VBA) (Get_Faces_Associated_with_Feature_Example_VB.htm)
- Get Part for Corresponding Component (VBA) (Get_Part_for_Corresponding_Component_Example_VB.htm)
- Add Attribute to Feature and Include in Library Feature (VB.NET) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_VBNET.htm)
- Add Attribute to Feature and Include in Library Feature (C#) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_CSharp.htm)
- Add Attribute to Feature and Include in Library Feature (VBA) (Add_Attribute_to_Feature_and_Include_In_Library_Feature_Example_VB.htm)
- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)

## See Also

- `IFeature.GetFaceCount`
- `IFeature.IGetFaces2`