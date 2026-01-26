---
type: method
interface: IFeature
member: IGetFaces2
returns: Face2
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces in this feature
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
  - igetfaces2
  - ifeature
  - faces2
  - count
  - int32
  - face2
---

# IFeature.IGetFaces2

Gets the faces in this feature.

## Signature

```csharp
Face2 IGetFaces2( 
   out System.Int32
FaceCount
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces in this feature

## Return Value

in-process, unmanaged C++: Pointer to an array of pointers to the faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine the size of the array, call
IFeature::GetFaceCount
before calling this method.
IFeature::IGetFaces2 compares the number of faces in this feature with FaceCount. If the actual number of faces is larger than the specified FaceCount, then this method returns no faces and a status of S_ERROR. If the actual number of faces is smaller than the specified in FaceCount, then this method returns all of the faces in the return array, and changes FaceCount to reflect the correct number of faces.
In SOLIDWORKS, a face:
is the result of evaluating a feature.
can be owned by several features.
IFeature::IGetFaces2 returns all of the faces owned by a feature. This is different from the faces highlighted in the user interface when the feature is selected. The user interface filters out multiple feature faces. This filter is only for display purposes.
NOTES
:
This method does not return any faces for draft features because draft features do not create any new faces. Drafting only modifies existing faces.
The number of faces for rolled hems is 0 because all of the faces belong to the children bends.
To filter out multiple feature faces using the SOLIDWORKS API, you must call
IFace2::IGetFeature
. Only the oldest feature from the face is returned, that is, the first owning feature in the FeatureManager design tree.
Example
HRESULT
hr = S_OK;
long
lNumFaces = 0;
hr = feat->GetFaceCount(&lNumFaces);
LPFACE2*
aFaces = new LPFACE2[lNumFaces];
hr = feat->IGetFaces2(&lNumFaces, aFaces);
...
delete [] aFaces;
aFaces = 0;

## See Also

- `IFeature.GetFaces`