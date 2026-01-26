---
type: method
interface: IFeature
member: GetAffectedFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeature.GetAffectedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - feature
  - getaffectedfacecount
  - ifeature
  - affected
  - count
  - int32
  - faces
  - vba
---

# IFeature.GetAffectedFaceCount

Gets the number of faces modified by a feature, such as a draft feature.

## Signature

```csharp
System.Int32 GetAffectedFaceCount()
```
## Parameters

None.

## Return Value

Number of faces modified by a feature

## Remarks

Call this method before calling
IFeature::IGetAffectedFaces
.

## Examples

- Get Faces Affected By Feature (VBA) (Get_Faces_Affected_by_Feature_Example_VB.htm)

## See Also

- `IFeature.GetAffectedFaces`